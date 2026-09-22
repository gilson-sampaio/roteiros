/* ===== Expedição Carretera Austral — dados compartilhados da rota =====
   Usado por mapa.html e roteiro.html. Coordenadas aproximadas (planejamento). */
window.EXP = (function(){

  const meta = {
    nome: "Expedição Carretera Austral",
    veiculo: "Motorhome sobre Renault Master 2022",
    tripulacao: "2 pessoas + 1 pet",
    origem: "Eduardo Castex · La Pampa · Argentina",
    destino: "Campo Grande · MS · Brasil",
    periodo: "Agosto a Dezembro de 2026",
    distancia_completa: "≈ 16.300 km",
    distancia_essencial: "≈ 13.600 km",
  };

  /* tipos de ponto -> cor + rótulo + ícone (emoji só na legenda/popup) */
  const tipos = {
    origem:   { cor:"#16202C", label:"Origem / Base" },
    cidade:   { cor:"#475569", label:"Cidade / Apoio urbano" },
    camping:  { cor:"#2E9E5B", label:"Camping organizado" },
    wild:     { cor:"#D97706", label:"Wild camping (Wolf)" },
    apoio:    { cor:"#2563EB", label:"Ponto de apoio / oficina" },
    atracao:  { cor:"#0F766E", label:"Paisagem / mirante" },
    trilha:   { cor:"#7C3AED", label:"Trilha / trekking" },
    termas:   { cor:"#DB2777", label:"Termas" },
    fronteira:{ cor:"#DC2626", label:"Fronteira" },
    ferry:    { cor:"#0EA5C0", label:"Ferry / balsa" },
  };

  /* fases (cor da etapa) */
  const fases = [
    { id:"f1", nome:"Saída & Pampa",         mes:"Agosto",   cor:"#64748B" },
    { id:"f2", nome:"Litoral & Baleias",     mes:"Agosto",   cor:"#0EA5C0" },
    { id:"f3", nome:"Atlântico Sul",         mes:"Setembro", cor:"#2563EB" },
    { id:"f4", nome:"Fim do Mundo",          mes:"Setembro", cor:"#7C3AED" },
    { id:"f5", nome:"Glaciares & Torres",    mes:"Outubro",  cor:"#0F766E" },
    { id:"f6", nome:"Carretera Austral",     mes:"Out / Nov",cor:"#D97706" },
    { id:"f7", nome:"Lagos & Subida ao Brasil", mes:"Nov / Dez", cor:"#2E9E5B" },
  ];

  /* waypoints — var: 'both' | 'completa' (só na rota completa) */
  const wp = [
    // FASE 1 — Saída & Pampa
    {id:"eduardocastex", n:"Eduardo Castex / La Pampa", lat:-35.916, lng:-64.296, t:"origem", f:"f1", sem:1, var:"both",
      d:"Ponto de partida, no centro-norte de La Pampa. Revisão final da Master, abastecer água, gás e despensa.", hl:true},
    {id:"santarosa", n:"Santa Rosa (La Pampa)", lat:-36.620, lng:-64.290, t:"cidade", f:"f1", sem:1, var:"both",
      d:"Capital da província, a ~85 km. Primeiro apoio da rota: combustível, câmbio e compras grandes."},
    {id:"bahia", n:"Bahía Blanca", lat:-38.716, lng:-62.266, t:"apoio", f:"f1", sem:1, var:"both",
      d:"Descida pela RN 35. Última grande cidade antes da Patagônia e parada clássica de estoque pesado, revisão e troca de óleo.", hl:true},

    // FASE 2 — Litoral & baleias
    {id:"lasgrutas", n:"Las Grutas / San Antonio Oeste", lat:-40.802, lng:-65.083, t:"camping", f:"f2", sem:2, var:"both",
      d:"Balneário tranquilo, água termal do mar. Bom camping de transição."},
    {id:"madryn", n:"Puerto Madryn", lat:-42.769, lng:-65.038, t:"apoio", f:"f2", sem:2, var:"both",
      d:"Base clássica dos viajantes para a Península Valdés. Apoio completo: oficinas, GLP, água e supermercados grandes.", hl:true},
    {id:"valdes", n:"Península Valdés", lat:-42.575, lng:-64.283, t:"atracao", f:"f2", sem:3, var:"both",
      d:"Baleias-francas (temporada ago–nov), pinguins e lobos-marinhos. Imperdível.", hl:true},

    // FASE 3 — Atlântico Sul (Ruta 3)
    {id:"camarones", n:"Camarones", lat:-44.798, lng:-65.708, t:"wild", f:"f3", sem:4, var:"completa",
      d:"Vila de pescadores; pinguins em Cabo Dos Bahías. Wild camping à beira-mar."},
    {id:"deseado", n:"Puerto Deseado", lat:-47.751, lng:-65.896, t:"atracao", f:"f3", sem:5, var:"completa",
      d:"Ria do Deseado, pinguins-de-Magalhães e toninhas. Desvio cênico da Ruta 3."},
    {id:"sanjulian", n:"Puerto San Julián", lat:-49.310, lng:-67.726, t:"cidade", f:"f3", sem:5, var:"both",
      d:"Parada histórica (Magalhães). Abastecimento na descida pela Ruta 3."},
    {id:"piedrabuena", n:"Cdte. Luis Piedra Buena", lat:-49.985, lng:-68.913, t:"apoio", f:"f3", sem:6, var:"both",
      d:"Apoio às margens do Rio Santa Cruz. Posto e pernoite seguro."},
    {id:"riogallegos", n:"Río Gallegos", lat:-51.623, lng:-69.216, t:"apoio", f:"f3", sem:6, var:"both",
      d:"último grande reabastecimento antes da Terra do Fogo e da dupla fronteira. Hub de apoio do extremo sul argentino.", hl:true},

    // FASE 4 — Fim do mundo (Tierra del Fuego)
    {id:"ferrymagallanes", n:"Ferry Primera Angostura", lat:-52.430, lng:-69.580, t:"ferry", f:"f4", sem:6, var:"both",
      d:"Travessia do Estreito de Magalhães (Punta Delgada). ~20 min, sai a cada 40 min."},
    {id:"riogrande", n:"Río Grande (TdF)", lat:-53.787, lng:-67.710, t:"cidade", f:"f4", sem:7, var:"both",
      d:"Entrada na Terra do Fogo argentina. Pesca esportiva e apoio."},
    {id:"tolhuin", n:"Tolhuin / Lago Fagnano", lat:-54.510, lng:-67.193, t:"wild", f:"f4", sem:7, var:"both",
      d:"Margem do Lago Fagnano. Padaria La Unión e wild camping clássico."},
    {id:"ushuaia", n:"Ushuaia", lat:-54.807, lng:-68.307, t:"atracao", f:"f4", sem:7, var:"both",
      d:"A cidade do fim do mundo. Canal Beagle, glaciar Martial.", hl:true},
    {id:"pntdf", n:"PN Tierra del Fuego", lat:-54.850, lng:-68.570, t:"trilha", f:"f4", sem:7, var:"both",
      d:"Trilhas Costera e Hito XXIV; fim da Ruta 3. Camping Lago Roca."},

    // FASE 5 — Glaciares & Torres
    {id:"calafate", n:"El Calafate", lat:-50.339, lng:-72.275, t:"apoio", f:"f5", sem:8, var:"both",
      d:"Hub de apoio antes de Chaltén e do Chile: oficinas, GLP e último grande mercado. Base do Perito Moreno.", hl:true},
    {id:"perito", n:"Glaciar Perito Moreno", lat:-50.495, lng:-73.044, t:"atracao", f:"f5", sem:8, var:"both",
      d:"Passarelas frente ao glaciar. Um dos maiores espetáculos da Patagônia.", hl:true},
    {id:"chalten", n:"El Chaltén / Fitz Roy", lat:-49.331, lng:-72.886, t:"trilha", f:"f5", sem:9, var:"both",
      d:"Capital do trekking. Laguna de los Tres (Fitz Roy) e Laguna Torre.", hl:true},
    {id:"frpaine", n:"Fronteira Cerro Castillo", lat:-51.247, lng:-72.363, t:"fronteira", f:"f5", sem:10, var:"both",
      d:"Argentina → Chile rumo a Torres del Paine. Controle do SAG (alimentos)."},
    {id:"natales", n:"Puerto Natales", lat:-51.728, lng:-72.508, t:"cidade", f:"f5", sem:10, var:"both",
      d:"Porta de entrada do Paine. Apoio, GLP e estoque (caro no Chile)."},
    {id:"paine", n:"PN Torres del Paine", lat:-50.941, lng:-72.962, t:"trilha", f:"f5", sem:10, var:"both",
      d:"Mirante Base Torres, lagos turquesa e cornos. Campings na entrada.", hl:true},

    // FASE 6 — Carretera Austral (sul -> norte)
    {id:"chilechico", n:"Fronteira Chile Chico", lat:-46.542, lng:-71.724, t:"fronteira", f:"f6", sem:11, var:"both",
      d:"Subida pela Ruta 40 (AR) e cruzamento a Chile Chico. Início da Carretera."},
    {id:"villaohiggins", n:"Villa O'Higgins (km 0)", lat:-48.469, lng:-72.560, t:"wild", f:"f6", sem:11, var:"completa",
      d:"Marco sul da Carretera Austral (estrada sem saída). Ida e volta de Cochrane.", hl:true},
    {id:"cochrane", n:"Cochrane", lat:-47.244, lng:-72.574, t:"apoio", f:"f6", sem:12, var:"both",
      d:"Último grande apoio do sul da Carretera. Combustível e revisão."},
    {id:"riotranquilo", n:"Puerto Río Tranquilo", lat:-46.626, lng:-72.667, t:"atracao", f:"f6", sem:12, var:"both",
      d:"Capillas de Mármol (passeio de barco) no Lago General Carrera.", hl:true},
    {id:"cerrocastillo", n:"Villa Cerro Castillo", lat:-46.122, lng:-72.163, t:"trilha", f:"f6", sem:12, var:"both",
      d:"Trekking ao mirante Laguna Cerro Castillo. Paisagem alpina."},
    {id:"coyhaique", n:"Coyhaique", lat:-45.572, lng:-72.068, t:"apoio", f:"f6", sem:13, var:"both",
      d:"Capital de Aysén e o melhor apoio de toda a Carretera Austral: oficinas, GLP, peças e mercado. Parada obrigatória dos viajantes.", hl:true},
    {id:"puyuhuapi", n:"Termas de Puyuhuapi", lat:-44.327, lng:-72.558, t:"termas", f:"f6", sem:13, var:"both",
      d:"Termas à beira do fiorde + PN Queulat (Ventisquero Colgante).", hl:true},
    {id:"lajunta", n:"La Junta", lat:-43.974, lng:-72.408, t:"wild", f:"f6", sem:14, var:"both",
      d:"Cruzamento para Futaleufú. Wild camping em rios cor de turquesa."},
    {id:"futaleufu", n:"Futaleufú", lat:-43.181, lng:-71.866, t:"trilha", f:"f6", sem:14, var:"completa",
      d:"Rio esmeralda, rafting e trilhas. Desvio próximo à fronteira argentina."},
    {id:"chaiten", n:"Chaitén", lat:-42.916, lng:-72.708, t:"ferry", f:"f6", sem:14, var:"both",
      d:"Fim do trecho de estrada; ferry para Puerto Montt (reservar com antecedência).", hl:true},

    // FASE 7 — Lagos & retorno
    {id:"puertomontt", n:"Puerto Montt", lat:-41.469, lng:-72.942, t:"apoio", f:"f7", sem:14, var:"both",
      d:"Reentrada na malha asfaltada do Chile e grande hub logístico: oficinas, concessionárias e supermercados. Descanso e revisão.", hl:true},
    {id:"chiloe", n:"Chiloé (Castro)", lat:-42.481, lng:-73.765, t:"atracao", f:"f7", sem:15, var:"completa",
      d:"Palafitas e igrejas de madeira (patrimônio). Desvio cultural opcional."},
    {id:"bariloche", n:"Bariloche", lat:-41.135, lng:-71.310, t:"cidade", f:"f7", sem:15, var:"both",
      d:"De volta à Argentina pelos Sete Lagos. Apoio, chocolate e Cerro Catedral.", hl:true},
    {id:"villaangostura", n:"Villa La Angostura", lat:-40.764, lng:-71.642, t:"camping", f:"f7", sem:15, var:"both",
      d:"Rota dos Sete Lagos. Camping entre bosques e lagos andinos."},
    {id:"sanmartin", n:"San Martín de los Andes", lat:-40.158, lng:-71.353, t:"termas", f:"f7", sem:15, var:"both",
      d:"Lago Lácar; termas próximas (Lahuen Co / Epulafquen). Última pausa andina."},
    {id:"neuquen", n:"Neuquén", lat:-38.951, lng:-68.059, t:"apoio", f:"f7", sem:16, var:"both",
      d:"Saída da Patagônia rumo ao norte. Revisão antes da longa volta."},
    {id:"posadas", n:"Posadas (Misiones)", lat:-27.367, lng:-55.894, t:"cidade", f:"f7", sem:16, var:"both",
      d:"Última grande cidade argentina da subida, já no nordeste. Apoio e combustível antes de Iguazú."},
    {id:"puertoiguazu", n:"Fronteira Puerto Iguazú", lat:-25.611, lng:-54.576, t:"fronteira", f:"f7", sem:16, var:"both",
      d:"Saída da Argentina pela Ponte Tancredo Neves. Aduana, migração e o CVI do pet emitido pelo SENASA.", hl:true},
    {id:"foz", n:"Foz do Iguaçu / PR", lat:-25.530, lng:-54.583, t:"cidade", f:"f7", sem:17, var:"both",
      d:"Reentrada no Brasil. Cataratas do lado brasileiro e o primeiro grande apoio em território nacional."},
    {id:"campogrande", n:"Campo Grande / MS", lat:-20.464, lng:-54.616, t:"origem", f:"f7", sem:17, var:"both",
      d:"Destino final: subida pela BR-163 via Cascavel, Guaíra e Dourados. Fim da Expedição.", hl:true},
  ];

  /* ordem da polyline por variação (ids) */
  const rotaCompleta = wp.map(p=>p.id);
  const rotaEssencial = wp.filter(p=>p.var==="both").map(p=>p.id);

  /* ===== ALERTAS — pontos de atenção segundo relatos de viajantes =====
     NÃO entram na rota/polyline; são uma camada separada de avisos.
     cat: 'roubo' (vandalismo/furto) | 'vento' | 'ripio' | 'protesto' | 'fauna'
     nivel: 'alto' | 'medio' */
  const alertas = [
    {id:"a_conurbano", n:"Grande Buenos Aires (Conurbano)", lat:-34.680, lng:-58.530, cat:"roubo", nivel:"alto",
      d:"Relatos frequentes de furto e quebra de vidro em semáforos e de assaltos na periferia. NÃO pernoite na região. A rota não entra no Conurbano — sai de La Pampa e volta pelo norte, por Santa Fé e Entre Ríos — mas o alerta vale se você emendar um desvio a Buenos Aires."},
    {id:"a_rosario", n:"Rosario (entorno)", lat:-32.950, lng:-60.660, cat:"roubo", nivel:"medio",
      d:"Cidade com índices de violência elevados em certas zonas. Use apenas postos/áreas movimentadas na passagem; evite pernoite urbano."},
    {id:"a_comodoro", n:"Comodoro Rivadavia / Caleta Olivia", lat:-46.100, lng:-67.530, cat:"protesto", nivel:"medio",
      d:"Zona industrial com histórico de piquetes (bloqueios) na Ruta 3 e relatos de furto. Abasteça, não pernoite na rua e cheque bloqueios antes de seguir."},
    {id:"a_chalten_park", n:"Estacionamentos de trilha — El Chaltén", lat:-49.331, lng:-72.886, cat:"roubo", nivel:"medio",
      d:"Relatos de quebra de vidro em veículos parados em trailheads isolados. Não deixe nada à vista; prefira estacionar em áreas movimentadas ou vigiadas."},
    {id:"a_calafate_park", n:"Estacionamento Perito Moreno / El Calafate", lat:-50.470, lng:-73.040, cat:"roubo", nivel:"medio",
      d:"Furtos pontuais em estacionamentos turísticos. Guarde objetos de valor fora de vista ao descer do motorhome."},
    {id:"a_vento40", n:"Vento cruzado — Ruta 40 (Estepa)", lat:-49.600, lng:-71.300, cat:"vento", nivel:"alto",
      d:"Rajadas fortes e súbitas derrubam veículos altos. Reduza a velocidade, segure firme o volante e evite trafegar nas horas de pico de vento. Cuidado ao abrir portas."},
    {id:"a_vento_tdf", n:"Vento — entrada da Terra do Fogo", lat:-52.300, lng:-69.300, cat:"vento", nivel:"medio",
      d:"Trechos abertos e ventosos perto do Estreito de Magalhães. Atenção ao vento lateral no embarque do ferry e na estepe fueguina."},
    {id:"a_bajocaracoles", n:"Bajo Caracoles — Ruta 40", lat:-47.450, lng:-70.930, cat:"ripio", nivel:"medio",
      d:"Trecho isolado, ripio e combustível incerto. Leve diesel reserva, água e mantimentos; pode faltar abastecimento."},
    {id:"a_ripio_carretera", n:"Ripio — Carretera sul (Cochrane–O'Higgins)", lat:-47.900, lng:-72.600, cat:"ripio", nivel:"medio",
      d:"Ripio solto e pedras lançadas danificam para-brisa e pneus. Reduza a velocidade, aumente a distância e proteja faróis."},
    {id:"a_fauna3", n:"Fauna na pista — Ruta 3 noturna", lat:-44.000, lng:-65.600, cat:"fauna", nivel:"medio",
      d:"Guanacos e ovinos cruzam a estrada, sobretudo ao anoitecer. Evite dirigir à noite na estepe; risco real de colisão."},
  ];
  const alertaCats = {
    roubo:    { cor:"#DC2626", label:"Vandalismo / furto" },
    protesto: { cor:"#B45309", label:"Piquetes / bloqueios" },
    vento:    { cor:"#7C3AED", label:"Vento perigoso" },
    ripio:    { cor:"#A16207", label:"Ripio / dano ao veículo" },
    fauna:    { cor:"#0F766E", label:"Fauna na pista" },
  };

  /* ===== ACESSO DE MOTORHOME ÀS ATRAÇÕES =====
     sim = chega/estaciona com o motorhome · parcial = chega de MH, atração a pé/barco/shuttle
     nao = deixar o MH e ir de tour/transporte */
  const acessoInfo = {
    sim:     { cor:"#2E9E5B", label:"Acesso direto de motorhome" },
    parcial: { cor:"#D97706", label:"Chega de motorhome; atração a pé / barco" },
    nao:     { cor:"#DC2626", label:"Deixar o motorhome; ir de tour / transporte" },
  };
  /* atrações principais (estrela) + nível de acesso + nota prática */
  const atracoes = {
    valdes:        { estrela:true,  acc:"parcial", nota:"Estradas internas de ripio; entra-se de motorhome devagar. Avistamento de baleias por terra ou em passeio náutico de Pirámides." },
    deseado:       { estrela:false, acc:"parcial", nota:"Cidade acessível de MH; a ria e os pinguins são vistos em passeio de barco à parte." },
    ushuaia:       { estrela:true,  acc:"sim",     nota:"Cidade e mirantes acessíveis de motorhome. Canal Beagle por barco; glaciar Martial por estrada + a pé." },
    pntdf:         { estrela:false, acc:"sim",     nota:"Entra-se de motorhome (ingresso); trilhas Costera e Hito XXIV a pé a partir do camping Lago Roca." },
    perito:        { estrela:true,  acc:"sim",     nota:"Estaciona-se o motorhome junto às passarelas (ingresso). Atração vista a pé, sem tour obrigatório." },
    chalten:       { estrela:true,  acc:"parcial", nota:"Estaciona-se na vila; as trilhas (Laguna de los Tres / Torre) partem a pé do centro. Não precisa mover o MH." },
    paine:         { estrela:true,  acc:"parcial", nota:"Entra-se de motorhome pela estrada do parque (ingresso + ripio). Mirante Base Torres só a pé (trek longo)." },
    villaohiggins: { estrela:false, acc:"sim",     nota:"Acesso de MH pela Carretera (ripio, estrada sem saída). Marco do km 0; balsas para travessias a pé." },
    riotranquilo:  { estrela:true,  acc:"nao",     nota:"As Capillas de Mármol só por barco/caiaque — deixe o motorhome no povoado e contrate o passeio." },
    cerrocastillo: { estrela:false, acc:"parcial", nota:"Estaciona-se na vila/trailhead; o mirante Laguna Cerro Castillo é trilha a pé." },
    queulat:       { estrela:false, acc:"parcial", nota:"PN Queulat acessível de MH; o Ventisquero Colgante é visto em trilha curta a pé." },
    puyuhuapi:     { estrela:false, acc:"parcial", nota:"Termas na estrada acessíveis de MH; o spa-hotel no fiorde é só por barco." },
    futaleufu:     { estrela:false, acc:"sim",     nota:"Vila e rio acessíveis de motorhome; rafting e trilhas contratados no local." },
    chiloe:        { estrela:false, acc:"sim",     nota:"Acesso de MH via ferry. Palafitas e igrejas visíveis pela cidade, de carro/a pé." },
    sanmartin:     { estrela:false, acc:"sim",     nota:"Lago Lácar e termas próximas acessíveis de motorhome." },
  };

  /* ===== PONTOS TURÍSTICOS (catálogo) =====
     Lista ampliada e independente da rota/polyline. Foco especial na Carretera Austral.
     reg: 'AR' | 'CL'  ·  acc: 'sim'|'parcial'|'nao'  ·  estrela: imperdível
     f: fase para agrupamento. Coordenadas aproximadas (planejamento). */
  const pois = [
    // ===== FASE 2 — Litoral & Baleias (AR) =====
    {id:"valdes", n:"Península Valdés", lat:-42.575, lng:-64.283, f:"f2", reg:"AR", acc:"parcial", estrela:true,
      d:"Santuário de fauna: baleias-francas (ago–nov), pinguins, elefantes e lobos-marinhos, em uma península de estepe e golfos.",
      nota:"Estradas internas de ripio; entra-se de motorhome devagar. Baleias avistadas da costa em Puerto Pirámides ou em passeio náutico."},
    {id:"puntatombo", n:"Punta Tombo", lat:-44.043, lng:-65.230, f:"f2", reg:"AR", acc:"parcial", estrela:true,
      d:"A maior colônia continental de pinguins-de-Magalhães da América do Sul — centenas de milhares de aves.",
      nota:"Acesso final por ripio; estaciona-se e percorre-se passarelas a pé. Início de temporada a partir de setembro."},
    {id:"puntaloma", n:"Punta Loma", lat:-42.811, lng:-64.882, f:"f2", reg:"AR", acc:"sim",
      d:"Mirante sobre uma lobaria (colônia de lobos-marinhos) a poucos km de Puerto Madryn.",
      nota:"Estrada curta de ripio desde Madryn; estaciona-se no mirante. Bom passeio meia-tarde."},
    {id:"gaiman", n:"Gaiman (Galês)", lat:-43.290, lng:-65.492, f:"f2", reg:"AR", acc:"sim",
      d:"Vilarejo de colonização galesa no vale do Chubut: casas de chá tradicionais, capelas e história.",
      nota:"Acesso asfaltado e ruas tranquilas para o motorhome. Pausa cultural perto de Trelew."},

    // ===== FASE 3 — Atlântico Sul / Ruta 3 (AR) =====
    {id:"cabodosbahias", n:"Cabo Dos Bahías", lat:-44.900, lng:-65.560, f:"f3", reg:"AR", acc:"parcial",
      d:"Reserva costeira selvagem com pinguins, guanacos e aves marinhas perto de Camarones.",
      nota:"Ripio até o cabo; estaciona-se e caminha-se. Camarones serve de apoio e wild camping à beira-mar."},
    {id:"deseado", n:"Ría Deseado", lat:-47.751, lng:-65.896, f:"f3", reg:"AR", acc:"parcial",
      d:"Estuário cênico com pinguins, toninhas (golfinhos de Commerson) e história de Darwin.",
      nota:"Cidade acessível de MH; a ria e a fauna são vistas em passeio de barco à parte."},
    {id:"bosquepetrificado", n:"Bosque Petrificado Jaramillo", lat:-47.700, lng:-67.870, f:"f3", reg:"AR", acc:"sim",
      d:"Monumento Natural com troncos fossilizados de ~150 milhões de anos numa paisagem lunar.",
      nota:"Desvio de ripio da RN3; trilha curta a pé. Sem serviços — leve água e combustível."},
    {id:"monteleon", n:"PN Monte León", lat:-50.350, lng:-68.900, f:"f3", reg:"AR", acc:"parcial",
      d:"Primeiro parque nacional costeiro da Argentina: falésias, praias, pinguins e a 'Cabeça do Leão'.",
      nota:"Acessos internos de ripio sensíveis à maré; consulte o guardaparque antes de descer."},

    // ===== FASE 4 — Fim do Mundo / Terra do Fogo =====
    {id:"ushuaia", n:"Ushuaia", lat:-54.807, lng:-68.307, f:"f4", reg:"AR", acc:"sim", estrela:true,
      d:"A cidade mais austral do mundo, entre o Canal Beagle e montanhas nevadas.",
      nota:"Cidade e mirantes acessíveis de motorhome. Canal Beagle por barco; glaciar Martial por estrada + a pé."},
    {id:"beagle", n:"Canal Beagle / Les Éclaireurs", lat:-54.870, lng:-68.230, f:"f4", reg:"AR", acc:"nao",
      d:"Navegação ao farol Les Éclaireurs e ilhas de lobos-marinhos e cormorões.",
      nota:"Deixe o motorhome no porto de Ushuaia e contrate o catamarã (meio-dia)."},
    {id:"martial", n:"Glaciar Martial", lat:-54.780, lng:-68.400, f:"f4", reg:"AR", acc:"parcial",
      d:"Geleira sobre Ushuaia, com vista panorâmica da cidade e do Beagle.",
      nota:"Sobe-se de MH até a base; depois cadeirinha e trilha a pé. Frio e vento no alto."},
    {id:"pntdf", n:"PN Tierra del Fuego", lat:-54.850, lng:-68.570, f:"f4", reg:"AR", acc:"sim", estrela:true,
      d:"Florestas subantárticas, baías e o fim da Ruta 3 (km 3.079). Trilhas Costera e Hito XXIV.",
      nota:"Entra-se de motorhome (ingresso); trilhas a pé a partir do camping Lago Roca."},
    {id:"lagofagnano", n:"Lago Fagnano (Tolhuin)", lat:-54.510, lng:-67.193, f:"f4", reg:"AR", acc:"sim",
      d:"Imenso lago glaciar fueguino, pôr do sol sobre a água e a famosa padaria La Unión.",
      nota:"Margens acessíveis de MH; ótimo wild camping. Solo úmido — escolha piso firme."},

    // ===== FASE 5 — Glaciares & Torres (AR + CL) =====
    {id:"perito", n:"Glaciar Perito Moreno", lat:-50.495, lng:-73.044, f:"f5", reg:"AR", acc:"sim", estrela:true,
      d:"Parede de gelo de 60 m que avança e desaba em rupturas espetaculares. Passarelas frontais.",
      nota:"Estaciona-se o motorhome junto às passarelas (ingresso). Atração vista a pé, sem tour obrigatório."},
    {id:"upsala", n:"Glaciares Upsala & Spegazzini", lat:-50.000, lng:-73.200, f:"f5", reg:"AR", acc:"nao",
      d:"Navegação entre icebergs aos maiores glaciares do Lago Argentino.",
      nota:"Saída de barco de Punta Bandera; deixe o motorhome em El Calafate."},
    {id:"chalten", n:"El Chaltén / Fitz Roy", lat:-49.331, lng:-72.886, f:"f5", reg:"AR", acc:"parcial", estrela:true,
      d:"Capital nacional do trekking, ao pé do icônico maciço do Fitz Roy.",
      nota:"Estaciona-se na vila; as trilhas partem a pé do centro. Não precisa mover o MH."},
    {id:"lagunatorre", n:"Laguna Torre", lat:-49.300, lng:-73.000, f:"f5", reg:"AR", acc:"parcial",
      d:"Laguna glaciar com vista do afiado Cerro Torre — um dos treks clássicos de Chaltén.",
      nota:"Trilha a pé (ida/volta no dia) saindo da vila; sem necessidade de mover o motorhome."},
    {id:"lagodeldesierto", n:"Lago del Desierto", lat:-49.130, lng:-72.890, f:"f5", reg:"AR", acc:"sim",
      d:"Lago cercado de floresta ao norte de Chaltén, com vista do Fitz Roy pelo lado oposto.",
      nota:"Ripio de ~37 km desde Chaltén; estaciona-se na margem. Passeios curtos de barco."},
    {id:"paine", n:"PN Torres del Paine", lat:-50.941, lng:-72.962, f:"f5", reg:"CL", acc:"parcial", estrela:true,
      d:"O parque mais célebre do Chile: torres de granito, cornos, lagos turquesa e glaciares.",
      nota:"Entra-se de motorhome pela estrada do parque (ingresso + ripio). Mirantes principais a pé."},
    {id:"basetorres", n:"Mirador Base Torres", lat:-50.940, lng:-72.890, f:"f5", reg:"CL", acc:"parcial",
      d:"O trek-assinatura do Paine até a base das três torres, sobre uma laguna glaciar.",
      nota:"Trilha longa e exigente a pé; base nos estacionamentos/refúgios do parque."},
    {id:"glaciargrey", n:"Glaciar Grey", lat:-51.000, lng:-73.230, f:"f5", reg:"CL", acc:"parcial",
      d:"Frente glaciar e icebergs azuis flutuando no Lago Grey, setor oeste do Paine.",
      nota:"Mirante por trilha curta desde Guardería Grey, ou navegação no lago."},
    {id:"milodon", n:"Cuevas del Milodón", lat:-51.570, lng:-72.620, f:"f5", reg:"CL", acc:"sim",
      d:"Caverna gigante onde se achou pele de milodonte; réplica em tamanho real e geologia.",
      nota:"Acesso asfaltado perto de Puerto Natales; estaciona-se com facilidade."},

    // ===== FASE 6 — CARRETERA AUSTRAL (CL) — coração da viagem =====
    {id:"lagogeneralcarrera", n:"Lago General Carrera", lat:-46.550, lng:-72.000, f:"f6", reg:"CL", acc:"sim", estrela:true,
      d:"O maior lago do Chile, de um turquesa quase irreal, partilhado com a Argentina.",
      nota:"Margeado pela Carretera (ripio); vários mirantes e acessos de motorhome."},
    {id:"riotranquilo", n:"Capillas de Mármol", lat:-46.626, lng:-72.667, f:"f6", reg:"CL", acc:"nao", estrela:true,
      d:"Cavernas e colunas de mármore esculpidas pela água, em azul turquesa — ícone da Carretera.",
      nota:"Só por barco ou caiaque — deixe o motorhome no povoado de Río Tranquilo e contrate o passeio."},
    {id:"confluenciabaker", n:"Confluência Baker & Neff", lat:-47.130, lng:-72.770, f:"f6", reg:"CL", acc:"sim", estrela:true,
      d:"Encontro turquesa do caudaloso Rio Baker com o Neff — um dos cartões-postais do sul.",
      nota:"Mirante à beira da Ruta 7; estaciona-se em acostamento alargado. Trilha curta a pé."},
    {id:"puertobertrand", n:"Puerto Bertrand", lat:-46.990, lng:-72.800, f:"f6", reg:"CL", acc:"sim",
      d:"Vilarejo na nascente do Rio Baker, paraíso da pesca com mosca e de águas turquesa.",
      nota:"Acessível de motorhome ao sul do Lago General Carrera. Base tranquila de pernoite."},
    {id:"caletatortel", n:"Caleta Tortel", lat:-47.795, lng:-73.535, f:"f6", reg:"CL", acc:"parcial", estrela:true,
      d:"Vila sem ruas: só passarelas de madeira de ciprés sobre o fiorde — Zona Típica protegida.",
      nota:"Estaciona-se na entrada; o povoado é percorrido inteiramente a pé pelas passarelas."},
    {id:"villaohiggins", n:"Villa O'Higgins (km 0)", lat:-48.469, lng:-72.560, f:"f6", reg:"CL", acc:"sim",
      d:"O marco sul da Carretera Austral, fim da estrada, cercado de campos de gelo e glaciares.",
      nota:"Acesso de MH pela Carretera (ripio, estrada sem saída). Glaciar O'Higgins por barco."},
    {id:"pnpatagonia", n:"Parque Patagonia (Chacabuco)", lat:-47.130, lng:-72.380, f:"f6", reg:"CL", acc:"sim",
      d:"Estepe e montanhas restauradas pela fundação Tompkins: guanacos, pumas e flamingos.",
      nota:"Sede acessível por ripio perto de Cochrane; trilhas, mirantes e camping no parque."},
    {id:"saltoibanez", n:"Salto del Río Ibáñez", lat:-46.290, lng:-71.980, f:"f6", reg:"CL", acc:"sim",
      d:"Cachoeira potente despencando em um cânion de basalto perto de Cerro Castillo.",
      nota:"Mirante por caminho curto a pé; estacionamento simples à beira da estrada."},
    {id:"cerrocastillo", n:"RN Cerro Castillo", lat:-46.122, lng:-72.163, f:"f6", reg:"CL", acc:"parcial",
      d:"Maciço de agulhas de rocha e geleira, com laguna glaciar — alternativa menos lotada ao Paine.",
      nota:"Trek a pé desde o trailhead na Ruta 7; estaciona-se na entrada da vila."},
    {id:"reservacoyhaique", n:"RN Coyhaique", lat:-45.530, lng:-72.020, f:"f6", reg:"CL", acc:"sim",
      d:"Bosques de lenga, lagunas e mirantes a poucos km da capital de Aysén.",
      nota:"Acesso de ripio curto desde a cidade; ótimo para esticar as pernas e o pet."},
    {id:"queulat", n:"Ventisquero Colgante (Queulat)", lat:-44.500, lng:-72.230, f:"f6", reg:"CL", acc:"parcial", estrela:true,
      d:"Geleira suspensa que despenca em cascata dupla sobre uma laguna, na floresta valdiviana.",
      nota:"PN Queulat acessível de motorhome; mirante por trilha curta a pé (ingresso CONAF)."},
    {id:"bosqueencantado", n:"Bosque Encantado", lat:-44.430, lng:-72.470, f:"f6", reg:"CL", acc:"parcial",
      d:"Floresta de musgos e lagoa glaciar de tom leitoso dentro do PN Queulat.",
      nota:"Trilha a pé a partir da Ruta 7; estaciona-se no acostamento. Pode encharcar."},
    {id:"puyuhuapi", n:"Termas de Puyuhuapi", lat:-44.327, lng:-72.558, f:"f6", reg:"CL", acc:"parcial",
      d:"Termas à beira do fiorde, base perfeita após o PN Queulat.",
      nota:"Termas na estrada acessíveis de MH; o spa-hotel no fiorde é só por barco."},
    {id:"termasventisquero", n:"Termas del Ventisquero", lat:-44.380, lng:-72.560, f:"f6", reg:"CL", acc:"sim",
      d:"Piscinas termais de frente para o fiorde de Puyuhuapi, na própria Ruta 7.",
      nota:"Estacionamento próprio na estrada; ideal para relaxar após dias de ripio."},
    {id:"futaleufu", n:"Futaleufú", lat:-43.181, lng:-71.866, f:"f6", reg:"CL", acc:"sim",
      d:"Rio esmeralda de fama mundial no rafting, entre vales e montanhas andinas.",
      nota:"Vila acessível de MH por desvio de ripio; rafting e trilhas contratados no local."},
    {id:"pumalin", n:"Parque Pumalín", lat:-42.580, lng:-72.420, f:"f6", reg:"CL", acc:"parcial", estrela:true,
      d:"Alerces milenares, o vulcão Chaitén e cascatas na floresta temperada — joia dos Tompkins.",
      nota:"Campings e trilhas ao longo da Ruta 7; mirantes por caminhadas curtas a pé."},

    // ===== FASE 7 — Lagos & Retorno (CL + AR) =====
    {id:"puertovaras", n:"Puerto Varas & Vulcão Osorno", lat:-41.320, lng:-72.985, f:"f7", reg:"CL", acc:"sim", estrela:true,
      d:"Cidade à beira do Lago Llanquihue com vista dos cones de Osorno e Calbuco.",
      nota:"Acesso asfaltado; excelente base de motorhome na região dos lagos chilena."},
    {id:"petrohue", n:"Saltos del Petrohué", lat:-41.160, lng:-72.410, f:"f7", reg:"CL", acc:"sim",
      d:"Quedas de água azul-turquesa sobre rocha vulcânica no PN Vicente Pérez Rosales.",
      nota:"Acesso pavimentado; passarelas curtas a pé até os mirantes. Vulcão Osorno ao fundo."},
    {id:"chiloe", n:"Chiloé (Castro)", lat:-42.481, lng:-73.765, f:"f7", reg:"CL", acc:"sim",
      d:"Palafitas coloridas e igrejas de madeira tombadas pela UNESCO; cultura insular única.",
      nota:"Acesso de MH via ferry. Palafitas e igrejas visíveis pela cidade, a pé ou de carro."},
    {id:"sietelagos", n:"Ruta dos Sete Lagos", lat:-40.500, lng:-71.600, f:"f7", reg:"AR", acc:"sim", estrela:true,
      d:"Estrada cênica entre lagos turquesa e florestas andinas, de Angostura a San Martín.",
      nota:"Asfaltada; inúmeros mirantes e acessos de motorhome ao longo do trajeto."},
    {id:"arrayanes", n:"Bosque de Arrayanes", lat:-40.770, lng:-71.640, f:"f7", reg:"AR", acc:"nao",
      d:"Raro bosque de arrayanes de casca canela numa península do Nahuel Huapi.",
      nota:"Acesso por trilha longa (bike) ou catamarã; deixe o MH em Villa La Angostura."},
    {id:"cerrocatedral", n:"Cerro Catedral (Bariloche)", lat:-41.170, lng:-71.440, f:"f7", reg:"AR", acc:"parcial",
      d:"Maior centro de montanha da Argentina, com vista do Nahuel Huapi e dos Andes.",
      nota:"Sobe-se de MH à base; cadeirinha e trilhas de altura a pé. Circuito Chico nas redondezas."},
    {id:"sanmartin", n:"San Martín de los Andes", lat:-40.158, lng:-71.353, f:"f7", reg:"AR", acc:"sim",
      d:"Charmosa cidade-montanha à beira do Lago Lácar, fim sul dos Sete Lagos.",
      nota:"Lago Lácar e termas próximas (Lahuen Co) acessíveis de motorhome."},
  ];

  return { meta, tipos, fases, wp, rotaCompleta, rotaEssencial, alertas, alertaCats, acessoInfo, atracoes, pois };
})();
