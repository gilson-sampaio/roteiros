/* Service worker — Expedição Carretera Austral (offline-first) */
const CACHE = 'carretera-austral-v131';
const ASSETS = [
  'app.html', 'index.html',
  'mapa.html', 'roteiro.html', 'dia-a-dia.html', 'dia-a-dia-cuba.html', 'dia-a-dia-peru.html', 'dia-a-dia-atacama.html', 'dia-a-dia-patagonia.html', 'dia-a-dia-santiago.html', 'dia-a-dia-bolivia.html', 'dia-a-dia-colombia.html', 'dia-a-dia-argentina-salta.html', 'dia-a-dia-uruguai.html', 'dia-a-dia-equador.html', 'dia-a-dia-venezuela.html', 'dia-a-dia-paraguai.html', 'dia-a-dia-minas-historicas.html', 'dia-a-dia-chapada-diamantina.html', 'dia-a-dia-serra-gaucha.html', 'dia-a-dia-serra-catarinense.html', 'dia-a-dia-litoral-catarinense.html', 'dia-a-dia-canions-serra-geral.html', 'dia-a-dia-vale-europeu.html', 'dia-a-dia-pantanal-bonito.html', 'dia-a-dia-chapada-veadeiros.html', 'dia-a-dia-pantanal-norte.html', 'dia-a-dia-velho-chico.html', 'dia-a-dia-mantiqueira.html', 'dia-a-dia-serra-cipo.html', 'dia-a-dia-canastra.html', 'dia-a-dia-aguas-sul-minas.html', 'dia-a-dia-rota-emocoes.html', 'dia-a-dia-costa-descobrimento.html', 'dia-a-dia-litoral-ceara.html', 'dia-a-dia-litoral-rn.html', 'dia-a-dia-costa-corais.html', 'dia-a-dia-litoral-pernambuco.html', 'dia-a-dia-litoral-paraiba.html', 'dia-a-dia-sp-circuito-aguas.html', 'dia-a-dia-sp-campos-jordao.html', 'dia-a-dia-bolivia-sud-lipez.html', 'dia-a-dia-peru-cordillera-blanca.html', 'dia-a-dia-argentina-cuyo-mendoza.html', 'dia-a-dia-chile-central-valparaiso.html', 'dia-a-dia-argentina-patagonia-chalten.html', 'dia-a-dia-cuba-cayos-oriente.html', 'dia-a-dia-colombia-caribe-guajira.html', 'roteiros.html', 'novo-roteiro.html', 'custos.html', 'logistica.html',
  'postos.html', 'oficinas.html', 'senasa.html', 'fronteiras.html', 'pet.html',
  'documentacao.html', 'checklist.html', 'camping.html', 'catalogo.html', 'campings-brasil.html', 'campings-brasil.js', 'campings-osm.js', 'apoio-osm.js', 'vinicolas.html', 'vinicolas.js',
  'estilo-doc.css', 'dados.js', 'roteiros.js', 'servicos.js', 'app-shared.js', 'image-slot.js', 'geo.js',
  'servicos.html',
  'icon-192.png', 'icon-512.png', 'icon-180.png',
  'icon-192-maskable.png', 'icon-512-maskable.png',
  'lago.svg','glaciar.svg','picos.svg','costa.svg',
  'marmore.svg','rio.svg','termas.svg','bosque.svg',
  'vulcao.svg','cascata.svg','vila.svg','estepe.svg',
  'manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.allSettled(ASSETS.map((u) => c.add(u))))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // network-first for the Leaflet map tiles & CDN; cache-first for local app shell
  const url = new URL(req.url);
  const isLocal = url.origin === self.location.origin;
  if (isLocal) {
    // network-first for local app shell: fresh when online, cache fallback offline
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(req).then((hit) => hit || caches.match('app.html')))
    );
  } else {
    // fonts / tiles: try cache, then network, and stash a copy
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(() => hit))
    );
  }
});
