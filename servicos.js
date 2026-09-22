/* ===== Indicações de serviços por roteiro =====
   Parques · Campings · Pernoite de motorhome (postos/áreas) · Restaurantes & bares.
   Curadoria de planejamento — confirme funcionamento/condições perto da viagem.
   Carrega DEPOIS de roteiros.js; mescla em cada ROTEIRO (r.servicos). */
(function(){
  var S = {

  /* ===================== PATAGÔNIA ===================== */
  "patagonia-completa": {
    atracoes:[
      {n:"Eduardo Castex / La Pampa", base:"Eduardo Castex / La Pampa", nota:"Ponto de partida. Revisão final da Master, abastecer água, gás e despensa.", lat:-35.916, lng:-64.296},
      {n:"Santa Rosa (La Pampa)", base:"Santa Rosa (La Pampa)", nota:"Capital da província, a ~85 km da base. Primeiro apoio da rota: combustível, câmbio e compras grandes.", lat:-36.620, lng:-64.290},
      {n:"Puerto Madryn", base:"Puerto Madryn", nota:"Base clássica dos viajantes para a Península Valdés. Apoio completo: oficinas, GLP, água e supermercados grandes.", lat:-42.769, lng:-65.038},
      {n:"Península Valdés", base:"Río Negro", nota:"Baleias-francas (temporada ago–nov), pinguins e lobos-marinhos. Imperdível.", lat:-42.575, lng:-64.283},
      {n:"Puerto Deseado", base:"Ruta 3", nota:"Ria do Deseado, pinguins-de-Magalhães e toninhas. Desvio cênico da Ruta 3.", lat:-47.751, lng:-65.896},
      {n:"Río Gallegos", base:"Río Gallegos", nota:"último grande reabastecimento antes da Terra do Fogo e da dupla fronteira. Hub de apoio do extremo sul argentino.", lat:-51.623, lng:-69.216},
      {n:"Ushuaia", base:"Estreito de Magalhães", nota:"A cidade do fim do mundo. Canal Beagle, glaciar Martial.", lat:-54.807, lng:-68.307},
      {n:"PN Tierra del Fuego", base:"Estreito de Magalhães", nota:"Trilhas Costera e Hito XXIV; fim da Ruta 3. Camping Lago Roca.", lat:-54.85, lng:-68.57},
      {n:"El Calafate", base:"El Calafate", nota:"Hub de apoio antes de Chaltén e do Chile: oficinas, GLP e último grande mercado. Base do Perito Moreno.", lat:-50.339, lng:-72.275},
      {n:"Glaciar Perito Moreno", base:"Estepe", nota:"Passarelas frente ao glaciar. Um dos maiores espetáculos da Patagônia.", lat:-50.495, lng:-73.044},
      {n:"El Chaltén / Fitz Roy", base:"Estepe", nota:"Capital do trekking. Laguna de los Tres (Fitz Roy) e Laguna Torre.", lat:-49.331, lng:-72.886},
      {n:"PN Torres del Paine", base:"Estepe", nota:"Mirante Base Torres, lagos turquesa e cornos. Campings na entrada.", lat:-50.941, lng:-72.962},
      {n:"Villa O'Higgins (km 0)", base:"Estepe argentina", nota:"Marco sul da Carretera Austral (estrada sem saída). Ida e volta de Cochrane.", lat:-48.469, lng:-72.56},
      {n:"Puerto Río Tranquilo", base:"Estepe argentina", nota:"Capillas de Mármol (passeio de barco) no Lago General Carrera.", lat:-46.626, lng:-72.667},
      {n:"Villa Cerro Castillo", base:"Estepe argentina", nota:"Trekking ao mirante Laguna Cerro Castillo. Paisagem alpina.", lat:-46.122, lng:-72.163},
      {n:"Coyhaique", base:"Coyhaique", nota:"Capital de Aysén e o melhor apoio de toda a Carretera Austral: oficinas, GLP, peças e mercado. Parada obrigatória dos viajantes.", lat:-45.572, lng:-72.068},
      {n:"Termas de Puyuhuapi", base:"Estepe argentina", nota:"Termas à beira do fiorde + PN Queulat (Ventisquero Colgante).", lat:-44.327, lng:-72.558},
      {n:"Futaleufú", base:"Estepe argentina", nota:"Rio esmeralda, rafting e trilhas. Desvio próximo à fronteira argentina.", lat:-43.181, lng:-71.866},
      {n:"Chaitén", base:"Estepe argentina", nota:"Fim do trecho de estrada; ferry para Puerto Montt (reservar com antecedência).", lat:-42.916, lng:-72.708},
      {n:"Puerto Montt", base:"Puerto Montt", nota:"Reentrada na malha asfaltada do Chile e grande hub logístico: oficinas, concessionárias e supermercados. Descanso e revisão.", lat:-41.469, lng:-72.942},
      {n:"Chiloé (Castro)", base:"Cruce dos Andes", nota:"Palafitas e igrejas de madeira (patrimônio). Desvio cultural opcional.", lat:-42.481, lng:-73.765},
      {n:"Bariloche", base:"Bariloche", nota:"De volta à Argentina pelos Sete Lagos. Apoio, chocolate e Cerro Catedral.", lat:-41.135, lng:-71.31},
      {n:"Retorno a Eduardo Castex", base:"Retorno a Eduardo Castex", nota:"Subida pela RN 22 e RN 35, de Neuquén a Santa Rosa e à base. Fim da Expedição.", lat:-35.916, lng:-64.296},
    ],
    museus:[
      {n:"Museo del Fin del Mundo", base:"Ushuaia", nota:"História natural e dos povos fueguinos, no fim do mundo."},
      {n:"Museo Marítimo y del Presidio", base:"Ushuaia", nota:"No antigo presídio; história maítima e penal da Patagônia."},
      {n:"Glaciarium", base:"El Calafate", nota:"Museu do gelo patagônico; glaciologia e bar de gelo."},
    ],
    parques:[
      {n:"P. N. Torres del Paine (CL)", base:"Puerto Natales", nota:"Trekking W e maciço; reserve refúgios/camps com antecedência."},
      {n:"P. N. Los Glaciares (AR)", base:"El Calafate", nota:"Perito Moreno e El Chaltén; passarelas e trilhas."},
      {n:"P. N. Tierra del Fuego (AR)", base:"Ushuaia", nota:"Fim do mundo; trilha da costa e Lapataia."},
    ],
    campings:[
      {n:"Camping municipal de El Chaltén", base:"El Chaltén", nota:"Base barata para Fitz Roy; rachado pelo vento.", lat:-49.3315, lng:-72.8863},
      {n:"Camping Lago Viedma", base:"El Calafate", nota:"Estrutura para motorhome; vista do lago.", lat:-50.339, lng:-72.275},
    ],
    pernoite:[
      {n:"Postos YPF de rota (RN-3 / RN-40)", base:"Patagônia AR", nota:"Pátios amplos 24h, comum para pernoite de motorhome."},
      {n:"Áreas de Ruta 7 (Carretera)", base:"Aysén, CL", nota:"Beira de lago e mirantes; wild camping responsável."},
    ],
    comer:[
      {n:"La Tablita", base:"El Calafate", nota:"Cordeiro patagônico no espeto; clássico de Calafate."},
      {n:"La Cervecería", base:"El Chaltén", nota:"Cervejas artesanais e locro na capital do trekking."},
      {n:"La Tablita", base:"El Calafate", nota:"Cordeiro patagônico no espeto (asado)."},
      {n:"La Zaina / cervejarias", base:"El Chaltén", nota:"Cerveja artesanal e cordeiro após o trekking."},
    ],
  },
  "carretera-direta": {
    atracoes:[
      {n:"Eduardo Castex / La Pampa", base:"Eduardo Castex / La Pampa", nota:"Ponto de partida. Revisão final da Master, água, gás e despensa antes da estrada.", lat:-35.916, lng:-64.296},
      {n:"San Carlos de Bariloche", base:"San Carlos de Bariloche", nota:"Base para preparar o cruce: oficina, GLP e o último grande apoio barato antes do Chile.", lat:-41.1348, lng:-71.3125},
      {n:"Puerto Varas", base:"Paso Cardenal Samoré", nota:"Cidade-base da Região dos Lagos, acessível de motorhome; Saltos del Petrohué e vulcão Osorno por perto.", lat:-41.32, lng:-72.985},
      {n:"Puerto Montt", base:"Puerto Montt", nota:"Hub logístico e km 0 oficial da Carretera Austral. Mercado Angelmó e grande apoio.", lat:-41.4688, lng:-72.9445},
      {n:"Parque Pumalín", base:"Parque Pumalín", nota:"Campings e trilhas ao longo da Ruta 7; alerces milenares e mirantes por caminhadas curtas a pé.", lat:-42.58, lng:-72.42},
      {n:"Futaleufú", base:"Parque Pumalín", nota:"Rio esmeralda de fama mundial no rafting, num desvio próximo à fronteira argentina.", lat:-43.1808, lng:-71.8685},
      {n:"Puyuhuapi", base:"Parque Pumalín", nota:"Termas à beira do fiorde, base perfeita para o PN Queulat.", lat:-44.3268, lng:-72.5605},
      {n:"Ventisquero Colgante (Queulat)", base:"Parque Pumalín", nota:"Geleira suspensa em cascata dupla sobre uma laguna, na floresta valdiviana.", lat:-44.5, lng:-72.23},
      {n:"Coyhaique", base:"Coyhaique", nota:"Capital de Aysén e o melhor apoio de toda a Carretera: oficinas, GLP, peças e mercado.", lat:-45.5718, lng:-72.0705},
      {n:"Villa Cerro Castillo", base:"RN Cerro Castillo", nota:"Maciço de agulhas e geleira com laguna glaciar — trekking alpino menos lotado que o Paine.", lat:-46.1218, lng:-72.1655},
      {n:"Salto del Río Ibáñez", base:"RN Cerro Castillo", nota:"Mirante por caminho curto a pé; estacionamento simples à beira da estrada.", lat:-46.29, lng:-71.98},
      {n:"Capillas de Mármol", base:"RN Cerro Castillo", nota:"Cavernas e colunas de mármore em azul turquesa no Lago General Carrera — ícone da Ruta 7.", lat:-46.6258, lng:-72.6695},
      {n:"Puerto Bertrand", base:"RN Cerro Castillo", nota:"Vilarejo na nascente do Baker, paraíso da pesca com mosca. Base tranquila de pernoite.", lat:-46.99, lng:-72.8},
      {n:"Confluência Baker & Neff", base:"RN Cerro Castillo", nota:"Mirante à beira da Ruta 7; estaciona-se em acostamento alargado. Trilha curta a pé.", lat:-47.13, lng:-72.77},
      {n:"Caleta Tortel", base:"RN Cerro Castillo", nota:"Vila sem ruas: só passarelas de ciprés. Estaciona-se na entrada e percorre-se a pé.", lat:-47.795, lng:-73.535},
      {n:"Villa O'Higgins (km 0)", base:"RN Cerro Castillo", nota:"Marco sul da Carretera Austral, fim da estrada, cercado de campos de gelo. Estrada sem saída.", lat:-48.4688, lng:-72.5625},
      {n:"Retorno a Eduardo Castex", base:"Retorno a Eduardo Castex", nota:"Volta pela RN 22 e RN 35, via Neuquén e Santa Rosa. Fim da Carretera Direta.", lat:-35.916, lng:-64.296},
    ],
    museus:[
      {n:"Museo Regional de Aysén", base:"Coyhaique", nota:"História dos colonos e da região de Aysén."},
      {n:"Museo Escuela / Arte rupestre", base:"Cerro Castillo", nota:"Pinturas rupestres da Piedra del Indio, na PN Cerro Castillo."},
    ],
    parques:[
      {n:"P. N. Queulat", base:"Puyuhuapi", nota:"Ventisquero Colgante; trilha curta ao mirante."},
      {n:"P. N. Cerro Castillo", base:"Villa Cerro Castillo", nota:"Trekking alpino menos lotado que o Paine."},
      {n:"P. N. Patagonia", base:"Cochrane", nota:"Estepe e fauna (huemul, guanaco); dos Tompkins."},
    ],
    campings:[
      {n:"Camping em Río Tranquilo", base:"Puerto Río Tranquilo", nota:"Base para as Capillas de Mármol.", lat:-46.626, lng:-72.667},
      {n:"Camping de Caleta Tortel", base:"Caleta Tortel", nota:"Vila de passarelas; estacione na entrada.", lat:-47.795, lng:-73.535},
    ],
    pernoite:[
      {n:"Áreas da Ruta 7 (ripio)", base:"Aysén, CL", nota:"Mirantes e beira de rio; leve diesel reserva."},
      {n:"Posto Copec de Coyhaique", base:"Coyhaique", nota:"Melhor apoio da Carretera; reabasteça tudo aqui.", lat:-45.572, lng:-72.068},
    ],
    comer:[
      {n:"Mamma Gaucha", base:"Coyhaique", nota:"Pizzas, cordeiro e cervejas patagônicas."},
      {n:"Dalí Café", base:"Coyhaique", nota:"Boa parada de café e doces na cidade-base."},
      {n:"Mercado/cocinerías de Angelmó", base:"Puerto Montt", nota:"Curanto e frutos do mar no km 0."},
      {n:"Restôs de Coyhaique", base:"Coyhaique", nota:"Cordeiro magallânico e cervejas locais."},
    ],
  },

  /* ===================== MINAS GERAIS ===================== */
  "minas-cidades-historicas": {
    atracoes:[
      {n:"Belo Horizonte", base:"Belo Horizonte", nota:"Capital e ponto de partida do circuito da Estrada Real.", lat:-19.917, lng:-43.9345},
      {n:"Sabará", base:"Sabará", nota:"Igreja de Nossa Senhora do Ó e ouro colonial às portas de BH.", lat:-19.8857, lng:-43.806},
      {n:"Ouro Preto", base:"Ouro Preto", nota:"Conjunto barroco a pé; estacione e caminhe pelas ladeiras de pedra.", lat:-20.3856, lng:-43.5035},
      {n:"Mariana", base:"Sabará", nota:"Primeira capital de Minas; Sé com órgão alemão Arp Schnitger.", lat:-20.3777, lng:-43.4163},
      {n:"Congonhas", base:"Sabará", nota:"Os Doze Profetas de Aleijadinho no adro do Santuário do Bom Jesus.", lat:-20.4998, lng:-43.858},
      {n:"Tiradentes", base:"Tiradentes", nota:"Centro histórico compacto, ateliês e alta gastronomia ao pé da Serra de São José.", lat:-21.11, lng:-44.177},
      {n:"Diamantina", base:"Diamantina", nota:"Patrimônio UNESCO; casarões, casa de JK e a Vesperata nas ruas.", lat:-18.2412, lng:-43.6003},
      {n:"Milho Verde", base:"Diamantina", nota:"Distrito serrano com cachoeiras e vida boêmia, no Espinhaço.", lat:-18.456, lng:-43.435},
    ],
    parques:[
      {n:"P. E. do Itacolomi", base:"Ouro Preto", nota:"Trilhas ao Pico do Itacolomi e cachoeiras."},
      {n:"Serra de São José", base:"Tiradentes", nota:"Mirantes e trilhas com vista da vila."},
      {n:"P. E. do Biribiri", base:"Diamantina", nota:"Cachoeiras e cerrado de altitude."},
    ],
    igrejas:[
      {n:"Igreja São Francisco de Assis", base:"Ouro Preto", nota:"Obra-prima de Aleijadinho e Mestre Ataíde; ícone do barroco."},
      {n:"Matriz N. S. do Pilar", base:"Ouro Preto", nota:"Talha dourada exuberante; uma das mais ricas do Brasil."},
      {n:"Santuário Bom Jesus de Matosinhos", base:"Congonhas", nota:"Os Doze Profetas de Aleijadinho; patrimônio UNESCO."},
      {n:"Catedral da Sé de Mariana", base:"Mariana", nota:"Órgão alemão Arp Schnitger (1701); concertos."},
      {n:"Matriz de Santo Antônio", base:"Tiradentes", nota:"Fachada atribuída a Aleijadinho e interior dourado."},
      {n:"Igreja São Francisco de Assis", base:"São João del-Rei", nota:"Projeto de Aleijadinho; adro com palmeiras imperiais."},
      {n:"Catedral de Santo Antônio", base:"Diamantina", nota:"Cartão-postal do centro histórico (UNESCO)."},
    ],
    campings:[
      {n:"Camping no Vale do Paraopeba", base:"Ouro Preto/Lavras Novas", nota:"Pousadas-camping em Lavras Novas.", lat:-20.3856, lng:-43.5035},
      {n:"Camping em Milho Verde", base:"Milho Verde", nota:"Vila serrana; campings simples e cachoeiras.", lat:-18.456, lng:-43.435},
    ],
    encontros:[
      {n:"Encontros de motorhome na Estrada Real", base:"Tiradentes/Ouro Preto", nota:"Confraternizações de caravanismo nas cidades históricas; agenda no MaCamp e ANACAMP.", lat:-20.3856, lng:-43.5035},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Minas Gerais", nota:"Encontros espontâneos de motorhome/trailer pelo circuito mineiro."},
    ],
    pernoite:[
      {n:"Postos da BR-040 (caminhoneiros)", base:"Congonhas/Conselheiro Lafaiete", nota:"Pátios amplos para pernoite a caminho.", lat:-20.4998, lng:-43.858},
      {n:"Estacionamentos de centro histórico", base:"Ouro Preto", nota:"Deixe a van e ande a pé; ruas são de pedra.", lat:-20.3856, lng:-43.5035},
    ],
    comer:[
      {n:"O Passo / Forno de Barro", base:"Ouro Preto", nota:"Cozinha mineira contemporânea e de fogão a lenha."},
      {n:"Bené da Flauta", base:"Ouro Preto", nota:"Releituras da cozinha mineira em casarão histórico (TasteAtlas top)."},
      {n:"Casa do Ouvidor", base:"Ouro Preto", nota:"Clássico mineiro na Rua Direita; entre os melhores de MG."},
      {n:"Tragaluz", base:"Tiradentes", nota:"Um dos melhores do Brasil; peça a Pintada Tragaluz (Rua Direita)."},
      {n:"Pacco & Bacco", base:"Tiradentes", nota:"Cordeiro, massas artesanais e ótima carta de vinhos."},
      {n:"Viradas do Largo", base:"Tiradentes", nota:"Comida mineira tradicional (Rua do Moinho)."},
      {n:"Vesperata e bares", base:"Diamantina", nota:"Música na rua (qua/sáb) com petiscos."},
      {n:"Cervejaria Ouro Preto / Gontijo", base:"Ouro Preto", nota:"Cervejas artesanais mineiras e petiscos no centro."},
      {n:"Bar do Quim", base:"São João del-Rei", nota:"Boteco tradicional; torresmo, linguiça e cachaça mineira."},
      {n:"Apojeu", base:"São João del-Rei", nota:"Alta gastronomia mineira premiada, em casarão histórico."},
      {n:"Empório Sô Tismo", base:"Tiradentes", nota:"Cachaçaria e tábuas de queijo/embutidos artesanais."},
    ],
    museus:[
      {n:"Inhotim", base:"Brumadinho", nota:"Maior museu de arte contemporânea a céu aberto do mundo; jardim botânico.", lat:-20.1219, lng:-44.2003},
      {n:"Museu da Inconfidência", base:"Ouro Preto", nota:"No antigo casarão da Câmara; história da Inconfidência Mineira."},
      {n:"Museu do Oratório", base:"Ouro Preto", nota:"Acervo de oratórios e arte sacra, junto à igreja do Carmo."},
      {n:"Museu de Arte Sacra (Mariana)", base:"Mariana", nota:"Talhas, pinturas e ourivesaria do barroco mineiro."},
      {n:"Museu Casa da Baronesa", base:"São João del-Rei", nota:"Casario do séc. 19 com mobiliário e cotidiano da elite mineira."},
      {n:"Memorial Vale (Trem Maria-Fumaça)", base:"São João del-Rei", nota:"Locomotivas a vapor históricas; viagem a Tiradentes."},
      {n:"Museu do Diamante", base:"Diamantina", nota:"Casa do séc. 18; mineração de diamantes e história local."},
    ],
  },
  "minas-velho-chico": {
    atracoes:[
      {n:"Belo Horizonte", base:"Belo Horizonte", nota:"Ponto de partida rumo ao norte e ao Rio São Francisco.", lat:-19.9168, lng:-43.9370},
      {n:"Três Marias", base:"Três Marias", nota:"Grande represa do São Francisco; pesca esportiva e lago.", lat:-18.2057, lng:-45.2589},
      {n:"Pirapora", base:"Três Marias", nota:"Vapor Benjamin Guimarães e ateliês de carrancas à beira do rio.", lat:-17.345, lng:-44.942},
      {n:"Cavernas do Peruaçu", base:"São Francisco", nota:"Salões gigantes e arte rupestre; só com agendamento e condutor credenciado.", lat:-15.108, lng:-44.239},
    ],
    museus:[
      {n:"Casa do Artesão / Carrancas", base:"Pirapora", nota:"Carrancas do São Francisco e artesanato ribeirinho."},
      {n:"Museu Regional", base:"Januária", nota:"História do norte mineiro e da cultura da cachaça."},
    ],
    parques:[
      {n:"P. N. Cavernas do Peruaçu", base:"Itacarambi", nota:"Salões e arte rupestre; só com agendamento e condutor."},
      {n:"Vapor Benjamin Guimarães", base:"Pirapora", nota:"Único barco a vapor em operação no mundo; passeios pelo rio."},
      {n:"Orla e ponte ferroviária", base:"Pirapora", nota:"Cartão-postal do Velho Chico; calçadão e carrancas (Casa do Artesão)."},
      {n:"Lago de Três Marias", base:"Três Marias", nota:"Pesca esportiva e praias de água doce."},
      {n:"Parque Estadual da Sapucaí", base:"Januária", nota:"Cerrado e veredas à beira do São Francisco."},
    ],
    campings:[
      {n:"Campings à beira do rio", base:"Pirapora", nota:"Áreas ribeirinhas; cuidado com o nível do rio.", lat:-17.345, lng:-44.942},
      {n:"Base em Itacarambi", base:"Itacarambi", nota:"Apoio para o Peruaçu; pousadas e campings simples.", lat:-15.099, lng:-44.093},
    ],
    pernoite:[
      {n:"Postos da BR-365 / BR-135", base:"Pirapora/Montes Claros", nota:"Pátios de caminhão; pernoite comum no norte mineiro.", lat:-17.345, lng:-44.942},
      {n:"Orla de Pirapora", base:"Pirapora", nota:"Estacionamento à beira-rio; movimento à noite.", lat:-17.345, lng:-44.942},
    ],
    comer:[
      {n:"Peixarias ribeirinhas", base:"Pirapora", nota:"Surubim e dourado do São Francisco."},
      {n:"Bares de cachaça", base:"Januária", nota:"Cachaça artesanal e petiscos de tabuleiro."},
    ],
    eventos:[
      {n:"Festas Juninas ribeirinhas", base:"Pirapora/Januária", nota:"Junho; quadrilhas e cultura do São Francisco."},
      {n:"Vaporzão (Festa do Vapor)", base:"Pirapora", nota:"Celebra o histórico barco a vapor e o rio."},
    ],
    encontros:[
      {n:"Encontros ribeirinhos de campismo", base:"Pirapora/Januária", nota:"Confraternizações de motorhome às margens do São Francisco; agenda no MaCamp e ANACAMP.", lat:-17.345, lng:-44.942},
    ],
  },
  "minas-mantiqueira": {
    atracoes:[
      {n:"Itajubá", base:"Itajubá", nota:"Cidade-portal do Sul de Minas, base de chegada à Mantiqueira.", lat:-22.4255, lng:-45.452},
      {n:"Aiuruoca", base:"Aiuruoca", nota:"Vale do Matutu e Pico do Papagaio; trilhas e cachoeiras na alta serra.", lat:-21.976, lng:-44.604},
      {n:"Vale do Matutu", base:"Aiuruoca", nota:"Comunidade serrana cercada de montanhas e quedas-d'água.", lat:-22.03, lng:-44.61},
      {n:"Alagoa", base:"Aiuruoca", nota:"Vilarejo de queijos artesanais premiados, a 1.500 m de altitude.", lat:-22.166, lng:-44.639},
      {n:"Passa Quatro", base:"Passa Quatro", nota:"Serra Fina e o histórico túnel/trem da Mantiqueira.", lat:-22.389, lng:-44.969},
      {n:"Gonçalves", base:"Passa Quatro", nota:"Vida rural, ateliês e trilhas na crista da Mantiqueira.", lat:-22.658, lng:-45.857},
      {n:"Monte Verde", base:"Passa Quatro", nota:"Vila alpina; mirantes (Pedra Redonda), fondue e cervejarias.", lat:-22.864, lng:-46.039},
    ],
    museus:[
      {n:"Museu da Estação / Locomotiva 332", base:"Passa Quatro", nota:"Memória ferroviária e da Revolução de 1932."},
      {n:"Casa de Cultura", base:"Aiuruoca", nota:"Cultura serrana e história da Serra da Mantiqueira."},
    ],
    parques:[
      {n:"APA Serra da Mantiqueira", base:"Aiuruoca", nota:"Pico do Papagaio e Vale do Matutu."},
      {n:"P. E. da Serra do Papagaio", base:"Aiuruoca", nota:"Parque de altitude com araucárias; abrange Alagoa e Itamonte."},
      {n:"Cachoeira dos Garcias", base:"Aiuruoca", nota:"A mais famosa da cidade (~30 m), poço e trilha fácil."},
      {n:"P. N. do Itatiaia (lado MG)", base:"Itamonte", nota:"Acesso à parte alta; Pico das Agulhas Negras."},
    ],
    campings:[
      {n:"Campings do Vale do Matutu", base:"Aiuruoca", nota:"Beira de rio e trilhas; frio forte à noite.", lat:-21.976, lng:-44.604},
      {n:"Camping em Gonçalves", base:"Gonçalves", nota:"Sítios e campings rurais na crista da serra.", lat:-22.658, lng:-45.857},
    ],
    encontros:[
      {n:"Encontros de inverno na Mantiqueira", base:"Monte Verde/Gonçalves", nota:"Confraternizações de motorhome/trailer na serra; agenda no MaCamp e ANACAMP.", lat:-22.658, lng:-45.857},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Sul de Minas", nota:"Encontros espontâneos de caravanismo nas montanhas mineiras."},
    ],
    pernoite:[
      {n:"Postos da BR-354 / Rod. Fernão Dias", base:"Itanhandu/Itajubá", nota:"Pátios na chegada à serra.", lat:-22.4255, lng:-45.452},
      {n:"Estacionamento em Monte Verde", base:"Monte Verde", nota:"Vila pequena; chegue cedo em feriados.", lat:-22.864, lng:-46.039},
    ],
    comer:[
      {n:"Queijarias premiadas", base:"Alagoa", nota:"Queijos artesanais a 1.500 m; compre na fazenda."},
      {n:"Restaurante Portal da Serra", base:"Vale do Matutu", nota:"Cozinha afetiva com vista (sáb/dom/feriados)."},
      {n:"Tia Iraci & Cantinho do Vale", base:"Vale do Matutu", nota:"Comida caseira ao lado do Casarão histórico."},
      {n:"Fondue e cervejarias", base:"Monte Verde", nota:"Fondue, trutas e cervejas de montanha."},
    ],
  },
  "minas-aguas-sul": {
    atracoes:[
      {n:"São Lourenço", base:"São Lourenço", nota:"Parque das Águas com fontes, gruta e lago; coração do circuito.", lat:-22.1158, lng:-45.0539},
      {n:"Caxambu", base:"São Lourenço", nota:"Água gasosa natural, parque e casario da Belle Époque.", lat:-21.9783, lng:-44.9319},
      {n:"São Thomé das Letras", base:"São Thomé das Letras", nota:"Serra quartzítica mística; grutas, mirantes e casario de pedra.", lat:-21.7239, lng:-44.9869},
    ],
    museus:[
      {n:"Museu das Águas / Casa de Cultura", base:"Cambuquira", nota:"Memória das estâncias hidrominerais da Belle Époque."},
      {n:"Centro de Cultura de São Thomé", base:"São Thomé das Letras", nota:"Lendas, misticismo e história da cidade de pedra."},
    ],
    parques:[
      {n:"Parques das Águas", base:"São Lourenço/Caxambu", nota:"Fontes minerais e bosques da Belle Époque."},
      {n:"Cachoeiras de São Thomé", base:"São Thomé das Letras", nota:"Eubiose e Véu de Noiva; grutas e mirantes."},
      {n:"Pedra da Bruxa & Pico do Gavião", base:"São Thomé das Letras", nota:"Mirantes lendários para o pôr do sol místico."},
      {n:"Gruta do Carimbado", base:"São Thomé das Letras", nota:"Caverna de quartzito ligada às lendas da cidade."},
      {n:"Lago Guanabara", base:"Lambari", nota:"Pedalinho e orla do balneário da Belle Époque."},
    ],
    campings:[
      {n:"Campings de São Thomé", base:"São Thomé das Letras", nota:"Áreas com vista do vale e do pôr do sol.", lat:-21.7239, lng:-44.9869},
      {n:"Camping em Lambari", base:"Lambari", nota:"Beira do lago Guanabara; estrutura simples.", lat:-21.9758, lng:-45.3508},
    ],
    pernoite:[
      {n:"Postos da BR-459 / Rod. Fernão Dias", base:"Pouso Alegre/Itajubá", nota:"Pátios de apoio a caminho do circuito.", lat:-22.4255, lng:-45.452},
      {n:"Estacionamento das estâncias", base:"São Lourenço", nota:"Vagas perto do Parque das Águas.", lat:-22.1158, lng:-45.0539},
    ],
    comer:[
      {n:"Cafés e doçarias", base:"Caxambu", nota:"Doces de tabuleiro e água gasosa na fonte."},
      {n:"O Alquimista", base:"São Thomé das Letras", nota:"Comida mineira (tutu, vaca atolada) em casarão do séc. 18."},
      {n:"Parrilla del Brujo", base:"São Thomé das Letras", nota:"Carnes na parrilla em frente à praça central."},
      {n:"Jardim Secreto", base:"São Thomé das Letras", nota:"Jantar com 'show de ETs'; experiência típica da cidade."},
    ],
    igrejas:[
      {n:"Igreja Matriz de São Thomé", base:"São Thomé das Letras", nota:"Construção de pedra na praça central, junto à gruta."},
      {n:"Santuário de Nhá Chica", base:"Baependi", nota:"Túmulo da beata; uma das maiores romarias do sul de Minas."},
    ],
    eventos:[
      {n:"Encontros de Música & Misticismo", base:"São Thomé das Letras", nota:"Festivais alternativos na 'cidade mística' de Minas."},
    ],
    encontros:[
      {n:"Encontros de campismo no Circuito das Águas", base:"São Lourenço/Caxambu", nota:"Confraternizações de motorhome nas estâncias hidrominerais; agenda no MaCamp e ANACAMP.", lat:-21.9783, lng:-44.9319},
    ],
  },
  "minas-serra-cipo": {
    atracoes:[
      {n:"Belo Horizonte", base:"Belo Horizonte", nota:"Ponto de partida, a ~1h30 da Serra do Cipó.", lat:-19.9155, lng:-43.9325},
      {n:"PARNA Serra do Cipó", base:"PARNA Serra do Cipó", nota:"Trilhas e cachoeiras do PARNA; base de pousadas em Cardeal Mota.", lat:-19.3389, lng:-43.6028},
      {n:"Lapinha da Serra", base:"Lapinha da Serra", nota:"Vila bucólica com lago e o Morro da Carapuça.", lat:-19.185, lng:-43.555},
      {n:"Cachoeira do Tabuleiro", base:"Lapinha da Serra", nota:"A maior cachoeira de Minas (273 m); subida com horário controlado.", lat:-19.093, lng:-43.658},
    ],
    museus:[
      {n:"Casa de Cultura", base:"Conceição do Mato Dentro", nota:"História colonial e do ciclo do ouro na cidade."},
      {n:"Centro de Visitantes do PARNA", base:"Serra do Cipó", nota:"Ecologia do cerrado de altitude e dos campos rupestres."},
    ],
    parques:[
      {n:"P. N. da Serra do Cipó", base:"Cardeal Mota", nota:"Trilhas da Farofa, Bandeirinhas e cachoeiras."},
      {n:"MN Cachoeira do Tabuleiro", base:"Conceição do Mato Dentro", nota:"Maior queda de Minas (273 m); horário de subida."},
      {n:"Cachoeira da Farofa", base:"Santana do Riacho", nota:"7 km de trilha até queda de 80 m e piscinas; dentro do PARNA."},
      {n:"Cânion das Bandeirinhas", base:"Santana do Riacho", nota:"Paredes de quartzito e rio; trilha longa (bike ou guia)."},
      {n:"Cachoeira Grande & Serra Morena", base:"Santana do Riacho", nota:"Quedas largas de fácil acesso na MG-010."},
      {n:"Cachoeira do Bicame", base:"Lapinha da Serra", nota:"Poço escuro em RPPN; trilha de ~9 km, cota diária."},
      {n:"Pico da Lapinha", base:"Lapinha da Serra", nota:"Trilha de 9 km com lances de escalada; vista do vale."},
      {n:"Estátua do Juquinha", base:"Santana do Riacho", nota:"Ícone da serra à beira da MG-010; o apanhador de flores."},
    ],
    campings:[
      {n:"Campings da Rota do Cipó", base:"Cardeal Mota", nota:"Vários campings na MG-010, perto do parque.", lat:-19.327, lng:-43.616},
      {n:"Camping Véu da Noiva (ACM)", base:"Serra do Cipó", nota:"Tradicional, no Circuito do PARNA; perto da cachoeira.", lat:-19.3389, lng:-43.6028},
      {n:"Camping Matinha", base:"Santana do Riacho", nota:"Área arborizada com cachoeira a 50 m."},
      {n:"Camping em Lapinha da Serra", base:"Lapinha da Serra", nota:"Vila bucólica; áreas com vista do lago.", lat:-19.185, lng:-43.555},
    ],
    pernoite:[
      {n:"Postos da MG-010", base:"Cardeal Mota", nota:"Apoio na entrada da serra; pernoite com cautela.", lat:-19.327, lng:-43.616},
      {n:"Áreas perto do Tabuleiro", base:"Conceição do Mato Dentro", nota:"Estacione e suba cedo (horário-limite).", lat:-19.0376, lng:-43.4258},
    ],
    comer:[
      {n:"Restaurantes da MG-010", base:"Serra do Cipó", nota:"Comida mineira e cafés de fazenda."},
      {n:"Quitandas de Lapinha", base:"Lapinha da Serra", nota:"Quitandas, queijos e cafés caseiros."},
    ],
    eventos:[
      {n:"Travessia Lapinha–Tabuleiro", base:"Lapinha da Serra", nota:"Trekking clássico de 2–3 dias à maior queda de Minas (só c/ guia)."},
      {n:"Festa de N. Sra. da Conceição", base:"Conceição do Mato Dentro", nota:"Dez; padroeira e cultura da cidade histórica."},
    ],
    encontros:[
      {n:"Encontros de campismo na Serra do Cipó", base:"Cardeal Mota (Serra do Cipó)", nota:"Confraternizações de motorhome/trailer na região do PARNA; agenda no MaCamp e ANACAMP.", lat:-19.327, lng:-43.616},
    ],
  },
  "minas-canastra": {
    atracoes:[
      {n:"Passos", base:"Passos", nota:"Cidade-portal do sudoeste mineiro, base de chegada à Canastra.", lat:-20.7197, lng:-46.6097},
      {n:"São Roque de Minas", base:"São Roque de Minas", nota:"Principal entrada do PARNA Serra da Canastra; pousadas e queijarias.", lat:-20.2447, lng:-46.365},
      {n:"Nascente do São Francisco", base:"São Roque de Minas", nota:"Nascente histórica do Rio São Francisco, no alto do chapadão.", lat:-20.233, lng:-46.448},
      {n:"Casca d'Anta", base:"São Roque de Minas", nota:"Primeira grande queda do São Francisco (186 m); topo e base por trilhas.", lat:-20.289, lng:-46.516},
      {n:"Delfinópolis", base:"Vargem Bonita", nota:"Cânions e lago de Furnas; passeios de barco e mirantes.", lat:-20.3433, lng:-46.8458},
    ],
    museus:[
      {n:"Museu do Queijo Canastra", base:"Medeiros", nota:"Tradição do queijo artesanal (IG) da Serra da Canastra."},
      {n:"Casa de Cultura", base:"São Roque de Minas", nota:"História do sertão e do PARNA Serra da Canastra."},
    ],
    parques:[
      {n:"P. N. da Serra da Canastra", base:"São Roque de Minas", nota:"Nascente do São Francisco e Casca d'Anta."},
      {n:"Cânions de Furnas", base:"Delfinópolis", nota:"Passeio de barco no lago; depende do nível."},
      {n:"Cachoeira Casca d'Anta", base:"São Roque de Minas", nota:"186 m, primeira grande queda do São Francisco; parte alta e baixa."},
      {n:"Curral de Pedras", base:"São Roque de Minas", nota:"Estruturas históricas de pedra no alto do chapadão."},
      {n:"Cachoeira do Fundão", base:"São Roque de Minas", nota:"Bela queda na parte alta; passeio guiado 4x4."},
      {n:"Complexo do Cerradão", base:"Delfinópolis", nota:"Conjunto de quedas (200 m) e poços; trilhas e RPPN."},
      {n:"Cachoeiras da Chinela & Capo Forro", base:"São Roque de Minas", nota:"Quedas e poços perto da cidade; banho e contemplação."},
    ],
    campings:[
      {n:"Campings em São Roque de Minas", base:"São Roque de Minas", nota:"Base para o parque; reserve na alta.", lat:-20.2447, lng:-46.365},
      {n:"Camping da Casca d'Anta", base:"Vargem Bonita", nota:"Acesso à base da cachoeira; rústico.", lat:-20.3328, lng:-46.3667},
    ],
    pernoite:[
      {n:"Postos da MG-050 / BR-262", base:"Passos/Piumhi", nota:"Pátios de apoio antes de subir o chapadão.", lat:-20.7197, lng:-46.6097},
      {n:"Áreas no parque (porteiras)", base:"São Roque de Minas", nota:"Estrada de terra; abasteça antes de entrar.", lat:-20.2447, lng:-46.365},
    ],
    comer:[
      {n:"Restaurante Velho Chico", base:"São Roque de Minas", nota:"Pratos ao queijo Canastra e música ao vivo no centro."},
      {n:"Cozinha Original (chef Joanne Ribas)", base:"São Roque de Minas", nota:"Cozinha mineira autoral em São José do Barreiro."},
      {n:"Queijaria Roça da Cidade", base:"São Roque de Minas", nota:"Queijo Canastra (IG) com degustação e visita guiada."},
      {n:"Peixarias de Furnas", base:"Delfinópolis", nota:"Peixes do lago e comida de tropeiro."},
    ],
    eventos:[
      {n:"Festival de Balão da Canastra", base:"São Roque de Minas", nota:"Balões sobre o chapadão; queijos e cultura rural."},
      {n:"Concurso do Queijo Canastra", base:"região da Canastra", nota:"Premiação do queijo artesanal (Emater); rota das queijarias."},
    ],
    encontros:[
      {n:"Encontros de campismo na Canastra", base:"São Roque de Minas", nota:"Confraternizações de motorhome na nascente do São Francisco; agenda no MaCamp e ANACAMP.", lat:-20.2447, lng:-46.365},
    ],
  },

  /* ===================== SANTA CATARINA ===================== */
  "sc-serra-catarinense": {
    atracoes:[
      {n:"Florianópolis", base:"Florianópolis", nota:"Capital e ponto de partida rumo à serra.", lat:-27.5949, lng:-48.5482},
      {n:"Urubici", base:"Urubici", nota:"Base da serra; Morro da Igreja, cânions e cachoeiras altas.", lat:-28.0153, lng:-49.5925},
      {n:"Morro da Igreja", base:"Urubici", nota:"Pedra Furada e um dos pontos habitados mais altos do Sul.", lat:-28.1289, lng:-49.4744},
      {n:"Serra do Rio do Rastro", base:"Urubici", nota:"Estrada-mirante de curvas em ferradura; um dos visuais do Sul.", lat:-28.3897, lng:-49.5417},
      {n:"São Joaquim", base:"São Joaquim", nota:"A cidade mais fria do país; vinhos de altitude e maçã.", lat:-28.2939, lng:-49.9319},
    ],
    museus:[
      {n:"Museu Histórico de São Joaquim", base:"São Joaquim", nota:"História da serra, do frio e dos vinhos de altitude."},
      {n:"Museu ao Ar Livre / Lages", base:"Lages", nota:"Cultura serrana e tropeira do planalto catarinense."},
    ],
    parques:[
      {n:"P. N. de São Joaquim", base:"Urubici", nota:"Araucárias, cânions e geada; trilhas de altitude."},
      {n:"Morro da Igreja / Pedra Furada", base:"Urubici", nota:"Autorização ICMBio; vá cedo, antes da neblina."},
      {n:"Cascata do Avencal", base:"Urubici", nota:"Queda de 100 m com tirolesa e restaurante no parque."},
      {n:"Serra do Corvo Branco", base:"Urubici", nota:"Corte em arenito e mirantes de vidro panorâmicos."},
      {n:"Parque Cachoeira Papuã", base:"Urubici", nota:"Decks acessíveis e mirante de vidro sobre duas quedas."},
      {n:"Mirante do Belvedere", base:"Urubici", nota:"Vista panorâmica do vale do Rio Urubici, a 5 km do centro."},
      {n:"Inscrições Rupestres", base:"Urubici", nota:"Painel de petróglifos milenares; visita rápida."},
    ],
    campings:[
      {n:"Campings de Urubici", base:"Urubici", nota:"Vários na base da serra; frio intenso à noite.", lat:-28.0153, lng:-49.5925},
      {n:"Camping Vale da Geada", base:"Urubici", nota:"Estrutura para o frio serrano; perto dos atrativos.", lat:-28.0153, lng:-49.5925},
      {n:"Camping no topo do Rio do Rastro", base:"Bom Jardim da Serra", nota:"Vista dos cânions; preparado para frio.", lat:-28.3381, lng:-49.6256},
      {n:"Camping da Cascata do Avencal", base:"Urubici", nota:"Área de barracas e apoio a motorhome junto ao parque.", lat:-28.0153, lng:-49.5925},
    ],
    pernoite:[
      {n:"Postos da BR-282 / SC-390", base:"Bom Jardim da Serra", nota:"Apoio antes/depois da Serra do Rio do Rastro.", lat:-28.3381, lng:-49.6256},
      {n:"Mirante do Rio do Rastro", base:"Serra do Rio do Rastro", nota:"Estacionamento panorâmico; sem estrutura.", lat:-28.3897, lng:-49.5417},
    ],
    comer:[
      {n:"Vinícolas de altitude", base:"São Joaquim", nota:"Vinhos finos de altitude com degustação."},
      {n:"Guardião do Avencal Bar e Café", base:"Urubici", nota:"Truta e café colonial com vista da Cascata do Avencal."},
      {n:"Restaurantes de truta/fondue", base:"Urubici", nota:"Truta, pinhão e fondue na serra."},
    ],
    eventos:[
      {n:"Festa Nacional da Maçã", base:"São Joaquim", nota:"Capital nacional da maçã (IG); shows, feira de produtos serranos e gastronomia."},
      {n:"Festa Nacional do Pinhão", base:"Lages (região)", nota:"Maio–jun; cultura serrana, araucária e pinhão assado."},
      {n:"Festival de Inverno", base:"Urubici", nota:"Inverno; gastronomia da serra, vinhos de altitude e astroturismo nas noites frias."},
    ],
    encontros:[
      {n:"Encontros de inverno em Urubici", base:"Urubici", nota:"Confraternizações de motorhome/trailer na temporada de geada; agenda no MaCamp e ANACAMP.", lat:-28.0153, lng:-49.5925},
      {n:"Encontros do grupo Rodamundo SC", base:"Serra Catarinense", nota:"Saídas do tradicional grupo catarinense de caravanismo."},
    ],
  },
  "sc-litoral": {
    transporte:[
      {cidade:"Florianópolis", sistema:"Ônibus urbanos (terminais de integração)", passe:"Cartão (Sim/Vacilão)", app:"Busão Floripa · Moovit", dica:"Centro e Lagoa por ônibus; carro/app ajuda muito nas 40+ praias da Ilha."},
    ],
    atracoes:[
      {n:"Bombinhas", base:"Bombinhas", nota:"Mar transparente e mergulho na Reserva do Arvoredo.", lat:-27.1389, lng:-48.4814},
      {n:"Florianópolis", base:"Florianópolis", nota:"Ilha com 40+ praias, Lagoa da Conceição e centro histórico.", lat:-27.5947, lng:-48.5507},
      {n:"Guarda do Embaú", base:"Guarda do Embaú", nota:"Vila de surf na foz do rio, eleita praia mundial do surfe.", lat:-27.8869, lng:-48.5836},
      {n:"Praia do Rosa", base:"Guarda do Embaú", nota:"Enseada de surf e mirantes; avistamento de baleias no inverno.", lat:-28.1289, lng:-48.6403},
    ],
    museus:[
      {n:"Museu Histórico de Santa Catarina", base:"Florianópolis", nota:"No Palácio Cruz e Sousa; história do estado."},
      {n:"Museu Victor Meirelles", base:"Florianópolis", nota:"Casa natal do pintor; acervo de arte do séc. 19."},
      {n:"MASC – Arte Contemporânea", base:"Florianópolis", nota:"Maior acervo de arte moderna/contemporânea de SC."},
    ],
    parques:[
      {n:"Reserva do Arvoredo", base:"Bombinhas", nota:"Mergulho em mar transparente (com operadora)."},
      {n:"APA da Baleia Franca", base:"Imbituba/Garopaba", nota:"Avistamento de baleias (jun–nov)."},
      {n:"Praia da Ferrugem", base:"Garopaba", nota:"Surfe e vida noturna jovem; uma das mais badaladas."},
      {n:"Lagoa de Ibiraquera", base:"Garopaba", nota:"Paraíso de kite e windsurf; águas calmas."},
      {n:"Dunas do Siriú", base:"Garopaba", nota:"Sandboard e paisagem de dunas à beira-mar."},
      {n:"Lagoa da Conceição", base:"Florianópolis", nota:"Coração da Ilha; gastronomia, sandboard e trilhas."},
    ],
    igrejas:[
      {n:"Igreja Matriz São Joaquim", base:"Garopaba", nota:"No centro histórico; mirante da praia central do alto."},
    ],
    campings:[
      {n:"Camping Praia do Rosa", base:"Praia do Rosa", nota:"Áreas perto da enseada; lota na alta de verão.", lat:-28.1289, lng:-48.6403},
      {n:"Camping Paraíso Tropical", base:"Bombinhas", nota:"Próximo às praias; estrutura para barraca e motorhome.", lat:-27.1389, lng:-48.4814},
      {n:"Camping Guarda do Embaú", base:"Guarda do Embaú", nota:"Junto à vila de surf; deixe o carro e cruze de barco.", lat:-27.8869, lng:-48.5836},
      {n:"Campings da Lagoa da Conceição", base:"Florianópolis", nota:"Áreas na Ilha próximas à Lagoa e às praias do leste.", lat:-27.5949, lng:-48.5482},
      {n:"Camping Ferrugem", base:"Garopaba", nota:"Próximo à Praia da Ferrugem; muito procurado no verão.", lat:-28.0264, lng:-48.6175},
    ],
    pernoite:[
      {n:"Postos da BR-101", base:"Palhoça/Garopaba", nota:"Grandes pátios; comum para pernoite na costa.", lat:-28.0264, lng:-48.6175},
      {n:"Estacionamento da Guarda do Embaú", base:"Guarda do Embaú", nota:"Deixe o carro e cruze de barco à vila.", lat:-27.8869, lng:-48.5836},
    ],
    comer:[
      {n:"Box 32 (Mercado Público)", base:"Florianópolis", nota:"Tradicional balcão de frutos do mar e cerveja."},
      {n:"Ostradamus", base:"Florianópolis", nota:"Referência em ostras do Ribeirão da Ilha."},
      {n:"Ostras da Lagoa", base:"Florianópolis", nota:"Ostras de Santo Antônio da Lagoa e frutos do mar."},
      {n:"Urucum (Solar Mirador)", base:"Praia do Rosa", nota:"Uma das melhores mesas do Rosa; cozinha autoral."},
      {n:"Rosa Grill", base:"Praia do Rosa", nota:"Peixe e frutos do mar à beira-mar (Rosa Sul)."},
      {n:"Zanoni", base:"Garopaba", nota:"Camarão e peixe na brasa; tradicional e familiar."},
    ],
    eventos:[
      {n:"Réveillon Virada Mágica", base:"Praia do Rosa", nota:"Virada do ano com música eletrônica na praia."},
      {n:"Bike Marathon", base:"Praia do Rosa", nota:"Outubro; tradicional prova de mountain bike."},
      {n:"Temporada de baleias", base:"Imbituba/Garopaba", nota:"Jun–nov; baleias-franca vistas da costa e de barco."},
    ],
    encontros:[
      {n:"Encontros de campismo no litoral SC", base:"Garopaba/Imbituba", nota:"Confraternizações de motorhome/trailer na costa; agenda no MaCamp e ANACAMP.", lat:-28.0264, lng:-48.6175},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Litoral catarinense", nota:"Encontros espontâneos de caravanismo nas praias de SC."},
    ],
  },
  "sc-vale-europeu": {
    atracoes:[
      {n:"Blumenau", base:"Blumenau", nota:"Capital da Oktoberfest e das cervejarias do vale.", lat:-26.9194, lng:-49.0661},
      {n:"Pomerode", base:"Blumenau", nota:"A cidade mais alemã do país; Rota do Enxaimel e Zoo.", lat:-26.7408, lng:-49.1786},
      {n:"Treze Tílias", base:"Timbó", nota:"Colônia tirolesa-austríaca; esculturas em madeira e arquitetura alpina.", lat:-26.9986, lng:-51.4042},
    ],
    museus:[
      {n:"Museu da Cerveja", base:"Blumenau", nota:"História cervejeira da cidade, na Vila Germânica."},
      {n:"Museu Hering", base:"Blumenau", nota:"História da indústria têxtil e da imigração alemã."},
      {n:"Museu Pomerano", base:"Pomerode", nota:"Imigração pomerana; casa enxaimel e cotidiano colonial."},
    ],
    parques:[
      {n:"P. N. da Serra do Itajaí", base:"Blumenau", nota:"Mata atlântica e trilhas nos arredores."},
      {n:"Rota do Enxaimel", base:"Pomerode", nota:"Circuito rural de casas enxaimel originais."},
      {n:"Zoo de Pomerode", base:"Pomerode", nota:"Um dos maiores zoos do Sul; tradição da cidade."},
      {n:"Museu Pomerano", base:"Pomerode", nota:"História da imigração pomerana; casario típico."},
      {n:"Vila Germânica", base:"Blumenau", nota:"Complexo da Oktoberfest; gastronomia e cultura cervejeira."},
      {n:"Cavernas de Botuverá", base:"Botuverá", nota:"Uma das mais belas grutas do Sul; espeleoturismo.", lat:-27.2017, lng:-49.0719},
    ],
    igrejas:[
      {n:"Santuário de Santa Paulina", base:"Nova Trento", nota:"Romaria à 1ª santa brasileira; vale do Vigolo.", lat:-27.2861, lng:-48.93},
    ],
    campings:[
      {n:"Camping Rio da Prata", base:"Timbó", nota:"À beira do rio Itajaí; ciclovias e clima de vale.", lat:-26.8231, lng:-49.2714},
      {n:"Camping Pomerode", base:"Pomerode", nota:"Base alemã do vale; recebe motorhomes e trailers.", lat:-26.7408, lng:-49.1786},
      {n:"Camping em Treze Tílias", base:"Treze Tílias", nota:"Clima alpino; muito frio à noite no inverno.", lat:-26.9986, lng:-51.4042},
      {n:"Campings de Botuverá", base:"Botuverá", nota:"Apoio rural perto das cavernas; sossego e natureza."},
    ],
    pernoite:[
      {n:"Postos da BR-470", base:"Blumenau/Indaial", nota:"Pátios de apoio no vale do Itajaí.", lat:-26.9194, lng:-49.0661},
      {n:"Estac. da Vila Germânica", base:"Blumenau", nota:"Na Oktoberfest, use transporte por app à noite.", lat:-26.9194, lng:-49.0661},
    ],
    comer:[
      {n:"Biergarten Pomerano", base:"Pomerode", nota:"Cozinha alemã típica em clima familiar."},
      {n:"Norden", base:"Blumenau", nota:"Culinária bávara em casarão de 1897 (chef Martin Elster)."},
      {n:"Bier Vila", base:"Blumenau", nota:"Clássicos alemães no Parque Vila Germânica."},
      {n:"Cozinha tirolesa", base:"Treze Tílias", nota:"Pratos austríacos e cucas; ambiente alpino."},
    ],
    eventos:[
      {n:"Oktoberfest", base:"Blumenau", nota:"Outubro; a maior festa alemã das Américas, na Vila Germânica."},
      {n:"Festa Pomerana", base:"Pomerode", nota:"Janeiro; tradições e gastronomia pomeranas."},
      {n:"Osterfest (Páscoa)", base:"Pomerode", nota:"Maior festa de Páscoa do país; ovos gigantes decorados."},
      {n:"Festa do Imigrante", base:"Timbó", nota:"Julho; celebra a colonização alemã e italiana do vale."},
      {n:"Festa Nacional do Marreco (Fenarreco)", base:"Brusque", nota:"Out; o marreco recheado com repolho roxo e chope, prato germânico símbolo do vale."},
      {n:"Tirolerfest", base:"Treze Tílias", nota:"Out; herança austríaca-tirolesa, danças folclóricas e gastronomia alpina."},
      {n:"Festa do Porco no Rolete", base:"Oeste catarinense", nota:"Tradição colonial de assar o porco inteiro no rolete (ex.: Modelo, a 'capital catarinense'); festas pela região."},
    ],
    encontros:[
      {n:"Encontro de RVs de Pomerode", base:"Pomerode", nota:"A vila já reuniu 440 motorhomes/trailers e presidentes de 4 grupos de campismo; polo de caravanismo do vale.", lat:-26.7408, lng:-49.1786},
      {n:"Encontros do grupo Rodamundo SC", base:"Vale Europeu", nota:"Saídas e confraternizações do tradicional grupo catarinense de caravanismo."},
      {n:"Expo Motorhome (a ~2 h)", base:"Pinhais (PR)", nota:"Maior feira de campismo e caravanismo da América Latina, em novembro, com camping próprio para 800 veículos."},
    ],
  },

  /* ===================== RIO GRANDE DO SUL ===================== */
  "rs-serra-gaucha": {
    atracoes:[
      {n:"Lago Negro", base:"Gramado", nota:"Lago com pedalinhos e bosque; cartão-postal de Gramado.", lat:-29.387, lng:-50.874},
      {n:"Rua Coberta", base:"Gramado", nota:"Centro gastronômico e de compras a céu aberto.", lat:-29.3789, lng:-50.874},
      {n:"Parque do Caracol", base:"Canela", nota:"Cachoeira de 131 m e mirantes; pertinho de Canela.", lat:-29.247, lng:-50.839},
      {n:"Porto Alegre", base:"Porto Alegre", nota:"Capital gaúcha e ponto de partida rumo à serra.", lat:-30.0346, lng:-51.2177},
      {n:"Gramado", base:"Gramado", nota:"Centro turístico da serra; Lago Negro, chocolates e Natal Luz.", lat:-29.3747, lng:-50.8769},
      {n:"Bento Gonçalves", base:"Bento Gonçalves", nota:"Capital do vinho; Vale dos Vinhedos e Maria-Fumaça.", lat:-29.1714, lng:-51.5189},
    ],
    museus:[
      {n:"Museu da Epopeia Italiana", base:"Caxias do Sul", nota:"História da imigração italiana na serra gaúcha."},
      {n:"Museu do Vinho / Casa Valduga", base:"Vale dos Vinhedos", nota:"História vitivinícola e tour com degustação."},
      {n:"Mundo a Vapor", base:"Canela", nota:"Máquinas a vapor históricas; cenografia ferroviária."},
    ],
    parques:[
      {n:"Parque do Caracol", base:"Canela", nota:"Cascata de 130 m e mirante elevado."},
      {n:"Vale dos Vinhedos (IG)", base:"Bento Gonçalves", nota:"Roteiro de vinícolas e Caminhos de Pedra."},
      {n:"Vinícolas Casa Valduga & Miolo", base:"Vale dos Vinhedos", nota:"Tour e degustação; reserve as visitas guiadas."},
      {n:"Aldeia do Imigrante & Labirinto Verde", base:"Nova Petrópolis", nota:"'Jardim da Serra Gaúcha'; cultura alemã e jardins."},
      {n:"Centro histórico de Antônio Prado", base:"Antônio Prado", nota:"'Cidade mais italiana do Brasil'; 48 prédios tombados."},
      {n:"Salto Ventoso", base:"Farroupilha", nota:"Cachoeira em que se caminha por trás da queda."},
    ],
    igrejas:[
      {n:"Catedral de Pedra (N. S. de Lourdes)", base:"Canela", nota:"Igreja gótica de basalto, símbolo da cidade."},
      {n:"Santuário de Caravaggio", base:"Farroupilha", nota:"Centro de romaria da imigração italiana."},
    ],
    campings:[
      {n:"Camping Bangalôs da Serra", base:"Gramado", nota:"Glamping e área de motorhome com estrutura na RS-235.", lat:-29.3747, lng:-50.8769},
      {n:"Camping & Pousada Vale dos Vinhedos", base:"Bento Gonçalves", nota:"Pousadas-camping entre parreirais; bom apoio a trailers.", lat:-29.1714, lng:-51.5189},
      {n:"Camping do Caracol", base:"Canela", nota:"Áreas perto do Parque do Caracol; muito frio no inverno.", lat:-29.3556, lng:-50.8156},
      {n:"Camping Municipal de Nova Petrópolis", base:"Nova Petrópolis", nota:"Camping tradicional da serra, arborizado e econômico.", lat:-29.3756, lng:-51.1119},
      {n:"Recanto do Caravanismo (pontos de apoio)", base:"Bento Gonçalves", nota:"Pátios e vinícolas que recebem motorhomes; consulte MaCamp/ANACAMP.", lat:-29.1714, lng:-51.5189},
    ],
    pernoite:[
      {n:"Postos da RS-122 / BR-116", base:"Caxias do Sul", nota:"Grandes pátios na subida da serra.", lat:-29.1678, lng:-51.1789},
      {n:"Estacionamentos de Gramado", base:"Gramado", nota:"No Natal Luz, chegue cedo; trânsito intenso.", lat:-29.3747, lng:-50.8769},
    ],
    comer:[
      {n:"Restaurante Casa Valduga", base:"Vale dos Vinhedos", nota:"Almoço harmonizado em vinícola histórica."},
      {n:"Galeteria Bela Vista", base:"Bento Gonçalves", nota:"Galeto al primo canto e massas da colônia."},
      {n:"Maria Valduga", base:"Vale dos Vinhedos", nota:"Sequência típica italiana na Casa Valduga (fecha terça)."},
      {n:"Mamma Gema", base:"Vale dos Vinhedos", nota:"Considerado o 1º restaurante de vinícola do Brasil."},
      {n:"Wine Garden (Miolo)", base:"Vale dos Vinhedos", nota:"Petiscos e vinhos no gramado da vinícola Miolo."},
      {n:"Trattoria Primo Camilo", base:"Garibaldi", nota:"Receitas italianas em casarão histórico."},
      {n:"Cafés coloniais / fondue", base:"Gramado", nota:"Café colonial farto e fondue na serra."},
    ],
    eventos:[
      {n:"Natal Luz de Gramado", base:"Gramado", nota:"Nov–jan; um dos maiores eventos natalinos do país."},
      {n:"Festa da Uva", base:"Caxias do Sul", nota:"Fev/mar (bienal); imigração italiana e o vinho."},
      {n:"Festa das Colônias", base:"Nova Petrópolis", nota:"Cultura e gastronomia alemãs."},
    ],
    encontros:[
      {n:"Encontros do grupo Ranchomóvel RS", base:"Serra Gaúcha", nota:"Confraternizações do tradicional grupo gaúcho de caravanismo; agenda na ANACAMP/redes."},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Serra Gaúcha", nota:"Encontros espontâneos de motorhome/trailer pela serra; calendário no MaCamp e ANACAMP."},
      {n:"Expo Motorhome (referência regional)", base:"Pinhais (PR)", nota:"Maior feira de campismo e caravanismo da América Latina, em novembro; nasceu em Novo Hamburgo (RS)."},
    ],
  },
  "rs-canions-serra-geral": {
    atracoes:[
      {n:"Porto Alegre", base:"Porto Alegre", nota:"Capital gaúcha e ponto de partida rumo aos cânions.", lat:-30.0344, lng:-51.2202},
      {n:"Cambará do Sul", base:"Cambará do Sul", nota:"Base dos parques dos Aparados e da Serra Geral.", lat:-29.0489, lng:-50.1456},
      {n:"Cânion Itaimbezinho", base:"Cambará do Sul", nota:"Cânion-símbolo dos Aparados; trilhas do Vértice e do Cotovelo.", lat:-29.1647, lng:-50.0794},
      {n:"Cânion Fortaleza", base:"Fortaleza", nota:"Maior cânion da região; mirante do Pedra do Segredo ao pôr do sol.", lat:-29.1031, lng:-49.9892},
      {n:"São José dos Ausentes", base:"Fortaleza", nota:"Campos de Cima da Serra; o ponto mais alto do RS.", lat:-28.7472, lng:-50.0681},
    ],
    museus:[
      {n:"Casa de Cultura", base:"Cambará do Sul", nota:"História dos campos de cima da serra e dos cânions."},
      {n:"Centro de Visitantes (Aparados)", base:"Cambará do Sul", nota:"Ecologia e geologia do Itaimbezinho e Fortaleza."},
    ],
    parques:[
      {n:"P. N. Aparados da Serra", base:"Cambará do Sul", nota:"Cânion Itaimbezinho; trilhas Vértice e Cotovelo."},
      {n:"P. N. da Serra Geral", base:"Cambará do Sul", nota:"Cânion Fortaleza e Pedra do Segredo (pôr do sol)."},
      {n:"Cânion Monte Negro", base:"São José dos Ausentes", nota:"Acesso mais fácil dos 8 cânions; ao lado do Pico Monte Negro.", lat:-28.8772, lng:-49.9008},
      {n:"Cânion Amola Faca", base:"São José dos Ausentes", nota:"Considerado o mais belo da região; cachoeira de 241 m."},
      {n:"Pico Monte Negro (1.403 m)", base:"São José dos Ausentes", nota:"O ponto mais alto do RS; mata de araucárias."},
      {n:"Cachoeirão dos Rodrigues", base:"São José dos Ausentes", nota:"28 m em sucessão de quedas; piscina natural (taxa+guia)."},
      {n:"Trilha do Rio do Boi", base:"Praia Grande", nota:"Travessia pelo fundo do Itaimbezinho; só com guia, dia firme."},
      {n:"Cascata do Tigre Preto", base:"Cambará do Sul", nota:"Queda de 350 m vista do interior do cânion Fortaleza."},
    ],
    campings:[
      {n:"Camping Pousada Fazenda Pindorama", base:"Cambará do Sul", nota:"Ampla área de barracas e motorhome; base clássica dos cânions.", lat:-29.0489, lng:-50.1456},
      {n:"Camping Recanto das Corucacas", base:"Cambará do Sul", nota:"Entre araucárias e lago; muito frio e geada no inverno.", lat:-29.0489, lng:-50.1456},
      {n:"Camping Pousada Aparados da Serra", base:"São José dos Ausentes", nota:"A ~2 km do Cânion Monte Negro; campos de cima da serra.", lat:-28.7472, lng:-50.0681},
      {n:"Áreas de camping em Praia Grande (SC)", base:"Praia Grande", nota:"Ao pé dos cânions; base da trilha do Rio do Boi.", lat:-29.1925, lng:-49.9608},
    ],
    pernoite:[
      {n:"Postos da RS-020 / RS-110", base:"Cambará do Sul", nota:"Apoio limitado; abasteça na cidade.", lat:-29.0489, lng:-50.1456},
      {n:"Áreas em Praia Grande (SC)", base:"Praia Grande", nota:"Base ao pé da Serra do Faxinal.", lat:-29.1925, lng:-49.9608},
    ],
    comer:[
      {n:"Galeteria O Casarão", base:"Cambará do Sul", nota:"Rodízio de galeto, truta e buffet de saladas orgânicas."},
      {n:"Vitrine da Truta", base:"Cambará do Sul", nota:"Truta ao molho de amêndoas e crosta de ervas."},
      {n:"Cafés campeiros", base:"São José dos Ausentes", nota:"Cucas e cafés nos campos de cima."},
      {n:"Queijo serrano artesanal", base:"São José dos Ausentes", nota:"Patrimônio imaterial; comprado direto nas fazendas."},
    ],
    eventos:[
      {n:"Festa Nacional do Pinhão", base:"Lages (região)", nota:"Maio–jun; cultura serrana, araucária e pinhão."},
      {n:"Cavalgadas e rodeios campeiros", base:"São José dos Ausentes", nota:"Tradição gauchesca dos Campos de Cima da Serra."},
    ],
    encontros:[
      {n:"Encontros de campismo nos cânions", base:"Cambará do Sul", nota:"Confraternizações de motorhome/trailer nas pousadas-camping; agenda no MaCamp e ANACAMP.", lat:-29.0489, lng:-50.1456},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Campos de Cima da Serra", nota:"Encontros espontâneos de caravanismo na região serrana RS/SC."},
    ],
  },

  /* ===================== CHAPADAS ===================== */
  "ba-chapada-diamantina": {
    atracoes:[
      {n:"Lençóis", base:"Lençóis", nota:"Vila garimpeira; principal base do Parque Nacional.", lat:-12.5614, lng:-41.3892},
      {n:"Cachoeira da Fumaça", base:"Lençóis", nota:"Cachoeira de 340 m vista do alto; trilha de meio-dia a partir do Capão.", lat:-12.6064, lng:-41.5008},
      {n:"Mucugê", base:"Vale do Pati", nota:"Cidade histórica; Poço Azul e o Projeto Sempre-Viva.", lat:-13.0058, lng:-41.3711},
      {n:"Poço Encantado", base:"Vale do Pati", nota:"Caverna com lago de água azul translúcida.", lat:-12.9939, lng:-41.0306},
    ],
    museus:[
      {n:"Galeria Arte & Memória", base:"Igatu", nota:"Acervo do garimpo nas rínas de pedra de Igatu."},
      {n:"Casa de Afrânio Peixoto", base:"Lençóis", nota:"Casa-museu do escritor; história da vila garimpeira."},
    ],
    parques:[
      {n:"P. N. da Chapada Diamantina", base:"Lençóis", nota:"Fumaça, Pati, Mosquito; guia para trilhas longas."},
      {n:"Poços Azul e Encantado", base:"Itaetê/Andaraí", nota:"Água azul translúcida; melhor luz abr–set."},
      {n:"Morro do Pai Inácio", base:"Palmeiras", nota:"Cartão-postal da Chapada; pôr do sol 360° a 27 km de Lençóis.", lat:-12.4561, lng:-41.4825},
      {n:"Gruta da Lapa Doce", base:"Iraquara", nota:"Caverna de 850 m com salões e estálactites; visita guiada."},
      {n:"Pratinha & Gruta Azul", base:"Iraquara", nota:"Rio cristalino para flutuação e gruta de água azul."},
      {n:"Cachoeira do Mosquito", base:"Lençóis", nota:"Queda com brilho dourado nas pedras; banho e trilha."},
      {n:"Cachoeira do Sossego", base:"Lençóis", nota:"Trilha desafiadora até piscinas naturais entre pedras."},
      {n:"Poço do Diabo & Ribeirão do Meio", base:"Lençóis", nota:"Tobogã natural e banho perto do centro de Lençóis."},
      {n:"Cachoeira do Buração", base:"Ibicoara", nota:"Uma das mais impressionantes; rapel e flutuação no cânion."},
      {n:"Igatu (ruínas do garimpo)", base:"Andaraí", nota:"A 'Machu Picchu baiana'; casas de pedra e mirantes."},
    ],
    campings:[
      {n:"Campings de Lençóis", base:"Lençóis", nota:"Base do parque; perto do Ribeirão do Meio.", lat:-12.5614, lng:-41.3892},
      {n:"Casas de nativos no Pati", base:"Vale do Pati", nota:"Pernoite na travessia; reserve com guia."},
    ],
    pernoite:[
      {n:"Postos da BR-242", base:"Lençóis/Seabra", nota:"Pátios na rodovia que corta a Chapada.", lat:-12.5614, lng:-41.3892},
      {n:"Estacionamentos das vilas", base:"Vale do Capão", nota:"Deixe o carro; trilhas saem das vilas.", lat:-12.6019, lng:-41.4925},
    ],
    comer:[
      {n:"Bistrô Orquídea Negra", base:"Vale do Capão", nota:"Bistrô aconchegante com boa carta de vinhos."},
      {n:"Pastel de jaca (Trilha da Fumaça)", base:"Vale do Capão", nota:"Parada clássica na descida da trilha."},
      {n:"Comida Caseira da Dona Nena", base:"Mucugê", nota:"Almoço caseiro farto e saboroso."},
      {n:"Restôs de Lençóis", base:"Lençóis", nota:"Godó de banana e moqueca de trilha."},
      {n:"Feira do Vale do Capão", base:"Vale do Capão", nota:"Qui e dom de manhã; orgânicos, comidinhas e capoeira."},
    ],
    eventos:[
      {n:"Festival de Jazz do Capão", base:"Vale do Capão", nota:"Setembro; shows gratuitos e workshops na praça."},
      {n:"Festival de Música e Arte de Igatu", base:"Igatu", nota:"Ago–set; música brasileira e oficinas, programação gratuita."},
      {n:"Festivais de Reggae e Blues", base:"Vale do Capão", nota:"Eventos anuais de música na vila alternativa."},
    ],
    encontros:[
      {n:"Encontros de campismo na Chapada", base:"Lençóis", nota:"Confraternizações de motorhome/trailer e overlanders na chapada; agenda no MaCamp e ANACAMP.", lat:-12.5614, lng:-41.3892},
    ],
  },
  "go-chapada-veadeiros": {
    atracoes:[
      {n:"Brasília", base:"Brasília", nota:"Capital federal e ponto de partida (≈230 km de Alto Paraíso).", lat:-15.7939, lng:-47.8828},
      {n:"Alto Paraíso de Goiás", base:"Alto Paraíso de Goiás", nota:"Cidade-base da Chapada, sobre quartzo e cristais.", lat:-14.1322, lng:-47.5097},
      {n:"Vale da Lua", base:"Alto Paraíso", nota:"Rochas esculpidas pelo rio São Miguel; não visitar sob chuva.", lat:-14.1539, lng:-47.7547},
      {n:"Cachoeira Santa Bárbara", base:"Cavalcante", nota:"Cachoeira kalunga de águas azul-turquesa; condutor local obrigatório.", lat:-13.6906, lng:-47.4242},
    ],
    museus:[
      {n:"Centro de Cultura / Alto Paraíso", base:"Alto Paraíso de Goiás", nota:"Cultura do cerrado, cristais e misticismo da chapada."},
      {n:"Museu Kalunga", base:"Cavalcante", nota:"História e cultura do maior quilombo do Brasil."},
    ],
    parques:[
      {n:"P. N. da Chapada dos Veadeiros", base:"São Jorge", nota:"Saltos do Rio Preto e Cariocas; cota diária."},
      {n:"Vale da Lua", base:"São Jorge", nota:"Rochas esculpidas; não visitar sob chuva."},
      {n:"Mirante da Janela", base:"São Jorge", nota:"Trilha íngreme (8 km) à imagem mais icônica da Chapada."},
      {n:"Jardim de Maytrea", base:"São Jorge", nota:"Planície de buritis com vista dos Pireneus."},
      {n:"Catarata dos Couros", base:"Alto Paraíso", nota:"Conjunto de quedas e piscinas; uma das mais belas."},
      {n:"Cachoeira dos Cristais & Almécegas", base:"Alto Paraíso", nota:"Quedas acessíveis perto da estrada para São Jorge."},
      {n:"Cachoeira do Label (187 m)", base:"São João d'Aliança", nota:"A maior queda de Goiás; 1ª cidade vindo de Brasília."},
    ],
    campings:[
      {n:"Campings de São Jorge", base:"São Jorge", nota:"Vila na porta do parque; áreas simples.", lat:-14.1714, lng:-47.8},
      {n:"Camping em Cavalcante", base:"Cavalcante", nota:"Base das cachoeiras kalungas; condutor local.", lat:-13.7972, lng:-47.4583},
    ],
    pernoite:[
      {n:"Postos da GO-118", base:"Alto Paraíso", nota:"Único apoio robusto; abasteça antes das trilhas.", lat:-14.1322, lng:-47.5097},
      {n:"Estacionamentos das trilhas", base:"São Jorge", nota:"Acessos de terra; vá de dia.", lat:-14.1714, lng:-47.8},
    ],
    comer:[
      {n:"Santo Cerrado Risoteria", base:"São Jorge", nota:"Risotos e deck para o pôr do sol; o mais famoso da vila."},
      {n:"Na Mata", base:"São Jorge", nota:"Alta cozinha do cerrado da chef Mara Alcamim, à beira do rio."},
      {n:"Restaurante da Nenzinha", base:"São Jorge", nota:"Comida caseira a quilo, bom e econômico."},
      {n:"Comida kalunga", base:"Cavalcante", nota:"Culinária quilombola e do cerrado."},
    ],
    eventos:[
      {n:"Encontro de Culturas Tradicionais", base:"São Jorge", nota:"Julho; um dos maiores festivais culturais do cerrado."},
    ],
    encontros:[
      {n:"Encontros de campismo nos Veadeiros", base:"Alto Paraíso de Goiás", nota:"Confraternizações de motorhome e overlanders no cerrado; agenda no MaCamp e ANACAMP.", lat:-14.1322, lng:-47.5097},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Chapada dos Veadeiros", nota:"Encontros espontâneos de caravanismo na região."},
    ],
  },

  /* ===================== URUGUAI ===================== */
  "uy-costeiro": {
    transporte:[
      {cidade:"Montevidéu", sistema:"Ônibus urbanos (STM)", passe:"Tarjeta STM", app:"Cómo Ir · Moovit", dica:"Em Punta del Este o centro e a Brava/Mansa se fazem a pé ou de táxi."},
    ],
    atracoes:[
      {n:"La Mano & Playa Brava", base:"Punta del Este", nota:"A escultura-símbolo emergindo da areia."},
      {n:"Puerto & Casapueblo", base:"Punta del Este", nota:"Marina chique e a casa-ateliê de Páez Vilaró."},
      {n:"Rambla & Ciudad Vieja", base:"Montevidéu", nota:"Orla e centro histórico da capital."},
      {n:"Punta del Diablo", base:"Punta del Diablo", nota:"Vila de pescadores e surf, na costa nordeste.", lat:-34.0489, lng:-53.5453},
      {n:"Parque Santa Teresa", base:"Punta del Diablo", nota:"Forte histórico, mata e praias preservadas.", lat:-33.9772, lng:-53.5439},
      {n:"Cabo Polonio", base:"Punta del Diablo", nota:"Vila sem energia elétrica; acesso só por jardineira 4x4 sobre as dunas.", lat:-34.4006, lng:-53.7783},
      {n:"José Ignacio", base:"La Paloma", nota:"Vilarejo chique de gastronomia e praias exclusivas.", lat:-34.8389, lng:-54.6322},
      {n:"Punta del Este", base:"La Paloma", nota:"Balneário glamouroso; Los Dedos, Casapueblo e península.", lat:-34.9628, lng:-54.9506},
      {n:"Montevidéu", base:"Montevidéu", nota:"Capital à beira do Prata; Rambla, Cidade Velha e Mercado del Puerto.", lat:-34.9011, lng:-56.1645},
    ],
    museus:[
      {n:"Museo Ralli", base:"Punta del Este", nota:"Arte latino-americana e surrealista; entrada gratuita."},
      {n:"Casapueblo (Museo Páez Vilaró)", base:"Punta Ballena", nota:"Casa-ateliê do artista; pôr do sol famoso."},
      {n:"Museo del Mar", base:"La Barra", nota:"Acervo marinho e curiosidades da costa."},
    ],
    parques:[
      {n:"P. N. Santa Teresa", base:"Punta del Diablo", nota:"Forte histórico, mata e praias preservadas."},
      {n:"Cabo Polonio (área protegida)", base:"Cabo Polonio", nota:"Dunas e lobos-marinhos; acesso só em 4x4 oficial."},
      {n:"Farol de Cabo Polonio", base:"Cabo Polonio", nota:"132 degraus até vista 360° das ilhas, dunas e lobos.", lat:-34.4017, lng:-53.7758},
      {n:"Farol de José Ignacio", base:"José Ignacio", nota:"Torre de 1877 entre Playa Brava e Mansa; sobe ao topo.", lat:-34.8408, lng:-54.6361},
      {n:"Casapueblo", base:"Punta Ballena", nota:"Casa-ateliê de Páez Vilaró; pôr do sol famoso.", lat:-34.9072, lng:-55.0386},
      {n:"La Mano (Los Dedos)", base:"Punta del Este", nota:"Escultura-símbolo emergindo da areia na Playa Brava."},
      {n:"Playa La Calavera & Playa Sur", base:"Cabo Polonio", nota:"Praias rústicas; pôr do sol e céu estrelado sem energia."},
      {n:"La Pedrera & La Paloma", base:"Rocha", nota:"Balneários de surfe e clima roots na costa de Rocha."},
    ],
    campings:[
      {n:"Camping de Santa Teresa", base:"Parque Santa Teresa", nota:"Enorme camping estatal entre a mata e o mar.", lat:-33.9772, lng:-53.5439},
      {n:"Campings de Punta del Diablo", base:"Punta del Diablo", nota:"Vários na vila; alta no verão.", lat:-34.0489, lng:-53.5453},
      {n:"Camping Punta del Diablo", base:"Punta del Diablo", nota:"Vila de pescadores; campings junto às praias.", lat:-34.0489, lng:-53.5453},
      {n:"Camping La Pedrera / Cabo Polonio", base:"Rocha", nota:"Acampamentos rústicos no litoral selvagem de Rocha."},
    ],
    pernoite:[
      {n:"Postos ANCAP de rota (R9/R10)", base:"Costa UY", nota:"Pátios 24h; combustível mais caro que no BR."},
      {n:"Estac. do acesso a Cabo Polonio", base:"Cabo Polonio", nota:"Deixe o carro e entre na jardineira 4x4.", lat:-34.4006, lng:-53.7783},
    ],
    comer:[
      {n:"Mercado del Puerto", base:"Montevidéu", nota:"Parrilla e chivito no coração da capital."},
      {n:"Il Tano Cucina", base:"Punta del Diablo", nota:"Cozinha italiana e frutos do mar na vila."},
      {n:"Bares Bitácora & Pogo", base:"Punta del Diablo", nota:"Vida noturna roots; cerveja artesanal e fish & chips."},
      {n:"Parrillas e frutos do mar", base:"Punta del Este", nota:"Cordeiro, peixe e a clássica chivito."},
    ],
    eventos:[
      {n:"Temporada de Verão", base:"Punta del Este", nota:"Dez–mar; auge da costa, com festas, praias e gastronomia."},
      {n:"Noites de fogueira", base:"Cabo Polonio", nota:"Sem energia elétrica; violão e céu estrelado na vila."},
    ],
  },
  "uy-colonia-vinhos": {
    transporte:[
      {cidade:"Montevidéu", sistema:"Ônibus urbanos (STM) — sem metrô", passe:"Tarjeta STM", app:"Cómo Ir · Moovit", dica:"Ciudad Vieja e Rambla a pé; ônibus para bairros afastados e o Mercado del Puerto."},
    ],
    atracoes:[
      {n:"Ciudad Vieja & Plaza Independencia", base:"Montevidéu", nota:"Centro histórico, Palácio Salvo e Mercado del Puerto."},
      {n:"Rambla de Montevidéu", base:"Montevidéu", nota:"A orla mais longa do mundo; pôr do sol e mate."},
      {n:"Mercado del Puerto", base:"Montevidéu", nota:"Templo do asado e do chivito, no porto."},
      {n:"Montevidéu", base:"Montevidéu", nota:"Capital e ponto de partida rumo às bodegas.", lat:-34.9009, lng:-56.1670},
      {n:"Canelones", base:"Montevidéu", nota:"Principal região de bodegas de Tannat do país.", lat:-34.5225, lng:-56.2778},
      {n:"Carmelo", base:"Montevidéu", nota:"Vinícolas-boutique de Tannat e olivais à beira do Prata.", lat:-34.0028, lng:-58.2839},
      {n:"Colonia del Sacramento", base:"Colonia del Sacramento", nota:"Barrio Histórico português, patrimônio UNESCO; pôr do sol no Prata.", lat:-34.4716, lng:-57.8442},
    ],
    museus:[
      {n:"Museo Portugués", base:"Colonia del Sacramento", nota:"Azulejos, mapas e relíquias do período português."},
      {n:"Museo del Azulejo", base:"Colonia del Sacramento", nota:"Coleção de azulejaria histórica no Barrio Histórico."},
      {n:"Museo del Carnaval", base:"Montevidéu", nota:"Trajes e história do carnaval mais longo do mundo."},
    ],
    parques:[
      {n:"Barrio Histórico (UNESCO)", base:"Colonia del Sacramento", nota:"Ruas de pedra portuguesas e o Farol."},
      {n:"Bodega Narbona / El Legado", base:"Carmelo", nota:"Vinícolas-boutique com almoço e degustação (reserve)."},
      {n:"Los Cerros de San Juan", base:"Colonia del Sacramento", nota:"Vinícola mais antiga do Uruguai, a ~30 min do centro."},
      {n:"Ponte giratória de Carmelo", base:"Carmelo", nota:"Ponte móvel de 1912, símbolo da cidade."},
      {n:"Rambla do Prata", base:"Montevidéu", nota:"Orla extensa para caminhar ao pôr do sol."},
      {n:"Farol de Colonia", base:"Colonia del Sacramento", nota:"Sobe ao topo para a vista do Barrio e do Rio da Prata.", lat:-34.4719, lng:-57.8528},
      {n:"Portón de Campo (Ciudadela)", base:"Colonia del Sacramento", nota:"Porto histórico e ponte levadiça, entrada do Barrio."},
      {n:"Plaza de Toros Real de San Carlos", base:"Colonia del Sacramento", nota:"Arena de 1910 restaurada; visitas guiadas com reserva."},
      {n:"Bodega Irurtia / Campotinto", base:"Carmelo", nota:"Vinícolas familiares de Tannat; tour com degustação."},
      {n:"Viñedos del Quintón", base:"Colonia del Sacramento", nota:"Vinhos Malbec e azeites, a ~30 min do centro."},
    ],
    campings:[
      {n:"Camping de Colonia", base:"Colonia del Sacramento", nota:"Áreas à beira do Prata; tranquilo fora do verão.", lat:-34.4716, lng:-57.8442},
      {n:"Bodega-hotéis (estac.)", base:"Carmelo", nota:"Algumas bodegas recebem motorhome com reserva.", lat:-34.0028, lng:-58.2839},
    ],
    pernoite:[
      {n:"Postos ANCAP (R1/R21)", base:"Litoral do Prata", nota:"Pátios na rota Montevidéu–Colonia–Carmelo."},
      {n:"Estac. do Barrio Histórico", base:"Colonia del Sacramento", nota:"Ande a pé; ruas estreitas de pedra.", lat:-34.4716, lng:-57.8442},
    ],
    comer:[
      {n:"Bodegas de Tannat", base:"Canelones/Carmelo", nota:"Almoços harmonizados (reserve antes)."},
      {n:"La Bodeguita", base:"Colonia del Sacramento", nota:"Chivito e pizzas com vista do Prata, no Bairro Histórico."},
      {n:"Las Liebres", base:"Colonia del Sacramento", nota:"O mais famoso; cozinha uruguaia com horta própria."},
      {n:"Cafés à beira-rio", base:"Colonia del Sacramento", nota:"Pôr do sol com tábua e vinho no Prata."},
      {n:"Charco Bistrô", base:"Colonia del Sacramento", nota:"Bistrô do hotel Charco; massas, carnes e peixes à beira-rio."},
    ],
    igrejas:[
      {n:"Basílica do Santíssimo Sacramento", base:"Colonia del Sacramento", nota:"Uma das igrejas mais antigas do Uruguai, na Plaza de Armas."},
    ],
  },

  /* ===================== PANTANAL ===================== */
  "mt-pantanal-norte": {
    transporte:[
      {cidade:"Cuiabá", sistema:"Ônibus urbanos", passe:"Cartão", app:"Moovit", dica:"Centro Histórico a pé; carro/transfer para a Chapada e a Transpantaneira."},
    ],
    atracoes:[
      {n:"Centro Histórico de Cuiabá", base:"Cuiabá", nota:"Igreja do Rosário, Praça da República e museus.", lat:-15.5989, lng:-56.0949},
      {n:"Mercado do Porto", base:"Cuiabá", nota:"Peixes do Pantanal (pacu, pintado) e cultura local.", lat:-15.6033, lng:-56.1067},
      {n:"Cuiabá", base:"Cuiabá", nota:"Capital de MT e porta de entrada do Pantanal Norte.", lat:-15.6014, lng:-56.0979},
      {n:"Chapada dos Guimarães", base:"Cuiabá", nota:"Véu de Noiva, paredões e a Cidade de Pedra no cerrado.", lat:-15.4608, lng:-55.7503},
      {n:"Nobres", base:"Cuiabá", nota:"Flutuação em rios cristalinos (Aquário Encantado) e Lagoa das Araras.", lat:-14.7203, lng:-56.3286},
      {n:"Porto Jofre", base:"Poconé", nota:"Fim da Transpantaneira; capital mundial do avistamento de onças.", lat:-17.35, lng:-56.7758},
    ],
    museus:[
      {n:"Museu Rondon (UFMT)", base:"Cuiabá", nota:"Etnologia dos povos indígenas de Mato Grosso."},
      {n:"Casa do Artesão", base:"Cuiabá", nota:"Artesanato regional em antigo casarão histórico."},
    ],
    parques:[
      {n:"P. N. da Chapada dos Guimarães", base:"Chapada dos Guimarães", nota:"Cerrado, paredões e trilhas a 1h de Cuiabá."},
      {n:"Cachoeira Véu de Noiva", base:"Chapada dos Guimarães", nota:"Cartão-postal de 86 m; mirante (contemplação)."},
      {n:"Circuito de Cachoeiras / Cidade de Pedra", base:"Chapada dos Guimarães", nota:"Trilha das 7 cachoeiras e formações rochosas."},
      {n:"Caverna Aroe Jari & Lagoa Azul", base:"Chapada dos Guimarães", nota:"Uma das maiores grutas de arenito do Brasil."},
      {n:"Aquário Encantado & Lagoa das Araras", base:"Nobres", nota:"Flutuação em rios cristalinos e revoada de araras."},
      {n:"P. E. Encontro das Águas", base:"Porto Jofre", nota:"Maior densidade de onças-pintadas do mundo."},
    ],
    campings:[
      {n:"Pousadas-camping da Chapada", base:"Chapada dos Guimarães", nota:"Áreas com cachoeiras e cerrado.", lat:-15.4608, lng:-55.7503},
      {n:"Camping na Transpantaneira", base:"Pixaim", nota:"Pousadas com camping à beira do rio; muito calor.", lat:-16.6072, lng:-56.8456},
      {n:"Porto Jofre Pantanal (camping)", base:"Porto Jofre", nota:"Camping no fim da Transpantaneira; base dos safáris de onça.", lat:-17.35, lng:-56.7758},
      {n:"Pousada Piuval", base:"Poconé", nota:"Lodge no km 10, com focagem, cavalgada e safari fotográfico.", lat:-16.2567, lng:-56.6228},
    ],
    encontros:[
      {n:"Encontros de campismo em Chapada dos Guimarães", base:"Chapada dos Guimarães", nota:"Confraternizações de motorhome/trailer perto de Cuiabá; agenda no MaCamp e ANACAMP.", lat:-15.4608, lng:-55.7503},
    ],
    pernoite:[
      {n:"Postos de Poconé", base:"Poconé", nota:"Último apoio com estrutura antes da Transpantaneira.", lat:-16.2567, lng:-56.6228},
      {n:"Áreas da Transpantaneira (MT-060)", base:"Transpantaneira", nota:"Pontes de madeira; dirija devagar, leve repelente."},
    ],
    comer:[
      {n:"Peixarias de rio", base:"Cuiabá", nota:"Pintado na telha, pacu e mojica."},
      {n:"Pratos pantaneiros", base:"Pousadas (Pixaim)", nota:"Pensão completa; arroz carreteiro e peixe."},
    ],
  },
  "ms-pantanal-bonito": {
    transporte:[
      {cidade:"Campo Grande", sistema:"Ônibus urbanos (terminais)", passe:"Cartão", app:"Moovit", dica:"Parque das Nações e Feira Central por app/ônibus; Bonito é só de carro/transfer."},
    ],
    atracoes:[
      {n:"Parque das Nações Indígenas", base:"Campo Grande", nota:"Um dos maiores parques urbanos do país; museus.", lat:-20.4486, lng:-54.5715},
      {n:"Feira Central", base:"Campo Grande", nota:"Sobá e cultura nipo-sul-mato-grossense (qui–sáb).", lat:-20.464, lng:-54.609},
      {n:"Morada dos Baís", base:"Campo Grande", nota:"Casarão histórico e centro de informação turística.", lat:-20.469, lng:-54.614},
      {n:"Campo Grande", base:"Campo Grande", nota:"Capital de MS e porta de entrada da região.", lat:-20.4697, lng:-54.6201},
      {n:"Estrada Parque (Passo do Lontra)", base:"Aquidauana", nota:"Estrada de terra e pontes pela planície alagável; fauna abundante.", lat:-19.5747, lng:-57.0233},
      {n:"Bonito", base:"Bonito", nota:"Rios cristalinos para flutuação, Gruta do Lago Azul e cachoeiras.", lat:-21.1261, lng:-56.4836},
      {n:"Serra da Bodoquena", base:"Bonito", nota:"Parque nacional de cânions, cachoeiras e nascentes.", lat:-20.5378, lng:-56.7128},
    ],
    museus:[
      {n:"Museu das Culturas Dom Bosco", base:"Campo Grande", nota:"Acervo etnográfico indígena e de história natural."},
      {n:"MARCO – Arte Contemporânea", base:"Campo Grande", nota:"Museu de Arte Contemporânea de Mato Grosso do Sul."},
      {n:"Memorial da Cultura Indígena", base:"Campo Grande", nota:"Aldeia Marçal de Souza; cultura Terena."},
    ],
    parques:[
      {n:"P. N. da Serra da Bodoquena", base:"Bonito", nota:"Cânions, cachoeiras e nascentes cristalinas."},
      {n:"Rio Sucuri", base:"Bonito", nota:"Flutuação em um dos rios mais cristalinos do mundo (voucher)."},
      {n:"Nascente Azul / Rio da Prata", base:"Bonito", nota:"Flutuação em águas azul-turquesa; reserve antes."},
      {n:"Balneário Municipal", base:"Bonito", nota:"Banho no Rio Formoso sem guia; ótimo p/ famílias."},
      {n:"Gruta de São Miguel", base:"Bonito", nota:"Espeleotemas e trilha suspensa; perto do centro."},
      {n:"Boca da Onça", base:"Bonito", nota:"Maior cachoeira de MS e circuito de trilhas/rapel."},
      {n:"Buraco das Araras", base:"Jardim", nota:"Dolina gigante (100 m) com revoada de araras-vermelhas."},
      {n:"Lagoa Misteriosa", base:"Jardim", nota:"Dolina inundada de mergulho (mais de 200 m de profundidade)."},
      {n:"Cachoeiras da Serra da Bodoquena", base:"Bodoquena", nota:"Quedas e balneários 'no meio do mato'; cidade tranquila."},
      {n:"Estrada Parque do Pantanal", base:"Miranda/Corumbá", nota:"Fauna por pontes de madeira; melhor na seca."},
    ],
    campings:[
      {n:"Campings de Bonito", base:"Bonito", nota:"Boa estrutura; base dos passeios (voucher).", lat:-21.1261, lng:-56.4836},
      {n:"Pousadas-fazenda (Passo do Lontra)", base:"Estrada Parque", nota:"Pacotes com focagem, barco e cavalgada.", lat:-19.5747, lng:-57.0233},
    ],
    pernoite:[
      {n:"Postos da BR-262", base:"Miranda/Aquidauana", nota:"Grandes pátios na rota Campo Grande–Corumbá.", lat:-20.2419, lng:-56.3789},
      {n:"Estac. dos atrativos de Bonito", base:"Bonito", nota:"Cada passeio tem horário e cota; chegue na hora.", lat:-21.1261, lng:-56.4836},
    ],
    comer:[
      {n:"Restaurantes de Bonito", base:"Bonito", nota:"Peixe de rio, sobá e tereré."},
      {n:"Comida pantaneira", base:"Corumbá", nota:"Peixe do Paraguai e cultura ribeirinha."},
    ],
    eventos:[
      {n:"Festival de Inverno de Bonito", base:"Bonito", nota:"Fim de agosto; shows nacionais, arte e gastronomia (gratuito)."},
      {n:"FLIB — Feira Literária", base:"Bonito", nota:"Junho; encontros literários e cultura."},
      {n:"Festival da Guavira", base:"Bonito", nota:"Novembro; celebra o fruto típico do cerrado."},
      {n:"Festival da Pesca", base:"Bonito", nota:"Março/abril; tradição ribeirinha no Rio Formoso."},
      {n:"Festa da Linguiça de Maracaju", base:"Maracaju", nota:"Abr–mai; a maior festa gastronômica de MS — linguiça artesanal (IG, com laranja azeda), no caminho a Bonito."},
    ],
    encontros:[
      {n:"Encontros de campismo em Bonito", base:"Bonito", nota:"Confraternizações de motorhome/trailer na capital do ecoturismo; agenda no MaCamp e ANACAMP.", lat:-21.1261, lng:-56.4836},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Mato Grosso do Sul", nota:"Encontros espontâneos de caravanismo na rota Bonito–Pantanal."},
    ],
  },

  /* ===================== INTERIOR DE SP ===================== */
  "sp-circuito-aguas": {
    atracoes:[
      {n:"Campinas", base:"Campinas", nota:"Hub do interior paulista e ponto de partida do circuito.", lat:-22.9099, lng:-47.0626},
      {n:"Serra Negra", base:"Serra Negra", nota:"Estância de malhas e teleférico; ar de montanha a 1h de Campinas.", lat:-22.6122, lng:-46.7008},
      {n:"Socorro", base:"Serra Negra", nota:"Capital paulista do turismo de aventura, no Rio do Peixe.", lat:-22.5908, lng:-46.5289},
      {n:"Holambra", base:"Amparo", nota:"Colônia holandesa; moinho, campos de flores e a Expoflora.", lat:-22.6356, lng:-47.0556},
    ],
    museus:[
      {n:"Museu Histórico e Cultural", base:"Holambra", nota:"Imigração holandesa e a cultura das flores."},
      {n:"Museu da Cachaça", base:"Monte Alegre do Sul", nota:"História da cachaça artesanal da região."},
    ],
    parques:[
      {n:"Parque das Fontes", base:"Águas de Lindóia", nota:"Fontes minerais, bosque e balneário."},
      {n:"Campos de flores de Holambra", base:"Holambra", nota:"Moinho, tulipas (jul–set) e a Expoflora."},
      {n:"Balneário Municipal", base:"Águas de Lindóia", nota:"Banhos termais sulfurosos, ducha escocesa e jardins de Burle Marx."},
      {n:"Teleférico & Cristo Redentor", base:"Serra Negra", nota:"Sobe ao Alto da Serra / Pico do Fonseca (1.310 m); mirante.", lat:-22.6120, lng:-46.7033},
      {n:"Morro Pelado", base:"Águas de Lindóia", nota:"Um dos pontos mais altos da região (1.400 m); voo livre."},
      {n:"Rafting no Rio do Peixe", base:"Socorro", nota:"Aventura clássica; tirolesa, trilhas e arvorismo na cidade."},
      {n:"Alambiques de cachaça", base:"Monte Alegre do Sul", nota:"A 'capital da cachaça'; +20 alambiques abertos a visita."},
      {n:"Centro de malhas", base:"Serra Negra", nota:"Comércio de tricô, couro e artesanato; shopping a céu aberto."},
    ],
    campings:[
      {n:"Campings de Socorro", base:"Socorro", nota:"À beira do Rio do Peixe; base de aventura.", lat:-22.5908, lng:-46.5289},
      {n:"Camping em Serra Negra", base:"Serra Negra", nota:"Ar de montanha; perto do teleférico.", lat:-22.6122, lng:-46.7008},
    ],
    pernoite:[
      {n:"Postos da Rod. Anhanguera/Bandeirantes", base:"Campinas", nota:"Grandes pátios na chegada ao circuito.", lat:-22.9099, lng:-47.0626},
      {n:"Estac. das estâncias", base:"Águas de Lindóia", nota:"Vagas perto dos parques de fontes.", lat:-22.4761, lng:-46.6306},
    ],
    comer:[
      {n:"Cafés coloniais", base:"Serra Negra", nota:"Café colonial e truta na serra."},
      {n:"Cozinha holandesa", base:"Holambra", nota:"Pratos e doces da colônia; queijos."},
      {n:"Dom Bambu & MAS Bistrô", base:"Monte Alegre do Sul", nota:"Boa gastronomia de interior na capital da cachaça."},
    ],
    eventos:[
      {n:"Expoflora", base:"Holambra", nota:"Set–out; a maior feira de flores da América Latina."},
      {n:"Paixão de Cristo & Auto de Natal", base:"Serra Negra", nota:"Encenações em feriados; programação cultural o ano todo."},
    ],
    encontros:[
      {n:"Encontros do grupo Pé na Estrada (SP)", base:"Circuito das Águas Paulista", nota:"Saídas do tradicional grupo paulista de caravanismo; agenda na ANACAMP."},
      {n:"Encontros VQQ 'Vai Quem Quer'", base:"Interior de SP", nota:"Encontros espontâneos de motorhome/trailer no circuito das águas e flores."},
    ],
  },
  "sp-campos-jordao": {
    atracoes:[
      {n:"São José dos Campos", base:"São José dos Campos", nota:"Hub do Vale do Paraíba e ponto de partida à serra.", lat:-23.1896, lng:-45.8841},
      {n:"Campos do Jordão", base:"Campos do Jordão", nota:"A 'Suíça paulista'; Capivari, Horto Florestal e teleférico.", lat:-22.7392, lng:-45.5917},
      {n:"Santo Antônio do Pinhal", base:"Campos do Jordão", nota:"Vila de ateliês e o Pico Agudo, de voo livre.", lat:-22.8267, lng:-45.6628},
      {n:"São Bento do Sapucaí", base:"São Bento do Sapucaí", nota:"Base da Pedra do Baú; escalada e trilhas.", lat:-22.6889, lng:-45.7306},
    ],
    museus:[
      {n:"Museu Felícia Leirner", base:"Campos do Jordão", nota:"Esculturas ao ar livre, ao lado do Auditório Cáudio Santoro."},
      {n:"Palácio Boa Vista", base:"Campos do Jordão", nota:"Residência de inverno do governador; Tarsila e Portinari."},
      {n:"Casa da Xilogravura", base:"Campos do Jordão", nota:"Raro museu dedicado à xilogravura, em meio à mata."},
    ],
    parques:[
      {n:"P. E. de Campos do Jordão (Horto)", base:"Campos do Jordão", nota:"Araucárias, trilhas e o Horto Florestal."},
      {n:"Complexo da Pedra do Baú", base:"São Bento do Sapucaí", nota:"Escalada, via ferrata e trilhas com vista."},
      {n:"Parque Capivari & Teleférico", base:"Campos do Jordão", nota:"Centro turístico; teleférico ao Morro do Elefante (1.800 m).", lat:-22.7389, lng:-45.5022},
      {n:"Museu Felícia Leirner & Aud. Claudio Santoro", base:"Campos do Jordão", nota:"Esculturas ao ar livre; palco do Festival de Inverno."},
      {n:"Palácio Boa Vista", base:"Campos do Jordão", nota:"Residência de inverno do governador; arte de Tarsila e Portinari."},
      {n:"Parque Amantikir", base:"Campos do Jordão", nota:"Jardins temáticos inspirados em vários países; labirintos."},
      {n:"Pico do Itapeva", base:"Pindamonhangaba", nota:"Mirante a 2.030 m com vista do Vale do Paraíba."},
      {n:"Tour Cervejaria Baden Baden", base:"Campos do Jordão", nota:"Pioneira da cerveja artesanal; visita guiada e degustação."},
    ],
    campings:[
      {n:"Campings de São Bento do Sapucaí", base:"São Bento do Sapucaí", nota:"Base da Pedra do Baú; clima de montanha.", lat:-22.6889, lng:-45.7306},
      {n:"Camping em São Francisco Xavier", base:"São Francisco Xavier", nota:"Mata atlântica e cachoeiras; rústico.", lat:-22.8978, lng:-45.9986},
    ],
    pernoite:[
      {n:"Postos da Rod. Floriano Rodrigues Pinheiro", base:"São José dos Campos", nota:"Apoio na subida da serra.", lat:-23.1896, lng:-45.8841},
      {n:"Estac. do Capivari", base:"Campos do Jordão", nota:"No Festival de Inverno, chegue cedo.", lat:-22.7392, lng:-45.5917},
    ],
    comer:[
      {n:"Baden Baden", base:"Campos do Jordão", nota:"Choperia da cerveja local em Capivari; linguiças e pizzas."},
      {n:"Krokodillo", base:"Campos do Jordão", nota:"Fondue variado no centro de Capivari (fachada do jacaré)."},
      {n:"Libertango Parrilla", base:"São Bento do Sapucaí", nota:"Parrilla argentina de cortes nobres (reserve)."},
      {n:"Truta e cachaça", base:"São Francisco Xavier", nota:"Truta da serra e cachaças artesanais."},
    ],
    igrejas:[
      {n:"Mosteiro de São João", base:"Campos do Jordão", nota:"Recital de canto gregoriano todo dia às 17h45; loja de pães."},
      {n:"Igreja de São Benedito", base:"Campos do Jordão", nota:"No coração da Vila Capivari, junto à praça central."},
    ],
    eventos:[
      {n:"Festival de Inverno", base:"Campos do Jordão", nota:"Julho; o maior festival de música clássica da América Latina."},
      {n:"Sabores da Montanha", base:"Campos do Jordão", nota:"Inverno; maior festival gastronômico da Mantiqueira."},
      {n:"Páscoa Encantada", base:"Campos do Jordão", nota:"Fev–abr; ovos cenográficos, música e arte pela cidade."},
    ],
    encontros:[
      {n:"Encontros de inverno em Campos do Jordão", base:"Campos do Jordão", nota:"Confraternizações de motorhome/trailer na serra paulista; agenda no MaCamp e ANACAMP.", lat:-22.7392, lng:-45.5917},
      {n:"Encontros do grupo Pé na Estrada (SP)", base:"Mantiqueira paulista", nota:"Saídas do tradicional grupo paulista de caravanismo."},
    ],
  },

  /* ===================== PARAGUAI · BOLÍVIA · PERU ===================== */
  "py-missoes-asuncion": {
    transporte:[
      {cidade:"Asunción", sistema:"Ônibus urbanos + Costanera (sem metrô)", passe:"Billetaje eletrônico (Más/Jaha)", app:"Asaja · Moovit", dica:"Centro e Costanera a pé; para bairros, confira o app — o trânsito é intenso."},
    ],
    atracoes:[
      {n:"Palacio de los López", base:"Asunción", nota:"Sede do governo à beira do rio; iluminado à noite.", lat:-25.2806, lng:-57.6356},
      {n:"Costanera de Asunción", base:"Asunción", nota:"Orla do rio Paraguai e o pôr do sol da capital.", lat:-25.2667, lng:-57.645},
      {n:"Loma San Jerónimo", base:"Asunción", nota:"Bairro colorido boêmio, o 1º barrio turístico.", lat:-25.2731, lng:-57.6469},
      {n:"Itaipu Binacional", base:"Ciudad del Este", nota:"Uma das maiores hidrelétricas do mundo; visita guiada.", lat:-25.4083, lng:-54.5889},
      {n:"Trinidad (ruínas)", base:"Ciudad del Este", nota:"Maior conjunto jesuítico do país; show de luzes à noite (UNESCO).", lat:-27.1331, lng:-55.7169},
      {n:"Jesús de Tavarangue", base:"Ciudad del Este", nota:"Ruínas jesuíticas inacabadas; arcos e portais barrocos.", lat:-27.0467, lng:-55.7783},
      {n:"Encarnación", base:"Encarnación", nota:"A 'pérola do sul'; orla (Costanera) e praias de rio.", lat:-27.3306, lng:-55.8667},
      {n:"Asunción", base:"Asunción", nota:"Capital à beira do Rio Paraguai; Panteão, Palácio dos López e Costanera.", lat:-25.2637, lng:-57.5759},
      {n:"Areguá", base:"Asunción", nota:"Vila artística de pedra à beira do Lago Ypacaraí.", lat:-25.3094, lng:-57.3856},
    ],
    museus:[
      {n:"Museo del Barro", base:"Asunción", nota:"Arte indígena, popular e contemporânea; um dos melhores do país."},
      {n:"Casa de la Independencia", base:"Asunción", nota:"Casa colonial onde nasceu a independência paraguaia."},
      {n:"Museo de las Reducciones", base:"Trinidad", nota:"Arte sacra guarani-jesuítica junto às ruínas."},
    ],
    parques:[
      {n:"Itaipu Binacional", base:"Ciudad del Este", nota:"Uma das maiores hidrelétricas do mundo; visita e iluminação."},
      {n:"Ruínas de Trinidad (UNESCO)", base:"Encarnación", nota:"Maior conjunto jesuítico do país; show de luzes à noite."},
      {n:"Jesús de Tavarangue", base:"Encarnación", nota:"Ruínas jesuíticas inacabadas; arcos e portais barrocos."},
      {n:"Costanera de Encarnación", base:"Encarnación", nota:"Orla e praias de rio; a 'pérola do sul'."},
      {n:"Costanera & Panteão dos Heróis", base:"Asunción", nota:"Orla do Rio Paraguai e o mausoléu nacional, no centro."},
      {n:"Lago Ypacaraí & Areguá", base:"Areguá", nota:"Vila artística de pedra e balneários do lago."},
      {n:"Saltos del Monday", base:"Ciudad del Este", nota:"Quedas de 40 m perto da cidade; mirante e tirolesa."},
      {n:"Centro Astronômico de San Cosme", base:"San Cosme y Damián", nota:"Observatório nas ruínas jesuíticas; legado de astrônomos."},
      {n:"Cerro Koi & Chororeí", base:"Areguá", nota:"Formações geológicas raras de arenito hexagonal."},
    ],
    campings:[
      {n:"Campings da Costanera", base:"Encarnación", nota:"Áreas à beira-rio; movimento no verão.", lat:-27.3306, lng:-55.8667},
      {n:"Balneários do Ypacaraí", base:"San Bernardino", nota:"Áreas de lazer à beira do lago.", lat:-25.2833, lng:-57.3},
    ],
    pernoite:[
      {n:"Postos da Ruta 6 / Ruta 2", base:"Rota PY", nota:"Pátios na descida ao sul; combustível barato no PY."},
      {n:"Estac. da fronteira", base:"Ciudad del Este", nota:"Ponte da Amizade; atenção à cota e à papelada.", lat:-25.5097, lng:-54.6111},
    ],
    comer:[
      {n:"Paulista Grill / Tierra Colorada", base:"Asunción", nota:"Do rodízio renomado à alta gastronomia guarani-contemporânea."},
      {n:"Sopa paraguaia & chipa", base:"Asunción", nota:"Pratos típicos de milho e mandioca; asado guarani."},
      {n:"Lido Bar", base:"Asunción", nota:"Clássico balção em frente ao Panteão; caldo de surubi."},
      {n:"Mercado Cuatro", base:"Asunción", nota:"Comida de rua e cultura popular na capital."},
      {n:"Peixarias do rio", base:"Encarnación", nota:"Surubi e dourado do Rio Paraná."},
    ],
    igrejas:[
      {n:"Catedral de Asunción", base:"Asunción", nota:"Catedral Metropolitana no centro histórico, junto à Costanera."},
    ],
    eventos:[
      {n:"Carnaval Encarnaceno", base:"Encarnación", nota:"Jan–fev; o maior carnaval do Paraguai, com sambódromo."},
      {n:"Festival del Lago Ypacaraí", base:"San Bernardino", nota:"Verão; música e cultura à beira do lago."},
    ],
  },
  "bo-altiplano-uyuni": {
    transporte:[
      {cidade:"La Paz", sistema:"Mi Teleférico (maior rede do mundo) + minibuses", passe:"Bilhete por linha (cores)", app:"Mi Teleférico", dica:"Use os teleféricos para vencer o relevo; linhas Vermelha/Amarela ligam o centro a El Alto."},
    ],
    atracoes:[
      {n:"Calle Jaén & Plaza Murillo", base:"La Paz", nota:"Rua colonial-museu e a praça do poder, no centro."},
      {n:"Mirador Killi Killi", base:"La Paz", nota:"Vista 360° da cidade encravada nos Andes."},
      {n:"Tiwanaku", base:"Santa Cruz", nota:"Ruínas pré-incaicas; Portal do Sol e Kalasasaya.", lat:-16.5547, lng:-68.6731},
      {n:"La Paz", base:"La Paz", nota:"Capital administrativa a 3.600 m; teleféricos e Mercado das Bruxas.", lat:-16.5, lng:-68.15},
      {n:"Copacabana", base:"Copacabana", nota:"Vila à beira do Titicaca; basílica e porto à Isla del Sol.", lat:-16.1667, lng:-69.0833},
      {n:"Isla del Sol", base:"Copacabana", nota:"Ilha sagrada inca no Titicaca; acesso de barco a partir de Copacabana.", lat:-16.025, lng:-69.16},
      {n:"Salar de Uyuni", base:"Sucre", nota:"Maior salar do mundo (10.000 km²); jeep 4x4 com guia desde Uyuni.", lat:-20.3, lng:-67.05},
    ],
    parques:[
      {n:"Salar de Uyuni", base:"Uyuni", nota:"Maior salar do mundo (10.000 km²); jeep 4x4 com guia."},
      {n:"Tiwanaku", base:"La Paz", nota:"Ruínas pré-incaicas; Portal do Sol e Kalasasaya."},
      {n:"Valle de la Luna", base:"La Paz", nota:"Formações de argila erodida, perto da cidade."},
      {n:"Mi Teleférico", base:"La Paz", nota:"Rede de teleféricos urbanos com vista do altiplano."},
      {n:"Isla del Sol", base:"Copacabana", nota:"Ilha sagrada inca no Titicaca; trilhas e ruínas (de barco)."},
      {n:"Cerro Rico & Casa de la Moneda", base:"Potosí", nota:"Minas históricas de prata a 4.000 m (UNESCO)."},
      {n:"Cemitério de Trens", base:"Uyuni", nota:"Locomotivas enferrujadas no deserto, perto da cidade."},
      {n:"Isla Incahuasi", base:"Salar de Uyuni", nota:"Ilha de cactos gigantes no meio do salar."},
      {n:"Mercado de las Brujas", base:"La Paz", nota:"Mercado das bruxas; amuletos e tradições aimarás no centro."},
      {n:"Camino de la Muerte (North Yungas)", base:"La Paz", nota:"A 'estrada da morte' de bicicleta; descida de 3.600 m a 1.200 m."},
      {n:"Laguna Colorada", base:"Uyuni", nota:"Laguna vermelha de flamingos, na Reserva Eduardo Avaroa."},
      {n:"Gêiseres Sol de Mañana", base:"Uyuni", nota:"Fumarolas e gêiseres a 4.900 m, no circuito Sud Lípez."},
    ],
    campings:[
      {n:"Hotéis de sal", base:"Salar de Uyuni", nota:"Hospedagem feita de blocos de sal na borda do salar.", lat:-20.3, lng:-67.05},
      {n:"Hospedagens de Copacabana", base:"Copacabana", nota:"Pousadas simples à beira do Titicaca.", lat:-16.1667, lng:-69.0833},
    ],
    pernoite:[
      {n:"Postos de rota (altiplano)", base:"Rota BO", nota:"Apoio escasso entre cidades; abasteça nas cidades grandes."},
      {n:"Base de tours em Uyuni", base:"Uyuni", nota:"Cidade-base dos jeeps ao salar; estrutura simples.", lat:-20.4597, lng:-66.8253},
    ],
    comer:[
      {n:"Gustu", base:"La Paz", nota:"Alta gastronomia boliviana de Claus Meyer (Noma); reserve."},
      {n:"Salteñas & silpancho", base:"La Paz", nota:"Tortas salgadas e pratos andinos; mercados da cidade."},
      {n:"Mercado Lanza / Calle Jaén", base:"La Paz", nota:"Comida popular e cafés na rua colonial mais bonita."},
      {n:"Trucha do Titicaca", base:"Copacabana", nota:"Truta grelhada à beira do lago."},
      {n:"Mercado Central", base:"Sucre", nota:"Sucos, sopas e pratos típicos na cidade branca."},
      {n:"Pizzerías & cafés", base:"Uyuni", nota:"Minuteman Pizza e cafés aquecidos na cidade-base do salar."},
    ],
    igrejas:[
      {n:"Basílica de Copacabana", base:"Copacabana", nota:"Santuário da Virgen de Copacabana, à beira do Titicaca."},
      {n:"Catedral de Sucre", base:"Sucre", nota:"Conjunto colonial da capital constitucional (UNESCO)."},
    ],
    museus:[
      {n:"Casa Nacional de la Moneda", base:"Potosí", nota:"Antiga casa da moeda; um dos maiores museus da América do Sul."},
      {n:"Museo Nacional de Etnografía (MUSEF)", base:"La Paz", nota:"Máscaras, têxteis e culturas andinas, em casarão colonial."},
      {n:"Museo de la Coca", base:"La Paz", nota:"História e cultura da folha de coca nos Andes."},
      {n:"Casa de la Libertad", base:"Sucre", nota:"Onde se assinou a independência da Bolívia (1825)."},
      {n:"Museo del Litoral / Calle Jaén", base:"La Paz", nota:"Conjunto de museus na rua colonial mais preservada."},
    ],
    eventos:[
      {n:"Carnaval de Oruro", base:"Oruro", nota:"Fev–mar; a Diablada, Patrimônio Imaterial da Humanidade."},
      {n:"Virgen de Copacabana", base:"Copacabana", nota:"Ago; uma das maiores festas religiosas do altiplano."},
    ],
  },
  "pe-cusco-machupicchu": {
    transporte:[
      {cidade:"Lima", sistema:"Metropolitano (BRT) + Metrô (Línea 1)", passe:"Tarjeta del Metropolitano / del Metro", app:"Moovit", dica:"Miraflores–Barranco a pé ou por app (Uber/Cabify). Trânsito caótico fora dos corredores."},
      {cidade:"Cusco", sistema:"Centro compacto a pé; colectivos e táxis para arredores", passe:"—", app:"—", dica:"Suba devagar pela altitude (3.400 m). Vale Sagrado e Sacsayhuamán por tour/colectivo."},
    ],
    atracoes:[
      {n:"Plaza de Armas de Arequipa", base:"Arequipa", nota:"Praça de sillar branco, catedral e portais.", lat:-16.3989, lng:-71.5369},
      {n:"Bairro de Yanahuara", base:"Arequipa", nota:"Mirante de arcos com vista do vulcão Misti.", lat:-16.394, lng:-71.545},
      {n:"Centro Histórico de Lima", base:"Lima", nota:"Plaza Mayor, Catedral e o casario colonial (UNESCO). Metropolitano: est. Jirón de la Unión"},
      {n:"Miraflores & Malecón", base:"Lima", nota:"Orla sobre o Pacífico, Parque del Amor e Larcomar. Metropolitano: est. Ricardo Palma"},
      {n:"Barranco", base:"Lima", nota:"Bairro boêmio e artístico; Puente de los Suspiros e murais. Metropolitano: est. Bulevar / Balta"},
      {n:"Plaza de Armas de Cusco", base:"Cusco", nota:"Coração inca-colonial; catedral e La Compañía."},
      {n:"Bairro de San Blas", base:"Cusco", nota:"Ruelas de artesãos, mirantes e cafés sobre a cidade."},
      {n:"Mercado de San Pedro", base:"Cusco", nota:"Mercado típico; sucos, queijos e cultura local."},
      {n:"Mirador de Yanahuara", base:"Arequipa", nota:"Arcos de sillar com vista do vulcão Misti."},
      {n:"Lima", base:"Lima", nota:"Capital costeira; centro histórico e Miraflores.", lat:-12.0464, lng:-77.0428},
      {n:"Arequipa", base:"Arequipa", nota:"A cidade branca; Santa Catalina e o vulcão Misti.", lat:-16.409, lng:-71.5375},
      {n:"Cânion do Colca", base:"Lima", nota:"Um dos cânions mais profundos do mundo; voo dos condores ao amanhecer.", lat:-15.6386, lng:-71.6011},
      {n:"Cusco", base:"Cusco", nota:"Capital inca; Plaza de Armas e Sacsayhuamán.", lat:-13.5319, lng:-71.9675},
      {n:"Pisac (Vale Sagrado)", base:"Cusco", nota:"Ruínas e mercado andino no Vale Sagrado.", lat:-13.42, lng:-71.8492},
      {n:"Ollantaytambo", base:"Cusco", nota:"Fortaleza inca e estação de trem a Machu Picchu.", lat:-13.2586, lng:-72.2636},
      {n:"Machu Picchu", base:"Cusco", nota:"Cidadela inca; ingresso e trem com reserva antecipada obrigatória.", lat:-13.1631, lng:-72.545},
      {n:"Puno", base:"Puno", nota:"Porto do Titicaca; ilhas dos Uros e Taquile.", lat:-15.8402, lng:-70.0219},
    ],
    parques:[
      {n:"Machu Picchu", base:"Aguas Calientes", nota:"Cidadela inca; ingresso e trem com reserva antecipada."},
      {n:"Cânion do Colca", base:"Arequipa", nota:"Voo dos condores na Cruz del Cóndor, ao amanhecer."},
      {n:"Sacsayhuamán", base:"Cusco", nota:"Fortaleza inca de pedras ciclópicas, acima de Cusco."},
      {n:"Vale Sagrado (Pisac)", base:"Cusco", nota:"Ruínas e mercado andino; terraços incas."},
      {n:"Ollantaytambo", base:"Vale Sagrado", nota:"Fortaleza inca e estação de trem a Machu Picchu."},
      {n:"Montaña 7 Colores (Vinicunca)", base:"Cusco", nota:"Montanha colorida a 5.000 m; trilha de altitude."},
      {n:"Laguna Humantay", base:"Cusco", nota:"Lago turquesa glacial a 4.200 m; trilha de meio-dia."},
      {n:"Maras & Moray", base:"Vale Sagrado", nota:"Salinas em terraços e os anfiteatros agrícolas incas."},
      {n:"Águas termais de Cocalmayo", base:"Santa Teresa", nota:"Piscinas termais perto de Machu Picchu, na rota alternativa."},
      {n:"Ilhas dos Uros & Taquile", base:"Puno", nota:"Ilhas flutuantes de totora no Lago Titicaca."},
      {n:"Mosteiro de Santa Catalina", base:"Arequipa", nota:"Cidadela conventual colorida no centro da cidade branca."},
    ],
    campings:[
      {n:"Hospedagens de Aguas Calientes", base:"Aguas Calientes", nota:"Base ao pé de Machu Picchu; reserve cedo."},
      {n:"Pousadas do Vale Sagrado", base:"Ollantaytambo", nota:"Boa base para o trem e as ruínas, mais barato que Cusco.", lat:-13.2586, lng:-72.2636},
      {n:"Camping em Ollantaytambo", base:"Ollantaytambo", nota:"Vale Sagrado; base para Machu Picchu de trem.", lat:-13.2586, lng:-72.2636},
      {n:"Quinta Lala", base:"Cusco", nota:"Camping clássico de overlanders no alto de Cusco.", lat:-13.5319, lng:-71.9675},
    ],
    pernoite:[
      {n:"Trem a Machu Picchu", base:"Ollantaytambo", nota:"Sem estrada à cidadela; só de trem + ônibus de subida.", lat:-13.2586, lng:-72.2636},
      {n:"Base em Cusco", base:"Cusco", nota:"Aclimate-se 1–2 dias (3.400 m) antes das trilhas.", lat:-13.5319, lng:-71.9675},
    ],
    comer:[
      {n:"Central / Maido (Lima)", base:"Lima", nota:"Entre os melhores do mundo; alta cozinha peruana (reserve)."},
      {n:"Ceviche em Miraflores", base:"Lima", nota:"Cevicherias clássicas e pisco sour à beira-mar."},
      {n:"Chicha de Gastón Acurio", base:"Cusco", nota:"Cozinha cusquenha autoral na Plaza Regocijo."},
      {n:"Cicciolina & Limo", base:"Cusco", nota:"Tapas andinas e bons drinks no bairro de San Blas."},
      {n:"Mercado de San Pedro", base:"Cusco", nota:"Sucos, queijos e almoços populares; cultura local."},
      {n:"Picanterías arequipenhas", base:"Arequipa", nota:"Rocoto relleno e adobo nas picanterías tradicionais."},
      {n:"Morena Peruvian Kitchen", base:"Aguas Calientes", nota:"Boa parada gastronômica ao pé de Machu Picchu."},
      {n:"Cafés e bares de San Blas", base:"Cusco", nota:"Cafés de altitude e coquetelaria de pisco no bairro boêmio."},
    ],
    museus:[
      {n:"Museo Larco", base:"Lima", nota:"Cerâmica pré-colombiana em mansão do séc. 18; café premiado."},
      {n:"MATE – Museo Mario Testino", base:"Lima", nota:"Fotografia e arte contemporânea em Barranco."},
      {n:"Qorikancha", base:"Cusco", nota:"Templo inca do sol sob o convento de Santo Domingo."},
      {n:"Museo Inka", base:"Cusco", nota:"Maior acervo inca da cidade, em casarão colonial."},
      {n:"Museo de Arte Precolombino (MAP)", base:"Cusco", nota:"Ourivesaria e cerâmica pré-colombianas, em San Blas."},
      {n:"Museo Santuarios Andinos (Juanita)", base:"Arequipa", nota:"A múmia inca congelada 'Juanita', na cidade branca."},
    ],
    igrejas:[
      {n:"Catedral de Cusco", base:"Cusco", nota:"Conjunto barroco-andino na Plaza de Armas."},
      {n:"Igreja da Companhia de Jesus", base:"Arequipa", nota:"Fachada barroca de sillar branco, na Plaza de Armas."},
    ],
    eventos:[
      {n:"Inti Raymi", base:"Cusco", nota:"24 jun; a festa inca do sol, em Sacsayhuamán."},
      {n:"Virgen de la Candelaria", base:"Puno", nota:"Fev; uma das maiores festas religiosas da América do Sul."},
    ],
  },
  "py-chaco-menonitas": {
    atracoes:[
      {n:"Asunción", base:"Asunción", nota:"Capital e ponto de partida rumo ao norte e ao Chaco.", lat:-25.2635, lng:-57.5784},
      {n:"Concepción", base:"Concepción", nota:"A 'pérola do norte'; porto fluvial no rio Paraguai.", lat:-23.4083, lng:-57.4344},
      {n:"Filadélfia", base:"Filadélfia", nota:"Capital menonita do Chaco; museus, laticínios e ordem germânica.", lat:-22.3417, lng:-60.0317},
      {n:"Fortín Boquerón", base:"Filadélfia", nota:"Campo de batalha e museu da Guerra do Chaco.", lat:-22.45, lng:-60.3},
      {n:"Defensores del Chaco", base:"Filadélfia", nota:"Parque remoto e selvagem; só com 4x4, guia e provisões.", lat:-20.05, lng:-60.45},
    ],
    museus:[
      {n:"Museo Jakob Unger", base:"Filadélfia", nota:"História natural do Chaco e da colônia menonita Fernheim."},
      {n:"Museo de la Colonia Menno", base:"Loma Plata", nota:"Pioneirismo menonita no Chaco Central."},
    ],
    parques:[
      {n:"P. N. Defensores del Chaco", base:"Filadélfia", nota:"Maior parque do país; Cerro León e fauna do Chaco (só 4x4)."},
      {n:"Porto de Concepción", base:"Concepción", nota:"Porto fluvial no rio Paraguai; casario e barcos ao norte."},
      {n:"Fortín Boquerón", base:"Filadélfia", nota:"Campo de batalha e museu da Guerra do Chaco."},
      {n:"Chaco Lodge / lagunas salinas", base:"Filadélfia", nota:"Reserva privada de avifauna no Chaco Central."},
    ],
    campings:[
      {n:"Áreas à beira-rio", base:"Concepción", nota:"Estrutura simples; calor forte no verão.", lat:-23.4083, lng:-57.4344},
      {n:"Acampamento no Defensores", base:"Defensores del Chaco", nota:"Remoto; leve tudo (água, comida, combustível).", lat:-20.05, lng:-60.45},
    ],
    pernoite:[
      {n:"Postos do Trans-Chaco (Ruta 9)", base:"Pozo Colorado", nota:"Apoio escasso; abasteça em cada posto disponível.", lat:-23.49, lng:-58.8},
      {n:"Hotéis das colônias", base:"Filadélfia/Loma Plata", nota:"Boa base menonita; reserve com antecedência.", lat:-22.3417, lng:-60.0317},
    ],
    comer:[
      {n:"Laticínios menonitas", base:"Loma Plata", nota:"Queijos e produtos da cooperativa Chortitzer."},
      {n:"Cozinha germânica do Chaco", base:"Filadélfia", nota:"Carne, embutidos e pães da colônia."},
      {n:"Asado & tereré", base:"Filadélfia", nota:"Churrasco do Chaco e o tradicional tereré gelado."},
      {n:"Surubi do rio", base:"Concepción", nota:"Peixe do rio Paraguai e tereré."},
    ],
    eventos:[
      {n:"Expo Pioneros", base:"Filadélfia", nota:"Jul; feira agropecuária e cultura menonita do Chaco."},
    ],
  },
  "bo-sud-lipez": {
    atracoes:[
      {n:"Tupiza", base:"Tupiza", nota:"Vales vermelhos e quebradas do sul boliviano.", lat:-21.4439, lng:-65.7192},
      {n:"Uyuni", base:"Uyuni", nota:"Base dos tours de jeep ao Sud Lípez.", lat:-20.4595, lng:-66.8278},
      {n:"Laguna Colorada", base:"Reserva Eduardo Avaroa", nota:"Laguna vermelha de algas; milhares de flamingos a 4.300 m.", lat:-22.19, lng:-67.77},
      {n:"Sol de Mañana", base:"Reserva Eduardo Avaroa", nota:"Gêiseres e fumarolas a 4.900 m de altitude.", lat:-22.43, lng:-67.76},
      {n:"Árbol de Piedra", base:"Reserva Eduardo Avaroa", nota:"Rocha esculpida pelo vento no deserto de Siloli.", lat:-21.9, lng:-67.8},
      {n:"Laguna Verde", base:"Reserva Eduardo Avaroa", nota:"Laguna turquesa ao pé do Licancabur; saída ao Atacama.", lat:-22.79, lng:-67.82},
    ],
    museus:[
      {n:"Museo Arqueológico", base:"Uyuni", nota:"Têxteis, crânios e cultura dos Lípez andinos."},
      {n:"Momias de Coqueza", base:"Volcán Tunupa", nota:"Múmias em caverna na borda do Salar de Uyuni."},
    ],
    parques:[
      {n:"Reserva Eduardo Avaroa", base:"Uyuni", nota:"Deserto de altitude com lagunas, gêiseres e vulcões."},
      {n:"Laguna Colorada", base:"Reserva Avaroa", nota:"Laguna vermelha de algas; milhares de flamingos a 4.300 m."},
      {n:"Sol de Mañana", base:"Reserva Avaroa", nota:"Gêiseres e fumarolas a 4.900 m de altitude."},
      {n:"Laguna Verde & Licancabur", base:"Reserva Avaroa", nota:"Laguna turquesa ao pé do vulcão; fronteira com o Atacama."},
      {n:"Árbol de Piedra", base:"Deserto de Siloli", nota:"Rocha esculpida pelo vento no altiplano."},
      {n:"Vales & quebradas de Tupiza", base:"Tupiza", nota:"Cânions vermelhos; cavalgadas e a terra de Butch Cassidy."},
    ],
    campings:[
      {n:"Refúgios da Colorada", base:"Laguna Colorada", nota:"Abrigos básicos do circuito; frio extremo à noite.", lat:-22.19, lng:-67.77},
      {n:"Hospedagens de Tupiza", base:"Tupiza", nota:"Cidade-base; pousadas simples.", lat:-21.4439, lng:-65.7192},
    ],
    pernoite:[
      {n:"Base de tours em Uyuni", base:"Uyuni", nota:"Saída dos jeeps ao Sud Lípez; estrutura simples.", lat:-20.4597, lng:-66.8253},
      {n:"Aguas Termais de Polques", base:"Reserva Avaroa", nota:"Parada do circuito; banho termal a 4.400 m."},
    ],
    comer:[
      {n:"Pensão do circuito", base:"Sud Lípez", nota:"Refeições incluídas no tour de jeep (3–4 dias)."},
      {n:"Quinoa e charque", base:"Tupiza", nota:"Cozinha andina do sul boliviano."},
    ],
    eventos:[
      {n:"Travessia ao Atacama", base:"Hito Cajón", nota:"Saída do circuito à fronteira chilena (San Pedro de Atacama)."},
    ],
  },
  "pe-cordillera-blanca": {
    atracoes:[
      {n:"Plaza de Armas de Huaraz", base:"Huaraz", nota:"Centro da capital do montanhismo; catedral e mercado.", lat:-9.5295, lng:-77.5285},
      {n:"Mirador de Rataquenua", base:"Huaraz", nota:"Vista da cidade e da Cordillera Blanca.", lat:-9.543, lng:-77.521},
      {n:"Lima", base:"Lima", nota:"Capital costeira e ponto de partida rumo aos Andes.", lat:-12.0462, lng:-77.0453},
      {n:"Huaraz", base:"Huaraz", nota:"Capital do montanhismo; base da Cordillera Blanca.", lat:-9.5278, lng:-77.5278},
      {n:"Laguna 69", base:"Lima", nota:"Laguna glacial turquesa a 4.600 m; trilha de meio-dia de altitude.", lat:-8.9667, lng:-77.61},
      {n:"Lagunas de Llanganuco", base:"Llanganuco", nota:"Lagunas gêmeas sob o nevado Huascarán.", lat:-9.0667, lng:-77.6333},
      {n:"Laguna Parón", base:"Llanganuco", nota:"A maior laguna da Cordillera Blanca; mirante do Piramide.", lat:-9.05, lng:-77.69},
      {n:"Chavín de Huántar", base:"Chavín de Huántar", nota:"Templo pré-inca de Chavín de Huántar; galerias e o Lanzón (UNESCO).", lat:-9.59, lng:-77.1783},
    ],
    museus:[
      {n:"Museo Arqueológico de Áncash", base:"Huaraz", nota:"Maior coleção de monólitos de pedra do Peru."},
      {n:"Museo Nacional Chavín", base:"Chavín de Huántar", nota:"Acervo do templo pré-inca, incluindo cabeças cravadas."},
    ],
    parques:[
      {n:"P. N. Huascarán (UNESCO)", base:"Huaraz", nota:"Maior cordilheira tropical; nevados, lagunas e trilhas."},
      {n:"Laguna 69", base:"Huaraz", nota:"Laguna glacial turquesa a 4.600 m; trilha de meio-dia."},
      {n:"Lagunas de Llanganuco", base:"Yungay", nota:"Lagunas gêmeas sob o nevado Huascarán (6.768 m)."},
      {n:"Laguna Parón", base:"Caraz", nota:"A maior da Cordillera Blanca; mirante do Pirámide."},
      {n:"Nevado Pastoruri", base:"Huaraz", nota:"Geleira acessível e a 'Rota das Puyas Raimondi'."},
      {n:"Chavín de Huántar (UNESCO)", base:"Chavín", nota:"Templo pré-inca; galerias e o monólito Lanzón."},
    ],
    campings:[
      {n:"Acampamentos de trekking", base:"Huascarán", nota:"Santa Cruz e outras trilhas; só com guia/arriero."},
      {n:"Campings de Caraz", base:"Caraz", nota:"Base tranquila do Callejón de Huaylas.", lat:-9.0481, lng:-77.8108},
      {n:"Camping em Huaraz", base:"Huaraz", nota:"Áreas e hospedagens com pátio; base de aclimatação.", lat:-9.5278, lng:-77.5278},
      {n:"Camping Llanganuco", base:"Yungay", nota:"Acampamento de altitude junto às lagoas, no PN Huascarán."},
    ],
    pernoite:[
      {n:"Base de aclimatação", base:"Huaraz", nota:"Suba devagar; faça trilhas curtas antes da Laguna 69.", lat:-9.5278, lng:-77.5278},
      {n:"Estac. das trilhas", base:"Yungay/Caraz", nota:"Acessos de altitude; vá cedo e cheque o tempo.", lat:-9.0481, lng:-77.8108},
    ],
    comer:[
      {n:"Trucha & pachamanca", base:"Huaraz", nota:"Cozinha andina; trutas dos rios glaciais."},
      {n:"Manjar de Caraz", base:"Caraz", nota:"Doce de leite típico da 'Caraz Dulzura'."},
      {n:"Cuy e cafés andinos", base:"Huaraz", nota:"Pratos típicos e cafés no centro."},
    ],
    eventos:[
      {n:"Semana del Andinismo", base:"Huaraz", nota:"Jun; encontro de montanhismo da Cordillera Blanca."},
      {n:"Señor de la Soledad", base:"Huaraz", nota:"Maio; padroeiro e festa tradicional da cidade."},
    ],
  },
  "ar-norte-salta": {
    transporte:[
      {cidade:"Salta", sistema:"Teleférico San Bernardo + ônibus urbano (SAETA)", passe:"Tarjeta SAETA", app:"—", dica:"Centro histórico a pé; teleférico ou trilha ao Cerro San Bernardo."},
    ],
    atracoes:[
      {n:"Mercado San Miguel", base:"Salta", nota:"Mercado popular; empanadas, tamales e produtos andinos.", lat:-24.7905, lng:-65.4106},
      {n:"Museo MAAM", base:"Salta", nota:"As múmias incas de Llullaillaco, junto à Plaza 9 de Julio.", lat:-24.7889, lng:-65.4108},
      {n:"Teleférico San Bernardo", base:"Salta", nota:"Mirante sobre 'Salta la linda' e o vale."},
      {n:"Plaza 9 de Julio & Cabildo", base:"Salta", nota:"Praça central colonial, catedral e museus."},
      {n:"Salta", base:"Salta", nota:"'Salta la linda'; capital colonial do noroeste argentino.", lat:-24.7821, lng:-65.4232},
      {n:"Cafayate", base:"Salta", nota:"Vinhedos de altitude do torrontés; Quebrada de las Conchas.", lat:-26.0731, lng:-65.9761},
      {n:"Purmamarca", base:"Purmamarca", nota:"Cerro de los Siete Colores; vila andina na Quebrada.", lat:-23.745, lng:-65.5},
      {n:"Salinas Grandes", base:"Purmamarca", nota:"Imenso salar branco a 3.400 m, entre Salta e Jujuy.", lat:-23.6333, lng:-65.9},
    ],
    museus:[
      {n:"MAAM – Arqueología de Alta Montaña", base:"Salta", nota:"As múmias incas do vulcão Llullaillaco; imperdível."},
      {n:"Museo Güemes", base:"Salta", nota:"Vida do herói gaucho Martín Miguel de Güemes."},
      {n:"Museo Pajcha", base:"Salta", nota:"Arte étnico e popular latino-americano."},
    ],
    parques:[
      {n:"Quebrada de Humahuaca (UNESCO)", base:"Purmamarca", nota:"Vale colorido andino; Cerro de los Siete Colores."},
      {n:"Salinas Grandes", base:"Purmamarca", nota:"Salar branco a 3.400 m, na Cuesta de Lipán."},
      {n:"Quebrada de las Conchas", base:"Cafayate", nota:"Formações rochosas vermelhas (Garganta del Diablo)."},
      {n:"Bodegas de Cafayate", base:"Cafayate", nota:"Vinhedos de altitude do torrontés; visita e degustação."},
      {n:"Pucará de Tilcara", base:"Tilcara", nota:"Fortaleza pré-inca restaurada sobre a Quebrada."},
      {n:"Cerro 14 Colores (Hornocal)", base:"Humahuaca", nota:"Serra multicolorida a 4.350 m; mirante espetacular."},
    ],
    campings:[
      {n:"Campings de Cafayate", base:"Cafayate", nota:"Entre vinhedos; clima seco e ameno.", lat:-26.0731, lng:-65.9761},
      {n:"Camping em Tilcara", base:"Tilcara", nota:"Base cultural da Quebrada; frio à noite.", lat:-23.5772, lng:-65.3939},
    ],
    pernoite:[
      {n:"Postos da RN9 / RN68", base:"Salta/Jujuy", nota:"Pátios nas rotas do NOA; abasteça antes da puna.", lat:-24.7821, lng:-65.4232},
      {n:"Estac. de Purmamarca", base:"Purmamarca", nota:"Base para Salinas Grandes; chegue cedo.", lat:-23.745, lng:-65.5},
    ],
    comer:[
      {n:"Empanadas salteñas", base:"Salta", nota:"Empanadas, locro e humita; peñas folclóricas à noite."},
      {n:"Cozinha andina de Jujuy", base:"Tilcara", nota:"Llama, quinoa e tamales na Quebrada."},
      {n:"Vinhos torrontés", base:"Cafayate", nota:"Bodegas com almoço harmonizado e sorvete de vinho."},
    ],
    igrejas:[
      {n:"Catedral de Salta", base:"Salta", nota:"Santuário do Señor y la Virgen del Milagro, no centro."},
      {n:"Igreja de Uquía", base:"Uquía", nota:"'Anjos arcabuzeiros' da escola cuzquenha, na Quebrada."},
    ],
    eventos:[
      {n:"Fiesta del Milagro", base:"Salta", nota:"Set; uma das maiores manifestações religiosas do norte."},
      {n:"Carnaval da Quebrada", base:"Tilcara", nota:"Fev; carnaval andino com comparsas e o desentierro."},
    ],
  },
  "cl-atacama": {
    atracoes:[
      {n:"Calama", base:"Calama", nota:"Porta de entrada do Atacama; aeroporto e apoio.", lat:-22.4667, lng:-68.9333},
      {n:"San Pedro de Atacama", base:"San Pedro de Atacama", nota:"Oásis-base dos passeios do deserto.", lat:-22.9087, lng:-68.1997},
      {n:"Valle de la Luna", base:"San Pedro", nota:"Dunas e formações de sal; pôr do sol icônico do Atacama.", lat:-22.9167, lng:-68.2833},
      {n:"Salar de Atacama (Chaxa)", base:"San Pedro", nota:"Laguna Chaxa; flamingos rosa na Reserva Los Flamencos.", lat:-23.2833, lng:-68.1667},
      {n:"Gêiseres del Tatio", base:"Tatio", nota:"Campo de gêiseres a 4.300 m; visita ao amanhecer (frio extremo).", lat:-22.3333, lng:-68.0167},
      {n:"Lagunas Miscanti y Miñiques", base:"Tatio", nota:"Lagunas altiplânicas de azul profundo a 4.100 m.", lat:-23.7167, lng:-67.8667},
      {n:"Piedras Rojas", base:"Tatio", nota:"Rochas vermelhas do Salar de Aguas Calientes.", lat:-23.65, lng:-67.65},
    ],
    museus:[
      {n:"Museo del Meteorito", base:"San Pedro de Atacama", nota:"Coleção de meteoritos do deserto mais árido do mundo."},
      {n:"Museo Gustavo Le Paige", base:"San Pedro de Atacama", nota:"Arqueologia atacamenha; cultura andina pré-colombiana."},
    ],
    parques:[
      {n:"Valle de la Luna", base:"San Pedro de Atacama", nota:"Cordillera de la Sal; dunas e pôr do sol icônico."},
      {n:"Reserva Los Flamencos (Chaxa)", base:"San Pedro de Atacama", nota:"Flamingos rosa no Salar de Atacama."},
      {n:"Gêiseres del Tatio", base:"San Pedro de Atacama", nota:"Campo de gêiseres a 4.300 m; visita ao amanhecer."},
      {n:"Lagunas Miscanti y Miñiques", base:"Socaire", nota:"Lagunas altiplânicas de azul intenso a 4.100 m."},
      {n:"Piedras Rojas", base:"Socaire", nota:"Rochas vermelhas do Salar de Aguas Calientes."},
      {n:"Lagunas Escondidas de Baltinache", base:"San Pedro de Atacama", nota:"Lagoas turquesa de água salgada; flutuação."},
      {n:"Valle del Arcoiris", base:"San Pedro de Atacama", nota:"Montanhas multicoloridas e petróglifos de Hierbas Buenas."},
      {n:"Pukará de Quitor", base:"San Pedro de Atacama", nota:"Fortaleza pré-colombiana de pedra sobre o oásis."},
      {n:"Termas de Puritama", base:"San Pedro de Atacama", nota:"Piscinas termais naturais em cânion, a 3.500 m."},
      {n:"Ojos del Salar & Laguna Cejar", base:"San Pedro de Atacama", nota:"Poços gêmeos e laguna de flutuação no salar."},
      {n:"Valle de la Muerte (sandboard)", base:"San Pedro de Atacama", nota:"Dunas para sandboard ao pôr do sol, na Cordillera de la Sal."},
    ],
    campings:[
      {n:"Campings de San Pedro", base:"San Pedro de Atacama", nota:"Base dos passeios; noites frias e secas.", lat:-22.9087, lng:-68.1997},
      {n:"Áreas em Calama", base:"Calama", nota:"Apoio na entrada do deserto; estrutura urbana.", lat:-22.4667, lng:-68.9333},
      {n:"Camping Los Abuelos", base:"San Pedro de Atacama", nota:"Camping consagrado na vila; base dos passeios do deserto.", lat:-22.9087, lng:-68.1997},
      {n:"Camping Mistico", base:"San Pedro de Atacama", nota:"Estrutura para barraca e motorhome em San Pedro.", lat:-22.9087, lng:-68.1997},
    ],
    pernoite:[
      {n:"Postos de Calama / R23", base:"Calama", nota:"Último apoio robusto antes de San Pedro.", lat:-22.4667, lng:-68.9333},
      {n:"Estac. dos tours", base:"San Pedro de Atacama", nota:"Passeios com horário; reserve com operadora.", lat:-22.9087, lng:-68.1997},
    ],
    comer:[
      {n:"Adobe & Barros", base:"San Pedro de Atacama", nota:"Clássicos da rua Caracoles; fogueira, carnes e pisco sour."},
      {n:"Baltinache / Las Delicias", base:"San Pedro de Atacama", nota:"Cozinha atacamenha com quinoa, llama e legumes do oasis."},
      {n:"Cervecería St. Peter", base:"San Pedro de Atacama", nota:"Cerveja artesanal do deserto e petiscos no oasis."},
      {n:"Empanadas & cafés", base:"San Pedro de Atacama", nota:"Empanadas chilenas e cafés da rua principal."},
    ],
    igrejas:[
      {n:"Iglesia de San Pedro", base:"San Pedro de Atacama", nota:"Igreja colonial de adobe (séc. 17), na praça central."},
    ],
    eventos:[
      {n:"Fiesta de San Pedro y San Pablo", base:"San Pedro de Atacama", nota:"29 jun; festa patronal com bailes andinos."},
      {n:"Carnaval Andino", base:"San Pedro de Atacama", nota:"Fev–mar; música e danças do altiplano."},
    ],
  },
  "ec-andes-vulcoes": {
    transporte:[
      {cidade:"Quito", sistema:"Metrô de Quito (Línea 1) + Trolebús/Ecovía (BRT)", passe:"Tarjeta Metro de Quito", app:"Metro de Quito", dica:"Centro Histórico a pé; TelefériQo e Mitad del Mundo por táxi/app."},
    ],
    atracoes:[
      {n:"Centro Histórico de Quito", base:"Quito", nota:"O maior e mais preservado das Américas (UNESCO). Metrô: est. San Francisco (L1)"},
      {n:"La Ronda", base:"Quito", nota:"Ruela colonial de bares, música e artesãos. Metrô: est. San Francisco (L1)"},
      {n:"El Panecillo & TelefériQo", base:"Quito", nota:"Mirantes da cidade e subida ao Pichincha (4.100 m). Metrô: est. La Magdalena (+ táxi)"},
      {n:"Mitad del Mundo", base:"Quito", nota:"Monumento sobre a linha do Equador."},
      {n:"Quito", base:"Quito", nota:"Capital colonial (UNESCO); centro histórico e Pichincha.", lat:-0.1807, lng:-78.4678},
      {n:"Mitad del Mundo", base:"Quito", nota:"Monumento sobre a linha do Equador, ao norte de Quito.", lat:-0.0022, lng:-78.4558},
      {n:"Cotopaxi", base:"Quito", nota:"Vulcão nevado simétrico; trilhas e a Laguna Limpiopungo.", lat:-0.68, lng:-78.4378},
      {n:"Laguna Quilotoa", base:"Otavalo", nota:"Cratera vulcânica com laguna turquesa a 3.900 m.", lat:-0.8589, lng:-78.9036},
      {n:"Cuenca", base:"Cuenca", nota:"Cidade colonial (UNESCO); catedrais e o rio Tomebamba.", lat:-2.9006, lng:-79.0045},
    ],
    museus:[
      {n:"Casa del Alabado", base:"Quito", nota:"Arte pré-colombiano em casarão colonial; um dos melhores."},
      {n:"Museo Pumapungo", base:"Cuenca", nota:"Arqueologia cañari-inca e etnografia equatoriana."},
      {n:"Centro Histórico / Compañía", base:"Quito", nota:"Igrejas barrocas douradas no centro (UNESCO)."},
    ],
    parques:[
      {n:"P. N. Cotopaxi", base:"Quito", nota:"Vulcão nevado simétrico; Laguna Limpiopungo e trilhas."},
      {n:"Laguna Quilotoa", base:"Latacunga", nota:"Cratera vulcânica com laguna turquesa a 3.900 m."},
      {n:"Mitad del Mundo", base:"Quito", nota:"Monumento sobre a linha do Equador, ao norte da capital."},
      {n:"TelefériQo (Pichincha)", base:"Quito", nota:"Teleférico a 4.100 m com vista dos vulcões."},
      {n:"P. N. Cajas", base:"Cuenca", nota:"Páramo de lagunas glaciais a caminho da costa."},
      {n:"Mercado de Otavalo", base:"Otavalo", nota:"Maior mercado indígena dos Andes; têxteis e artesanato."},
    ],
    campings:[
      {n:"Refúgios do Cotopaxi", base:"Cotopaxi", nota:"Abrigos no parque; frio e altitude.", lat:-0.68, lng:-78.4378},
      {n:"Hospedagens de borda (Quilotoa)", base:"Quilotoa", nota:"Pousadas simples na cratera; muito frio à noite.", lat:-0.8589, lng:-78.9036},
    ],
    pernoite:[
      {n:"Base em Quito", base:"Quito", nota:"Aclimate-se a 2.850 m antes das trilhas.", lat:-0.1807, lng:-78.4678},
      {n:"Postos da Panamericana", base:"Serra EC", nota:"Apoio na rota dos vulcões; abasteça nas cidades."},
    ],
    comer:[
      {n:"Locro de papa & fritada", base:"Quito", nota:"Cozinha serrana; canelazo para o frio."},
      {n:"Hornado & cuy", base:"Cuenca", nota:"Porco assado e cuy; cafés de origem."},
      {n:"Mote e humitas", base:"Otavalo", nota:"Comida andina nos mercados."},
    ],
    igrejas:[
      {n:"Iglesia de la Compañía", base:"Quito", nota:"Barroco dourado, joia do centro histórico (UNESCO)."},
      {n:"Catedral Nova de Cuenca", base:"Cuenca", nota:"Cúpulas azuis, símbolo da cidade colonial."},
    ],
    eventos:[
      {n:"Inti Raymi", base:"Otavalo", nota:"Jun; festa do sol e da colheita nas comunidades indígenas."},
      {n:"Mama Negra", base:"Latacunga", nota:"Set–nov; festa mestiça emblemática da serra central."},
    ],
  },
  "co-cafe-caribe": {
    transporte:[
      {cidade:"Bogotá", sistema:"TransMilenio (BRT) + SITP (ônibus) — metrô em obras", passe:"Tarjeta Tu Llave", app:"TransMilenio · Moovit", dica:"Monserrate por funicular/teleférico. Trânsito intenso — prefira os corredores do BRT."},
      {cidade:"Medellín", sistema:"Metrô de Medellín + Metrocable (teleférico) + tranvía", passe:"Tarjeta Cívica", app:"Metro de Medellín", dica:"Comuna 13 pela linha B até San Javier; Parque Arví pela linha K + Metrocable."},
    ],
    atracoes:[
      {n:"Cerro de Monserrate", base:"Bogotá", nota:"Mirante a 3.150 m sobre Bogotá; funicular e teleférico. BRT: est. Universidades / Las Aguas"},
      {n:"La Candelaria & Plaza Bolívar", base:"Bogotá", nota:"Centro histórico colonial, museus e street art. BRT: est. Las Aguas / Museo del Oro"},
      {n:"Comuna 13", base:"Medellín", nota:"Escadas rolantes, grafites e a virada social da cidade. Metrô: est. San Javier (linha B)"},
      {n:"Pueblito Paisa & Plaza Botero", base:"Medellín", nota:"Vila típica no Cerro Nutibara e as esculturas de Botero. Metrô: est. Parque Berrío (centro)"},
      {n:"Ciudad Amurallada", base:"Cartagena", nota:"Muralhas, Getsemaní e o casario colorido (UNESCO)."},
      {n:"Bogotá", base:"Bogotá", nota:"Capital andina a 2.600 m; La Candelaria e Monserrate.", lat:4.711, lng:-74.0721},
      {n:"Zipaquirá", base:"Bogotá", nota:"Catedral de Sal subterrânea, esculpida em mina.", lat:5.0221, lng:-74.0044},
      {n:"Salento", base:"Salento", nota:"Vila colorida do Eixo Cafeeiro; porta do Valle de Cocora.", lat:4.6378, lng:-75.5708},
      {n:"Valle de Cocora", base:"Bogotá", nota:"Vale das palmeiras-de-cera gigantes; jipes Willys de Salento.", lat:4.6378, lng:-75.4878},
      {n:"Medellín", base:"Medellín", nota:"'Cidade da eterna primavera'; Comuna 13 e metrocable.", lat:6.2442, lng:-75.5812},
      {n:"Guatapé", base:"Medellín", nota:"Vila colorida e a Piedra del Peñol (740 degraus).", lat:6.2336, lng:-75.1608},
      {n:"Cartagena das Índias", base:"Cartagena das Índias", nota:"Cidade colonial amuralhada do Caribe (UNESCO).", lat:10.391, lng:-75.4794},
    ],
    museus:[
      {n:"Museo del Oro", base:"Bogotá", nota:"Maior acervo de ourivesaria pré-colombiana do mundo."},
      {n:"Museo Botero", base:"Bogotá", nota:"Doação de Fernando Botero; arte universal e própria."},
      {n:"Museo de Antioquia", base:"Medellín", nota:"Grande acervo de Botero, na Plaza Botero."},
      {n:"Palacio de la Inquisición", base:"Cartagena", nota:"História colonial e da Inquisição, na cidade murada."},
    ],
    parques:[
      {n:"Valle de Cocora", base:"Salento", nota:"Vale das palmeiras-de-cera gigantes; jipes Willys."},
      {n:"Catedral de Sal de Zipaquirá", base:"Bogotá", nota:"Catedral subterrânea esculpida em mina de sal."},
      {n:"Cerro Monserrate", base:"Bogotá", nota:"Mirante a 3.150 m sobre a capital; funicular e teleférico."},
      {n:"Piedra del Peñol", base:"Guatapé", nota:"Monólito de 740 degraus com vista dos lagos."},
      {n:"Comuna 13", base:"Medellín", nota:"Grafites, escadas rolantes e a história da transformação."},
      {n:"Islas del Rosario", base:"Cartagena", nota:"Arquipélago caribenho de praias e mergulho."},
      {n:"P. N. Tayrona", base:"Santa Marta", nota:"Praias de selva e mar do Caribe; Cabo San Juan."},
      {n:"Ciudad Perdida (Teyuna)", base:"Santa Marta", nota:"Cidade perdida tairona; trekking de 4 dias na Serra Nevada."},
      {n:"Caño Cristales", base:"La Macarena", nota:"'Rio das cinco cores' (jul–nov); acesso fly-in."},
      {n:"Barichara & Camino Real", base:"Barichara", nota:"'A cidade mais bela da Colômbia'; ruínas de pedra e trilha a Guane."},
      {n:"Cañón del Chicamocha", base:"San Gil", nota:"Tirolesa, teleférico e rafting na capital da aventura."},
      {n:"Fazendas de café (Eje Cafetero)", base:"Salento", nota:"Tour do grão à xícara nas fincas cafeeiras."},
    ],
    campings:[
      {n:"Fincas cafeeiras", base:"Salento", nota:"Hospedagem em fazendas de café do eixo.", lat:4.6378, lng:-75.5708},
      {n:"Campings de Guatapé", base:"Guatapé", nota:"À beira do lago; clima ameno.", lat:6.2336, lng:-75.1608},
    ],
    pernoite:[
      {n:"Base no Eje Cafetero", base:"Salento/Filandia", nota:"Vilas coloridas; chegue cedo ao Cocora.", lat:4.6378, lng:-75.5708},
      {n:"Voo interno a Cartagena", base:"Medellín", nota:"Trecho longo ao Caribe; muitos fazem de avião.", lat:6.2442, lng:-75.5812},
    ],
    comer:[
      {n:"Bandeja paisa", base:"Medellín", nota:"Prato paisa fartíssimo; arepas e arroz."},
      {n:"Ajiaco bogotano", base:"Bogotá", nota:"Sopa de batatas e frango com guascas."},
      {n:"Ceviche & arepa de huevo", base:"Cartagena", nota:"Frutos do mar caribenhos; limonada de coco."},
      {n:"Cafés de especialidade", base:"Salento", nota:"Café colombiano do grão à xícara nas fincas do eixo."},
      {n:"Andrés Carne de Res", base:"Bogotá", nota:"Restaurante-festa icônico em Chía; carnes e rumba."},
    ],
    igrejas:[
      {n:"Igreja de San Pedro Claver", base:"Cartagena", nota:"Templo colonial na cidade amuralhada do Caribe."},
      {n:"Catedral Primada", base:"Bogotá", nota:"Na Plaza de Bolívar, coração de La Candelaria."},
    ],
    eventos:[
      {n:"Feria de las Flores", base:"Medellín", nota:"Ago; desfile dos silleteros, a maior festa da cidade."},
      {n:"Carnaval de Barranquilla", base:"Barranquilla (Caribe)", nota:"Fev–mar; 2º maior carnaval do mundo (UNESCO)."},
    ],
  },
  "co-caribe-guajira": {
    transporte:[
      {cidade:"Cartagena", sistema:"Centro a pé + Transcaribe (BRT) e táxis", passe:"Tarjeta Transcaribe", app:"Moovit", dica:"Ciudad Amurallada e Getsemaní a pé; táxi para Bocagrande e Castillo (combine o preço antes)."},
    ],
    atracoes:[
      {n:"Getsemaní & Ciudad Amurallada", base:"Cartagena", nota:"Bairro boêmio, murais e a cidade colonial murada."},
      {n:"Las Bóvedas & Castillo San Felipe", base:"Cartagena", nota:"Arcos coloniais e a maior fortaleza espanhola."},
      {n:"Centro Histórico & El Rodadero", base:"Santa Marta", nota:"Casario colonial e a praia urbana mais famosa."},
      {n:"Cartagena", base:"Cartagena", nota:"Cidade amuralhada do Caribe; Getsemaní e o Castillo San Felipe.", lat:10.3912, lng:-75.4819},
      {n:"Islas del Rosario", base:"Cartagena", nota:"Arquipélago de coral; praias e mergulho a 1h de barco.", lat:10.1717, lng:-75.7456},
      {n:"Parque Tayrona", base:"Cartagena", nota:"Praias de selva e mar do Caribe; Cabo San Juan.", lat:11.3097, lng:-74.0297},
      {n:"Ciudad Perdida (Teyuna)", base:"Ciudad Perdida", nota:"Teyuna; trekking de 4 dias na Serra Nevada, só com guia.", lat:11.0383, lng:-73.9258},
      {n:"Cabo de la Vela", base:"Ciudad Perdida", nota:"Dunas e mar da Média Guajira; pôr do sol no Pilón de Azúcar.", lat:12.2186, lng:-72.1631},
      {n:"Punta Gallinas", base:"Punta Gallinas", nota:"Extremo norte da América do Sul; dunas e mar wayúu (4x4).", lat:12.4622, lng:-71.6644},
    ],
    parques:[
      {n:"Cidade amuralhada & Getsemaní", base:"Cartagena", nota:"Centro colonial (UNESCO); murais e vida noturna."},
      {n:"Castillo San Felipe de Barajas", base:"Cartagena", nota:"A maior fortaleza espanhola das Américas."},
      {n:"Islas del Rosario", base:"Cartagena", nota:"Arquipélago de coral; praias e mergulho a 1h de barco."},
      {n:"P. N. Tayrona (Cabo San Juan)", base:"Santa Marta", nota:"Praias de selva e mar do Caribe; trilhas e camping."},
      {n:"Ciudad Perdida (Teyuna)", base:"Santa Marta", nota:"Trekking de 4 dias à cidade tairona na Serra Nevada."},
      {n:"Cabo de la Vela", base:"La Guajira", nota:"Dunas e mar; Pilón de Azúcar e Ojo del Agua (wayúu)."},
      {n:"Punta Gallinas", base:"La Guajira", nota:"Extremo norte do continente; dunas de Taroa no mar."},
      {n:"Minca", base:"Santa Marta", nota:"Vila de montanha; cachoeiras, café e cacau na Serra Nevada."},
    ],
    campings:[
      {n:"Camping no Tayrona (Cabo San Juan)", base:"Parque Tayrona", nota:"Redes e barracas com vista do mar; chegue cedo.", lat:11.3097, lng:-74.0297},
      {n:"Rancharias wayúu (chinchorros)", base:"La Guajira", nota:"Redes em pousadas comunitárias do deserto."},
    ],
    pernoite:[
      {n:"4x4 com guia (Alta Guajira)", base:"La Guajira", nota:"Cabo de la Vela e Punta Gallinas só em tração e com guia."},
      {n:"Base em Santa Marta", base:"Santa Marta", nota:"Apoio ao Tayrona, Minca e ao trek da Ciudad Perdida.", lat:11.2408, lng:-74.199},
    ],
    comer:[
      {n:"La Cevichería", base:"Cartagena", nota:"Ceviches caribenhos famosos em Getsemaní."},
      {n:"Arepa de huevo & frituras", base:"Cartagena", nota:"Comida de rua do Caribe; limonada de coco."},
      {n:"Frutos do mar de Taganga", base:"Santa Marta", nota:"Peixe fresco em vila de pescadores perto do Tayrona."},
      {n:"Friche & cabrito wayúu", base:"La Guajira", nota:"Cabrito guisado e frutos do mar do deserto."},
    ],
    museus:[
      {n:"Museo del Oro Zenú", base:"Cartagena", nota:"Ourivesaria pré-colombiana zenú, na cidade amuralhada."},
      {n:"Museo Tairona / Casa de la Aduana", base:"Santa Marta", nota:"Cultura tairona e arqueologia da Serra Nevada."},
      {n:"Quinta de San Pedro Alejandrino", base:"Santa Marta", nota:"Hacienda onde morreu Simón Bolívar; museu e jardins."},
    ],
    igrejas:[
      {n:"Iglesia de San Pedro Claver", base:"Cartagena", nota:"Templo colonial na cidade amuralhada do Caribe."},
      {n:"Catedral de Santa Marta", base:"Santa Marta", nota:"Uma das mais antigas das Américas, no centro histórico."},
    ],
    eventos:[
      {n:"Festival de la Leyenda Vallenata", base:"Valledupar", nota:"Abr; a maior festa do vallenato (Patrimônio UNESCO)."},
      {n:"Carnaval de Barranquilla", base:"Barranquilla", nota:"Fev–mar; 2º maior carnaval do mundo (UNESCO)."},
    ],
  },
  "ve-gran-sabana": {
    atracoes:[
      {n:"Quebrada de Jaspe", base:"Santa Elena", nota:"Riacho que corre sobre leito de jaspe vermelho.", lat:4.8589, lng:-61.0467},
      {n:"Salto Kamá", base:"Santa Elena", nota:"Queda de ~50 m em meio à savana da Gran Sabana.", lat:5.15, lng:-61.1},
      {n:"Monte Roraima", base:"Monte Roraima", nota:"Tepui-ícone; trekking de 6 dias com guia pemón desde Paraitepui.", lat:5.1431, lng:-60.7625},
      {n:"Salto Ángel", base:"Monte Roraima", nota:"Maior queda d'água do mundo (979 m); acesso fly-in via Canaima.", lat:5.9701, lng:-62.5362},
    ],
    museus:[
      {n:"Centro de Cultura Indígena", base:"Santa Elena de Uairén", nota:"Cultura pemón e artesanato da Gran Sabana."},
    ],
    parques:[
      {n:"Monte Roraima", base:"Paraitepui", nota:"Tepui de 2.810 m; trekking de 6 dias com guia pemón."},
      {n:"Salto Ángel (Canaima)", base:"Canaima", nota:"Maior queda d'água do mundo (979 m); acesso fly-in."},
      {n:"Laguna de Canaima & Salto Sapo", base:"Canaima", nota:"Lagoa rosada com saltos; caminhada por trás da cortina d'água."},
      {n:"Quebrada de Jaspe", base:"Santa Elena de Uairén", nota:"Riacho sobre leito de jaspe vermelho, na Troncal 10."},
      {n:"Salto Kamá", base:"Gran Sabana", nota:"Queda de ~50 m em meio à savana; mirante e camping."},
      {n:"Salto Aponwao", base:"Gran Sabana", nota:"Uma das maiores quedas da região (105 m); passeio pemón."},
      {n:"Pozo Esmeralda & Suápiri", base:"Gran Sabana", nota:"Poços de banho de água esverdeada à beira da Troncal 10."},
      {n:"Quebrada Pacheco", base:"Gran Sabana", nota:"Cachoeira e poços à beira da estrada da savana."},
    ],
    campings:[
      {n:"Acampamento no Roraima", base:"Monte Roraima", nota:"Acampamentos no platô; só com expedição guiada.", lat:5.1431, lng:-60.7625},
      {n:"Campings da Gran Sabana", base:"Santa Elena de Uairén", nota:"Áreas junto aos saltos; estrutura simples.", lat:4.6028, lng:-61.1108},
    ],
    pernoite:[
      {n:"Base em Santa Elena", base:"Santa Elena de Uairén", nota:"Combustível, provisões e dinheiro em espécie antes de seguir.", lat:4.6028, lng:-61.1108},
      {n:"Pousadas pemón", base:"Gran Sabana", nota:"Hospedagem comunitária ao longo da Troncal 10."},
    ],
    comer:[
      {n:"Cozinha pemón", base:"Gran Sabana", nota:"Peixe de rio, mandioca e casabe das comunidades."},
      {n:"Arepas & cachapas", base:"Santa Elena de Uairén", nota:"Comida venezuelana nas pousadas e mercados."},
      {n:"Tasca / parrillas", base:"Santa Elena de Uairén", nota:"Carnes na brasa e cerveja na cidade-base da fronteira."},
    ],
    eventos:[
      {n:"Expedições ao Roraima", base:"Paraitepui", nota:"Saídas de trekking de 6 dias com guias credenciados."},
      {n:"Sobrevoo do Salto Ángel", base:"Canaima", nota:"Voos panorâmicos e navegação na época de cheia (jun–nov)."},
    ],
  },
  "ve-andes-llanos": {
    transporte:[
      {cidade:"Mérida", sistema:"Trolebús (Trolmérida) + teleférico Mukumbarí", passe:"Dinheiro vivo (bolívares)", app:"—", dica:"Centro a pé; vá cedo ao teleférico (o mais alto do mundo)."},
    ],
    atracoes:[
      {n:"Plaza Bolívar & Catedral", base:"Mérida", nota:"Coração da capital andina venezuelana.", lat:8.5938, lng:-71.1448},
      {n:"Mercado Principal", base:"Mérida", nota:"Artesanato, queijos e doces andinos.", lat:8.5897, lng:-71.1561},
      {n:"Mérida", base:"Mérida", nota:"Capital andina; base do teleférico Mukumbarí.", lat:8.5899, lng:-71.1586},
      {n:"Mukumbarí (teleférico)", base:"Mérida", nota:"Teleférico mais alto e longo do mundo (4.765 m); vista do Pico Bolívar.", lat:8.5333, lng:-71.05},
      {n:"Laguna de Mucubají", base:"Mérida", nota:"Lagoa glacial no páramo de frailejones, a 3.600 m.", lat:8.7972, lng:-70.8222},
      {n:"Hatos de Apure", base:"Barinas", nota:"Safári de fauna dos Llanos; capivaras, jacarés e aves.", lat:7.89, lng:-68.8},
    ],
    parques:[
      {n:"Mukumbarí (teleférico)", base:"Mérida", nota:"O mais alto e longo do mundo; sobe ao Pico Espejo (4.765 m)."},
      {n:"Sierra Nevada de Mérida", base:"Mérida", nota:"Pico Bolívar (5.007 m) e trilhas de alta montanha."},
      {n:"Laguna de Mucubají", base:"Apartaderos", nota:"Lagoa glacial no páramo de frailejones, a 3.600 m."},
      {n:"Pueblos del Páramo", base:"Mérida", nota:"Los Nevados, Jají e Apartaderos; aldeias andinas de pedra."},
      {n:"Hatos de Apure (safári)", base:"Los Llanos", nota:"Capivaras, jacarés, anacondas e centenas de aves."},
      {n:"Río Catatumbo (relâmpago)", base:"Zulia", nota:"O 'relámpago del Catatumbo'; tempestades quase perpétuas."},
    ],
    campings:[
      {n:"Refúgios do páramo", base:"Mérida", nota:"Abrigos de montanha; frio intenso à noite.", lat:8.5897, lng:-71.1561},
      {n:"Hato com pensão completa", base:"Los Llanos", nota:"Fazenda-reserva com safáris e refeições inclusas."},
    ],
    pernoite:[
      {n:"Base em Mérida", base:"Mérida", nota:"Cidade universitária; aclimate-se antes do teleférico.", lat:8.5897, lng:-71.1561},
      {n:"Estradas remotas aos Llanos", base:"Barinas", nota:"Abasteça e leve provisões; apoio escasso na savana.", lat:8.6226, lng:-70.2073},
    ],
    comer:[
      {n:"Pisca andina & trucha", base:"Mérida", nota:"Sopa andina e truta; arepas de trigo e chocolate quente."},
      {n:"Heladería Coromoto", base:"Mérida", nota:"Recordista de sabores de sorvete (Guinness); clássico local."},
      {n:"Carne en vara llanera", base:"Los Llanos", nota:"Carne assada na estaca; pisillo e queijo llanero."},
    ],
    museus:[
      {n:"Observatório CIDA", base:"Apartaderos", nota:"Centro de astronomia nos Andes; céus límpidos de altitude."},
      {n:"Museo de Arte Moderno", base:"Mérida", nota:"Arte venezuelana no centro da cidade andina."},
    ],
    igrejas:[
      {n:"Catedral de Mérida", base:"Mérida", nota:"Na Plaza Bolívar, coração da capital andina."},
    ],
    eventos:[
      {n:"Feria del Sol", base:"Mérida", nota:"Fev; touradas, música e a maior festa da cidade."},
      {n:"Joropo llanero", base:"Los Llanos", nota:"Música e dança típicas da savana; arpa, cuatro e maracas."},
    ],
  },
  "ar-cuyo-mendoza": {
    transporte:[
      {cidade:"Mendoza", sistema:"Metrotranvía (1 linha) + ônibus (Red Bus)", passe:"Tarjeta SUBE / Red Bus", app:"—", dica:"Centro e Parque San Martín a pé ou de bici; bodegas por tour, táxi ou bike."},
    ],
    atracoes:[
      {n:"Plaza Independencia", base:"Mendoza", nota:"Praça central com feira de artesãos e museu subterrâneo.", lat:-32.8895, lng:-68.8458},
      {n:"Cerro de la Gloria", base:"Mendoza", nota:"Monumento ao Exército dos Andes, no Parque San Martín.", lat:-32.893, lng:-68.876},
      {n:"Parque General San Martín", base:"Mendoza", nota:"Grande parque urbano e o Cerro de la Gloria."},
      {n:"Peatonal Sarmiento & Plaza Independencia", base:"Mendoza", nota:"Calçadão de bares, vinho e vida mendocina."},
      {n:"Mendoza", base:"Mendoza", nota:"Capital do vinho argentino; cidade-jardim arborizada.", lat:-32.8893, lng:-68.8483},
      {n:"Maipú", base:"Mendoza", nota:"Bodegas históricas e olivais; caminhos do vinho de bici.", lat:-32.9833, lng:-68.7833},
      {n:"Luján de Cuyo", base:"Mendoza", nota:"Berço do Malbec argentino; primeira zona D.O.C.", lat:-33.0386, lng:-68.88},
      {n:"Valle de Uco", base:"Mendoza", nota:"Vinhedos premiados de altitude aos pés da cordilheira.", lat:-33.6833, lng:-69.15},
      {n:"Ponte do Inca", base:"Uspallata", nota:"Formação natural ocre sobre o rio Las Cuevas.", lat:-32.8236, lng:-69.9106},
      {n:"Aconcágua (Horcones)", base:"Uspallata", nota:"O pico mais alto das Américas (6.961 m); mirante de Horcones.", lat:-32.8167, lng:-69.95},
    ],
    museus:[
      {n:"Museo del Vino (Bodega La Rural)", base:"Maipú", nota:"História da vitivinicultura mendocina; um dos melhores."},
      {n:"Museo Emiliano Guiñazú (Fader)", base:"Mendoza", nota:"Bellas artes em antiga residência com obras de Fader."},
      {n:"Museo del Área Fundacional", base:"Mendoza", nota:"Ruínas e história da Mendoza colonial."},
    ],
    parques:[
      {n:"P. Provincial Aconcágua", base:"Uspallata", nota:"O pico mais alto das Américas (6.961 m); mirante de Horcones."},
      {n:"Ponte do Inca", base:"Uspallata", nota:"Formação natural ocre sobre o rio Las Cuevas."},
      {n:"Caminhos do Vinho (Maipú)", base:"Mendoza", nota:"Bodegas históricas e olivais; tour de bicicleta."},
      {n:"Valle de Uco", base:"Tunuyán", nota:"Vinícolas premiadas de altitude aos pés dos Andes."},
      {n:"Cristo Redentor dos Andes", base:"Las Cuevas", nota:"Monumento na fronteira com o Chile, a 3.800 m."},
      {n:"Cerro de la Gloria", base:"Mendoza", nota:"Parque San Martín e mirante sobre a cidade-jardim."},
    ],
    campings:[
      {n:"Camping de Uspallata", base:"Uspallata", nota:"Base de montanha na RN7; frio à noite.", lat:-32.5917, lng:-69.3469},
      {n:"Campings do Potrerillos", base:"Potrerillos", nota:"À beira do dique, entre Mendoza e a cordilheira."},
      {n:"Camping Suizo", base:"El Challao (Mendoza)", nota:"Arborizado e tradicional, nos arredores da capital do vinho."},
      {n:"Camping ACA Uspallata", base:"Uspallata", nota:"Apoio na alta montanha a caminho do Aconcágua.", lat:-32.5917, lng:-69.3469},
    ],
    pernoite:[
      {n:"Postos da RN7", base:"Mendoza/Uspallata", nota:"Apoio na estrada internacional ao Chile.", lat:-32.8895, lng:-68.8458},
      {n:"Bodegas-hotel", base:"Valle de Uco", nota:"Hospedagem entre vinhedos (reserve com antecedência).", lat:-33.6833, lng:-69.15},
    ],
    comer:[
      {n:"Asado & Malbec", base:"Mendoza", nota:"Parrillas e degustações; a alma mendocina."},
      {n:"Empanadas mendocinas", base:"Mendoza", nota:"Empanadas de carne cortada a faca; azeites de oliva."},
      {n:"Almoços nas bodegas", base:"Valle de Uco", nota:"Menus harmonizados com vista da cordilheira."},
    ],
    eventos:[
      {n:"Fiesta Nacional de la Vendimia", base:"Mendoza", nota:"Mar; a maior festa do vinho da Argentina."},
      {n:"Maratona dos vinhedos", base:"Valle de Uco", nota:"Provas e eventos enoturísticos na época da colheita."},
    ],
  },
  "cl-central-valparaiso": {
    transporte:[
      {cidade:"Santiago", sistema:"Metrô de Santiago + ônibus Red", passe:"Tarjeta bip!", app:"Metro de Santiago · Moovit", dica:"Para Valparaíso, use o Metro Valparaíso (Merval) e os ascensores nos cerros."},
    ],
    atracoes:[
      {n:"Paseo Gervasoni & Atkinson", base:"Valparaíso", nota:"Mirantes dos cerros Concepción/Alegre; casario e murais.", lat:-33.0392, lng:-71.629},
      {n:"Ascensor Concepción", base:"Valparaíso", nota:"O mais antigo funicular da cidade (1883).", lat:-33.0386, lng:-71.63},
      {n:"Cerros Alegre & Concepción", base:"Valparaíso", nota:"Casario colorido, ascensores e murais (UNESCO)."},
      {n:"Cerro San Cristóbal", base:"Santiago", nota:"Mirante e teleférico sobre a capital. Metrô: est. Baquedano (L1/L5)"},
      {n:"Plaza Sotomayor & porto", base:"Valparaíso", nota:"Praça histórica e o porto boêmio do Pacífico."},
      {n:"Santiago", base:"Santiago", nota:"Capital chilena aos pés dos Andes; bairros e mirantes.", lat:-33.4489, lng:-70.6693},
      {n:"Cajón del Maipo", base:"Santiago", nota:"Montanha de Santiago; Embalse El Yeso e termas.", lat:-33.8, lng:-70.0833},
      {n:"Valle del Maipo", base:"Santiago", nota:"Vinícolas premiadas; berço do Carménère chileno.", lat:-33.75, lng:-70.75},
      {n:"Valle de Casablanca", base:"Valparaíso", nota:"Vinhos brancos frescos (Sauvignon Blanc, Chardonnay).", lat:-33.3167, lng:-71.4108},
      {n:"Valparaíso", base:"Valparaíso", nota:"Cidade-porto colorida (UNESCO); cerros, murais e funiculares.", lat:-33.0472, lng:-71.6127},
    ],
    parques:[
      {n:"Cajón del Maipo", base:"Santiago", nota:"Embalse El Yeso turquesa, termas e montanha."},
      {n:"Cerro San Cristóbal", base:"Santiago", nota:"Parque Metropolitano com funicular e mirante da capital."},
      {n:"Vinícolas do Valle del Maipo", base:"Santiago", nota:"Concha y Toro e o berço do Carménère; tours."},
      {n:"Valle de Casablanca", base:"Casablanca", nota:"Rota de vinhos brancos (Sauvignon, Chardonnay)."},
      {n:"Ascensores de Valparaíso", base:"Valparaíso", nota:"Funiculares históricos pelos cerros coloridos."},
      {n:"Jardim Botânico & praias", base:"Viña del Mar", nota:"Cidade-jardim; Reñaca e Concón na costa."},
    ],
    campings:[
      {n:"Campings do Cajón del Maipo", base:"San José de Maipo", nota:"Áreas de montanha junto ao rio Maipo."},
      {n:"Litoral central", base:"Viña del Mar", nota:"Opções costeiras; vento e frio matinal.", lat:-33.0245, lng:-71.5518},
      {n:"Campings do Cajón del Maipo", base:"San José de Maipo", nota:"Áreas à beira do rio Maipo, na montanha perto de Santiago."},
      {n:"Camping en Valparaíso/Con Cón", base:"Concón", nota:"Apoio litorâneo perto de Valparaíso e Viña del Mar."},
    ],
    pernoite:[
      {n:"Autopistas centrais", base:"Santiago", nota:"Boa malha viária; postos completos no vale central.", lat:-33.4489, lng:-70.6693},
      {n:"Cerros de Valparaíso", base:"Valparaíso", nota:"Hospede num cerro (Alegre/Concepción); atenção aos pertences.", lat:-33.0472, lng:-71.6127},
    ],
    comer:[
      {n:"Boragó", base:"Santiago", nota:"Entre os melhores do mundo; cozinha endêmica chilena (reserve)."},
      {n:"Mercado Central & La Vega", base:"Santiago", nota:"Mariscos e a clássica chupe de jaiva; cozinha popular."},
      {n:"Bares de Bellavista / Lastarria", base:"Santiago", nota:"Terremoto, pisco e vida noturna nos bairros boêmios."},
      {n:"Fauna & Espíritu Santo", base:"Valparaíso", nota:"Cozinha com vista dos cerros; pescados e bons drinks."},
      {n:"Chorrillana en J. Cruz", base:"Valparaíso", nota:"O berço da chorrillana, em beco histórico do porto."},
      {n:"Almoços nas vinícolas", base:"Casablanca", nota:"Harmonizações com vinhos brancos."},
    ],
    museus:[
      {n:"Museo a Cielo Abierto", base:"Valparaíso", nota:"Murais pelos cerros Bellavista; arte urbana ao ar livre."},
      {n:"La Sebastiana (Casa de Neruda)", base:"Valparaíso", nota:"Casa-museu do poeta com vista panorâmica da baía."},
      {n:"Museo de Bellas Artes (Baburizza)", base:"Valparaíso", nota:"Palácio art nouveau no Cerro Alegre; pintura chilena."},
      {n:"Museo de la Memoria y los DD.HH.", base:"Santiago", nota:"Memória da ditadura; arquitetura premiada."},
      {n:"Museo Chileno de Arte Precolombino", base:"Santiago", nota:"Um dos melhores acervos pré-colombianos do continente."},
      {n:"Museo Nacional de Bellas Artes", base:"Santiago", nota:"Palácio de belas artes no Parque Forestal."},
    ],
    igrejas:[
      {n:"Catedral Metropolitana", base:"Santiago", nota:"Na Plaza de Armas, centro histórico da capital."},
    ],
    eventos:[
      {n:"Festival de Viña del Mar", base:"Viña del Mar", nota:"Fev; maior festival de música da América Latina."},
      {n:"Año Nuevo en el Mar", base:"Valparaíso", nota:"Réveillon com a maior queima de fogos do país."},
    ],
  },
  "ar-patagonia-chalten": {
    atracoes:[
      {n:"Centro & porto de Ushuaia", base:"Ushuaia", nota:"Cidade mais austral do mundo; museus e o canal.", lat:-54.8019, lng:-68.303},
      {n:"El Calafate", base:"El Calafate", nota:"Base do Parque Los Glaciares; porta do Perito Moreno.", lat:-50.3379, lng:-72.2648},
      {n:"Glaciar Perito Moreno", base:"El Calafate", nota:"Glaciar com passarelas de frente para a parede de gelo.", lat:-50.4953, lng:-73.1378},
      {n:"El Chaltén", base:"El Chaltén", nota:"Capital nacional do trekking; base do Fitz Roy.", lat:-49.3313, lng:-72.8888},
      {n:"Laguna de los Tres", base:"El Chaltén", nota:"Trilha à vista-postal do Monte Fitz Roy.", lat:-49.2725, lng:-72.9939},
      {n:"Ushuaia", base:"Ushuaia", nota:"Cidade mais austral do mundo; Beagle e Tierra del Fuego.", lat:-54.8017, lng:-68.3055},
      {n:"P. N. Tierra del Fuego", base:"Ushuaia", nota:"Bosques, baías e o marco final da Ruta 3.", lat:-54.8333, lng:-68.5667},
    ],
    museus:[
      {n:"Glaciarium", base:"El Calafate", nota:"Museu do gelo patagônico; glaciologia e bar de gelo."},
      {n:"Museo del Fin del Mundo", base:"Ushuaia", nota:"História natural e dos povos fueguinos."},
      {n:"Museo Marítimo y del Presidio", base:"Ushuaia", nota:"No antigo presídio; história maítima e penal."},
    ],
    parques:[
      {n:"Glaciar Perito Moreno", base:"El Calafate", nota:"Passarelas de frente ao gelo; minitrekking opcional."},
      {n:"Laguna de los Tres (Fitz Roy)", base:"El Chaltén", nota:"Trilha à vista-postal do Monte Fitz Roy."},
      {n:"Laguna Torre", base:"El Chaltén", nota:"Trekking ao Cerro Torre e seu glaciar."},
      {n:"P. N. Tierra del Fuego", base:"Ushuaia", nota:"Bosques, baías e o marco final da Ruta 3."},
      {n:"Canal de Beagle", base:"Ushuaia", nota:"Navegação ao farol Les Éclaireurs e ilha dos lobos."},
      {n:"Lago Argentino / Estancia Cristina", base:"El Calafate", nota:"Navegação aos glaciares Upsala e Spegazzini."},
    ],
    campings:[
      {n:"Camping Poincenot", base:"El Chaltén", nota:"Acampamento livre na base do Fitz Roy.", lat:-49.3315, lng:-72.8863},
      {n:"Campings de El Calafate", base:"El Calafate", nota:"Áreas urbanas; vento forte da estepe.", lat:-50.339, lng:-72.275},
      {n:"Camping El Relincho", base:"El Chaltén", nota:"Camping tradicional na vila, base do trekking ao Fitz Roy.", lat:-49.3315, lng:-72.8863},
      {n:"Camping AICA / Municipal", base:"El Calafate", nota:"Áreas para barraca e motorhome perto do centro.", lat:-50.339, lng:-72.275},
      {n:"La Pista del Andino", base:"Ushuaia", nota:"Camping com vista da baía; clássico de overlanders no fim do mundo.", lat:-54.807, lng:-68.307},
    ],
    pernoite:[
      {n:"Ruta 40 / Ruta 3", base:"Patagônia", nota:"Distâncias enormes; abasteça em toda cidade."},
      {n:"Base em El Chaltén", base:"El Chaltén", nota:"Trilhas saem do próprio vilarejo, a pé.", lat:-49.3315, lng:-72.8863},
    ],
    comer:[
      {n:"La Tablita", base:"El Calafate", nota:"Cordeiro patagônico no espeto; clássico de Calafate."},
      {n:"Cordeiro patagônico", base:"El Calafate", nota:"Assado ao palito; cerveja artesanal e calafate."},
      {n:"Cervejarias artesanais", base:"El Chaltén", nota:"La Cervecería e afins; comida de montanha."},
      {n:"Centolla (caranguejo-real)", base:"Ushuaia", nota:"Iguaria fueguina; também merluza negra."},
    ],
    eventos:[
      {n:"Fiesta Nacional del Lago", base:"El Calafate", nota:"Fev; tradição e cultura à beira do Lago Argentino."},
      {n:"Festa da Noite Mais Longa", base:"Ushuaia", nota:"Jun; solstício de inverno no fim do mundo."},
    ],
  },
  "cu-havana-trinidad": {
    transporte:[
      {cidade:"Havana", sistema:"Táxis clássicos, 'almendrones' (coletivos) e ônibus (guaguas)", passe:"Dinheiro vivo (pesos)", app:"—", dica:"Habana Vieja toda a pé; almendrones seguem rotas fixas — combine o valor antes de entrar."},
    ],
    atracoes:[
      {n:"Plaza Mayor de Trinidad", base:"Trinidad", nota:"Coração colonial; igreja, museus e a Casa de la Música.", lat:21.802, lng:-79.9847},
      {n:"Paseo del Prado", base:"Cienfuegos", nota:"O bulevar mais longo de Cuba; arquitetura francesa.", lat:22.146, lng:-80.436},
      {n:"Plaza Vieja & Plaza de la Catedral", base:"Havana", nota:"As praças mais bonitas da Habana Vieja."},
      {n:"El Capitólio & Paseo del Prado", base:"Havana", nota:"Cartão-postal e o bulevar arborizado do centro."},
      {n:"Callejón de Hamel", base:"Havana", nota:"Beco de arte afro-cubana, rumba aos domingos."},
      {n:"Havana", base:"Havana", nota:"Havana Velha (UNESCO); Capitólio, Malecón, praças e carros clássicos.", lat:23.1136, lng:-82.3666},
      {n:"Viñales", base:"Havana", nota:"Vale de tabaco e mogotes calcários (UNESCO).", lat:22.616, lng:-83.7144},
      {n:"Trinidad", base:"Trinidad", nota:"Cidade colonial de ruas de pedra; Plaza Mayor e música.", lat:21.802, lng:-79.9844},
      {n:"Valle de los Ingenios", base:"Cienfuegos", nota:"Antigos engenhos de açúcar e a Torre Manaca Iznaga (UNESCO).", lat:21.8847, lng:-79.8419},
      {n:"Playa Ancón", base:"Cienfuegos", nota:"Praia turquesa perto de Trinidad; mergulho e descanso.", lat:21.739, lng:-80.0269},
      {n:"Santa Clara", base:"Santa Clara", nota:"Cidade do Che; Memorial e Monumento do Trem Blindado.", lat:22.4069, lng:-79.9645},
      {n:"Varadero", base:"Cienfuegos", nota:"A praia mais famosa de Cuba; 20 km de areia branca.", lat:23.1394, lng:-81.2861},
    ],
    parques:[
      {n:"As 4 praças da Havana Velha", base:"Havana", nota:"Plaza de Armas, Catedral, Vieja e San Francisco de Asís (UNESCO)."},
      {n:"Capitólio Nacional", base:"Havana", nota:"O edifício mais emblemático do país; sede do Parlamento."},
      {n:"Plaza de la Revolución", base:"Havana", nota:"Monumento a Martí e os murais de Che e Camilo Cienfuegos."},
      {n:"Calle Obispo & Malecón", base:"Havana", nota:"Rua principal do centro e a orla icônica da capital."},
      {n:"Fusterlândia", base:"Havana", nota:"Bairro de Jaimanitas coberto de mosaicos por José Fuster."},
      {n:"Fortaleza del Morro & Cabaña", base:"Havana", nota:"Forte na entrada da baía; cerimônia do canhão (cañonazo)."},
      {n:"P. N. Viñales", base:"Viñales", nota:"Vale de tabaco e mogotes; charutarias e cavalgadas."},
      {n:"Cueva del Indio", base:"Viñales", nota:"Caverna com rio navegável de barco, no vale do tabaco."},
      {n:"Centro Histórico de Cienfuegos", base:"Cienfuegos", nota:"'Pérola do Sul' de arquitetura francesa (UNESCO)."},
      {n:"Valle de los Ingenios", base:"Trinidad", nota:"Engenhos de açúcar e a Torre Manaca Iznaga; mirante e tirolesa."},
      {n:"Playa Ancón", base:"Trinidad", nota:"Praia turquesa do Caribe; mergulho e descanso."},
      {n:"Memorial e Trem Blindado", base:"Santa Clara", nota:"Mausoléu do Che e o trem descarrilado da Revolução."},
      {n:"Cueva de Saturno", base:"Varadero", nota:"Cenote de água cristalina para banho, perto de Matanzas."},
      {n:"Praias de Varadero", base:"Varadero", nota:"Uma das mais belas do mundo; 20 km de areia branca."},
      {n:"Cayo Blanco (Seafari)", base:"Varadero", nota:"Passeio de catamarã a praias virgens e snorkel com golfinhos."},
      {n:"Cayo Largo del Sur", base:"Varadero", nota:"Praias paradisíacas (Playa Paraíso/Sirena); voo bate-volta."},
    ],
    campings:[
      {n:"Casas particulares", base:"Havana/Trinidad", nota:"Hospedagem em casas de família; a melhor experiência.", lat:23.1136, lng:-82.3666},
      {n:"Cabanas de Viñales", base:"Viñales", nota:"Hospedagem rural no vale do tabaco.", lat:22.616, lng:-83.7144},
    ],
    pernoite:[
      {n:"Aluguel de carro / Víazul", base:"Havana", nota:"Carro próprio ou ônibus turístico entre cidades.", lat:23.1136, lng:-82.3666},
      {n:"Combustível limitado", base:"Cuba", nota:"Abasteça sempre que puder; filas e escassez possíveis.", lat:20.0247, lng:-75.8219},
    ],
    comer:[
      {n:"La Guarida", base:"Havana", nota:"O paladar mais famoso de Cuba, em casarão de Centro Habana."},
      {n:"El Floridita", base:"Havana", nota:"O daiquiri de Hemingway; bar-coquetelaria histórico."},
      {n:"La Bodeguita del Medio", base:"Havana", nota:"O mojito clássico e som ao vivo, perto da Catedral."},
      {n:"Restaurante Km Zero", base:"Havana", nota:"Cozinha cubana contemporânea de destaque na Habana Vieja."},
      {n:"Doña Eutimia", base:"Havana", nota:"Ropa vieja premiada na Plaza de la Catedral (reserve)."},
      {n:"Café del Oriente / O'Reilly 304", base:"Havana", nota:"Bons drinks e tapas cubanas nos bares badalados do centro."},
      {n:"Paladar Aldaba", base:"Cienfuegos", nota:"Cozinha autoral à beira da baía da 'pérola do sul'."},
      {n:"Taberna La Canchánchara", base:"Trinidad", nota:"O coquetel típico (mel, limão e aguardente) com som ao vivo."},
      {n:"Vista Gourmet", base:"Trinidad", nota:"Buffet com vista dos telhados; um dos melhores paladares."},
      {n:"Casa de la Música (escadaria)", base:"Trinidad", nota:"Salsa ao vivo à noite na escadaria da Plaza Mayor."},
      {n:"Lagosta e peixe na Ancón", base:"Playa Ancón", nota:"Frutos do mar com pé na areia, perto de Trinidad."},
    ],
    museus:[
      {n:"Museo Nacional de Bellas Artes", base:"Havana", nota:"Maior acervo de arte cubana, em dois edifícios no centro."},
      {n:"Museo de la Revolución", base:"Havana", nota:"No antigo Palácio Presidencial; o iate Granma no jardim."},
      {n:"Museo del Ron Havana Club", base:"Havana", nota:"História do rum cubano com degustação, perto do porto."},
      {n:"Capitólio Nacional (visita guiada)", base:"Havana", nota:"Interiores do Parlamento; cúpula e Salón de los Pasos Perdidos."},
      {n:"Museo Romántico (Palácio Brunet)", base:"Trinidad", nota:"Mobiliário do séc. 19 na Plaza Mayor."},
      {n:"Museo Histórico (Palácio Cantero)", base:"Trinidad", nota:"Suba à torre para a vista da cidade colonial."},
      {n:"Memorial Che Guevara", base:"Santa Clara", nota:"Mausoléu, estátua e museu do Guerrilheiro Heroico."},
      {n:"Museo del Tabaco / Casa del Veguero", base:"Viñales", nota:"Processo do charuto, da folha ao torcido."},
    ],
    igrejas:[
      {n:"Catedral de San Cristóbal", base:"Havana", nota:"Barroco cubano na Plaza de la Catedral, na Havana Velha."},
      {n:"Iglesia de la Santísima Trinidad", base:"Trinidad", nota:"Na Plaza Mayor, coração da cidade colonial."},
      {n:"Catedral de Cienfuegos", base:"Cienfuegos", nota:"Na Plaza José Martí, com vitrais dos Doze Apóstolos."},
    ],
    eventos:[
      {n:"Show estilo Buena Vista Social Club", base:"Havana", nota:"Son e bolero ao vivo; cabaré clássico cubano."},
      {n:"Carnaval de Havana", base:"Havana", nota:"Ago; comparsas, conga e música pelo Malecón."},
      {n:"Festival del Habano", base:"Havana", nota:"Fev–mar; celebração internacional do charuto cubano."},
      {n:"Fiestas Sanjuaneras", base:"Trinidad", nota:"Jun; festa popular com cavalos e música na cidade colonial."},
    ],
  },
  "cu-cayos-oriente": {
    transporte:[
      {cidade:"Santiago de Cuba", sistema:"Táxis, almendrones e ônibus locais", passe:"Dinheiro vivo (pesos)", app:"—", dica:"Centro e Parque Céspedes a pé; táxi para o Morro e El Cobre."},
    ],
    atracoes:[
      {n:"Parque Céspedes & Calle Heredia", base:"Santiago de Cuba", nota:"Praça central e a rua da trova e do son.", lat:20.0206, lng:-75.8219},
      {n:"Plaza San Juan de Dios", base:"Camagüey", nota:"A praça colonial mais bela da cidade-labirinto.", lat:21.376, lng:-77.917},
      {n:"Havana", base:"Havana", nota:"Capital e ponto de partida rumo aos cayos e ao oriente.", lat:23.1111, lng:-82.3670},
      {n:"Varadero", base:"Varadero", nota:"A praia mais famosa de Cuba; 20 km de areia branca.", lat:23.1396, lng:-81.2886},
      {n:"Cayo Santa María", base:"Varadero", nota:"Jardines del Rey; praias de resort sobre pedraplén.", lat:22.6479, lng:-78.9986},
      {n:"Cayo Guillermo (Playa Pilar)", base:"Varadero", nota:"Playa Pilar; dunas e mar turquesa no Jardines del Rey.", lat:22.5667, lng:-78.6722},
      {n:"Camagüey", base:"Camagüey", nota:"Cidade-labirinto colonial (UNESCO); tinajones e igrejas.", lat:21.3839, lng:-77.9069},
      {n:"Guardalavaca", base:"Camagüey", nota:"Playa Esmeralda e Guardalavaca; recifes na região de Holguín.", lat:21.1167, lng:-75.8167},
      {n:"Santiago de Cuba", base:"Santiago de Cuba", nota:"Berço do son e da trova; castelo del Morro e El Cobre.", lat:20.0249, lng:-75.8244},
      {n:"El Cobre", base:"Santiago de Cuba", nota:"Santuário da Virgen de la Caridad, padroeira de Cuba.", lat:20.0436, lng:-75.9436},
      {n:"Baracoa", base:"Baracoa", nota:"Primeira vila de Cuba; El Yunque, rios e Playa Maguana.", lat:20.3467, lng:-74.4956},
    ],
    parques:[
      {n:"Playa Pilar (Cayo Guillermo)", base:"Cayo Guillermo", nota:"Dunas e mar turquesa; uma das mais belas do Caribe."},
      {n:"Praias de Varadero", base:"Varadero", nota:"20 km de areia branca; resorts e mar calmo."},
      {n:"Cayo Santa María", base:"Cayo Santa María", nota:"Jardines del Rey; praias de resort sobre pedraplén."},
      {n:"Cayo Coco & flamingos", base:"Cayo Coco", nota:"Cayo de grandes resorts; colônias de flamingos."},
      {n:"Playa Esmeralda & Guardalavaca", base:"Guardalavaca", nota:"Águas calmas e recifes na região de Holguín."},
      {n:"Parque Baconao", base:"Santiago de Cuba", nota:"Reserva da biosfera com praias e o vale da pré-história."},
      {n:"El Yunque & Playa Maguana", base:"Baracoa", nota:"Monte-mesa icônico, rios e praia virgem do oriente."},
      {n:"P. N. Alejandro de Humboldt", base:"Baracoa", nota:"Floresta tropical (UNESCO); biodiversidade rara."},
    ],
    campings:[
      {n:"Resorts all-inclusive", base:"Cayo Coco/Santa María", nota:"Hospedagem de praia com tudo incluído nos cayos.", lat:22.5097, lng:-78.4039},
      {n:"Casas particulares", base:"Santiago/Baracoa", nota:"Hospedagem em casa de família no oriente cubano.", lat:20.3467, lng:-74.4956},
    ],
    pernoite:[
      {n:"Pedraplén com pedágio", base:"Cayos", nota:"Acesso por longas pontes-aterro sobre o mar; abasteça antes."},
      {n:"Estrada La Farola", base:"Baracoa", nota:"Trecho montanhoso e sinuoso; dirija de dia.", lat:20.3467, lng:-74.4956},
    ],
    comer:[
      {n:"Lagosta nos cayos", base:"Cayo Coco", nota:"Frutos do mar e lagosta nos resorts e ranchones."},
      {n:"Restaurante 1800", base:"Camagüey", nota:"Cozinha cubana na Plaza San Juan de Dios."},
      {n:"Cucurucho & cacau", base:"Baracoa", nota:"Doce de coco em folha de palma e o chocolate de Baracoa."},
      {n:"Casa de la Trova", base:"Santiago de Cuba", nota:"Son e trova ao vivo; berço da música cubana."},
      {n:"Paladar St. Pauli", base:"Santiago de Cuba", nota:"Bom paladar no centro; cozinha cubana e drinks."},
    ],
    museus:[
      {n:"Cuartel Moncada (Museo 26 de Julio)", base:"Santiago de Cuba", nota:"Quartel do ataque que iniciou a Revolução."},
      {n:"Castillo del Morro (San Pedro de la Roca)", base:"Santiago de Cuba", nota:"Forte do séc. 17 sobre a baía (UNESCO)."},
      {n:"Cemitério Santa Ifigenia", base:"Santiago de Cuba", nota:"Túmulos de José Martí e de Fidel Castro."},
      {n:"Museo Arqueológico La Cueva del Paraíso", base:"Baracoa", nota:"Arte e cultura taína na primeira vila de Cuba."},
      {n:"Casa Natal de Ignacio Agramonte", base:"Camagüey", nota:"Museu sobre o herói da independência, no centro."},
    ],
    igrejas:[
      {n:"Santuário de El Cobre", base:"Santiago de Cuba", nota:"Basílica da Virgen de la Caridad, padroeira de Cuba."},
      {n:"Catedral de Santiago de Cuba", base:"Santiago de Cuba", nota:"No Parque Céspedes, coração da cidade."},
      {n:"Catedral de Camagüey", base:"Camagüey", nota:"Na Plaza Agramonte, no centro labiríntico."},
    ],
    eventos:[
      {n:"Carnaval de Santiago de Cuba", base:"Santiago de Cuba", nota:"Jul; o maior e mais tradicional carnaval da ilha."},
      {n:"Festival del Caribe (Fiesta del Fuego)", base:"Santiago de Cuba", nota:"Jul; cultura caribenha, música e dança."},
      {n:"Romaria de El Cobre", base:"El Cobre", nota:"8 set; padroeira de Cuba; grande romaria nacional."},
    ],
  },
  "cl-santiago-cordilheira": {
    transporte:[
      {cidade:"Santiago", sistema:"Metrô de Santiago (7 linhas) + ônibus Red (Transantiago)", passe:"Tarjeta bip! (recarregável; metrô e ônibus)", app:"Metro de Santiago · Moovit", dica:"Cerro San Cristóbal pela L1 (est. Baquedano) + funicular. Evite o rush 7–9h e 18–20h."},
    ],
    atracoes:[
      {n:"Cerro San Cristóbal", base:"Santiago", nota:"Parque Metropolitano com funicular e vista panorâmica."},
      {n:"Cerro Santa Lucía", base:"Santiago", nota:"Mirante ajardinado no coração da capital. Metrô: est. Santa Lucía (L1)"},
      {n:"Plaza de Armas & Bellas Artes", base:"Santiago", nota:"Centro histórico, catedral e museus. Metrô: est. Plaza de Armas (L5)"},
      {n:"Bairro Bellavista & Sky Costanera", base:"Santiago", nota:"Vida noturna, La Chascona e o mirante mais alto. Metrô: est. Baquedano / Tobalaba"},
      {n:"Santiago", base:"Santiago", nota:"Capital aos pés dos Andes; bairros, mercados e mirantes.", lat:-33.4474, lng:-70.6673},
      {n:"Valle Nevado", base:"Santiago", nota:"Estação de ski nos Andes a ~1h30 de Santiago; trekking no verão.", lat:-33.3547, lng:-70.2497},
      {n:"Cajón del Maipo", base:"Santiago", nota:"Vale de montanha; Embalse El Yeso e termas.", lat:-33.7998, lng:-70.0858},
      {n:"Isla Negra", base:"Pomaire", nota:"Casa-museu de Pablo Neruda à beira do Pacífico.", lat:-33.4469, lng:-71.7},
    ],
    museus:[
      {n:"La Chascona (Casa de Neruda)", base:"Santiago", nota:"Casa-museu do poeta no bairro Bellavista. Metrô: est. Baquedano (L1/L5)"},
      {n:"Museo Chileno de Arte Precolombino", base:"Santiago", nota:"Um dos melhores acervos pré-colombianos do continente."},
      {n:"Museo de la Memoria y los DD.HH.", base:"Santiago", nota:"Memória da ditadura; arquitetura premiada."},
    ],
    parques:[
      {n:"Valle Nevado / Farellones", base:"Santiago", nota:"Maior estação de ski dos Andes centrais (jun–set)."},
      {n:"Cajón del Maipo", base:"Santiago", nota:"Embalse El Yeso turquesa, termas e montanha."},
      {n:"Cerro San Cristóbal", base:"Santiago", nota:"Parque Metropolitano com funicular e mirante."},
      {n:"Cerro Santa Lucía", base:"Santiago", nota:"Mirante histórico ajardinado no centro da capital."},
      {n:"Casa-Museu Isla Negra", base:"Isla Negra", nota:"A casa mais querida de Pablo Neruda, sobre o Pacífico."},
      {n:"Pueblo de Pomaire", base:"Pomaire", nota:"Vila oleira; cerâmica e a famosa empanada gigante."},
    ],
    campings:[
      {n:"Camping do Cajón del Maipo", base:"San José de Maipo", nota:"Áreas de montanha junto ao rio Maipo."},
      {n:"Litoral central", base:"Algarrobo", nota:"Opções à beira-mar; vento e frio matinal.", lat:-33.3667, lng:-71.6667},
    ],
    pernoite:[
      {n:"Bairros centrais", base:"Santiago", nota:"Lastarria/Providencia; bem servidos e seguros.", lat:-33.4489, lng:-70.6693},
      {n:"Subida a Valle Nevado", base:"Santiago", nota:"Caracoles fechados; correntes obrigatórias no inverno.", lat:-33.4489, lng:-70.6693},
    ],
    comer:[
      {n:"Bares de Bellavista", base:"Santiago", nota:"Terremoto, pisco e vida noturna no bairro boêmio."},
      {n:"Mercado Central", base:"Santiago", nota:"Peixe e marisco; a clássica chupe de jaiva."},
      {n:"Empanada de Pomaire", base:"Pomaire", nota:"Empanada gigante de pino; doces e cerâmica."},
      {n:"Mariscadas do litoral", base:"Algarrobo", nota:"Peixe fresco e vinho branco na costa."},
    ],
    igrejas:[
      {n:"Catedral Metropolitana", base:"Santiago", nota:"Na Plaza de Armas, centro histórico da capital."},
    ],
    eventos:[
      {n:"Fiestas Patrias (18 set)", base:"Santiago", nota:"Set; fondas, cueca e gastronomia nacional."},
      {n:"Temporada de ski", base:"Valle Nevado", nota:"Jun–set; neve nos Andes a ~1h30 da capital."},
    ],
  },
  "ne-rota-emocoes": {
    transporte:[
      {cidade:"São Luís", sistema:"Ônibus urbanos; Centro a pé", passe:"Bilhete Único (cartão)", app:"Cittamobi", dica:"O Reviver (centro histórico) todo a pé; ônibus/app para Calhau e Ponta d'Areia."},
    ],
    atracoes:[
      {n:"Centro Histórico (Reviver)", base:"São Luís", nota:"Maior conjunto de azulejos portugueses das Américas (UNESCO)."},
      {n:"Jericoacoara", base:"Jericoacoara", nota:"Vila de dunas; acesso só em 4x4 pela areia.", lat:-2.7939, lng:-40.5119},
      {n:"Delta do Parnaíba", base:"Jericoacoara", nota:"Único delta em mar aberto das Américas; manguezais.", lat:-2.75, lng:-41.8167},
      {n:"Barreirinhas", base:"Barreirinhas", nota:"Base dos Lençóis Maranhenses; circuitos das lagoas.", lat:-2.7472, lng:-42.8264},
      {n:"São Luís", base:"São Luís", nota:"Capital histórica (UNESCO); azulejos e reggae.", lat:-2.5307, lng:-44.3068},
    ],
    museus:[
      {n:"Casa do Maranhão", base:"São Luís", nota:"Tradição do bumba meu boi, em casarão de azulejos."},
      {n:"Museu Histórico e Artístico do Maranhão", base:"São Luís", nota:"Mobiliário e arte no centro histórico (UNESCO)."},
    ],
    parques:[
      {n:"P. N. dos Lençóis Maranhenses", base:"Barreirinhas", nota:"Dunas e lagoas sazonais; circuitos 4x4."},
      {n:"Duna do Pôr do Sol & Pedra Furada", base:"Jericoacoara", nota:"Cartões-postais de Jeri; pôr do sol e arco de pedra."},
      {n:"Lagoa do Paraíso & Azul", base:"Jericoacoara", nota:"Lagoas de redes e bares à beira d'água."},
      {n:"Delta do Parnaíba", base:"Parnaíba", nota:"Único delta em mar aberto das Américas; passeio de barco."},
      {n:"Rio Preguiças & Mandacaru", base:"Barreirinhas", nota:"Passeio de lancha aos Pequenos Lençóis e ao farol."},
      {n:"Centro Histórico de São Luís", base:"São Luís", nota:"Casario de azulejos (UNESCO); reggae e cultura."},
    ],
    campings:[
      {n:"Pousadas de Atins", base:"Atins", nota:"Vila rústica na foz do Preguiças; kite e dunas.", lat:-2.5783, lng:-42.7344},
      {n:"Áreas em Barreirinhas", base:"Barreirinhas", nota:"Base estruturada dos Lençóis; pousadas e camping.", lat:-2.7472, lng:-42.8264},
    ],
    pernoite:[
      {n:"4x4 obrigatório (dunas)", base:"Jericoacoara", nota:"Acesso a Jeri e travessias só em tração; combine transfer.", lat:-2.7939, lng:-40.5119},
      {n:"Atenção às marés", base:"Litoral CE-MA", nota:"Trechos de praia firmes só na maré baixa."},
    ],
    comer:[
      {n:"Frutos do mar & caranguejo", base:"Jericoacoara", nota:"Peixe na brasa e caranguejada na vila."},
      {n:"Arroz de cuxá", base:"São Luís", nota:"Prato típico maranhense; peixe e camarão."},
      {n:"Doces de buriti", base:"Barreirinhas", nota:"Doces e licores do fruto do cerrado/lençóis."},
    ],
    eventos:[
      {n:"Bumba meu boi", base:"São Luís", nota:"Jun; maior festa popular do Maranhão (Patrimônio)."},
      {n:"Jeri Jazz & festas de vento", base:"Jericoacoara", nota:"Eventos de música e kitesurf na alta estação."},
    ],
    encontros:[
      {n:"Encontros de overlanders e motorhome", base:"Jericoacoara/Barreirinhas", nota:"Confraternizações de caravanismo na Rota das Emoções; agenda no MaCamp e ANACAMP.", lat:-2.7939, lng:-40.5119},
    ],
  },
  "ba-costa-descobrimento": {
    atracoes:[
      {n:"Porto Seguro", base:"Porto Seguro", nota:"Centro Histórico do descobrimento; balsa e passarela.", lat:-16.4497, lng:-39.0647},
      {n:"Coroa Vermelha", base:"Porto Seguro", nota:"Recifes e marco do descobrimento, em Santa Cruz Cabrália.", lat:-16.3489, lng:-39.0683},
      {n:"Arraial d'Ajuda", base:"Arraial d'Ajuda", nota:"Vila boêmia; Rua do Mucugê e praias de falésia.", lat:-16.4886, lng:-39.0719},
      {n:"Trancoso", base:"Trancoso", nota:"O Quadrado, a igrejinha e praias de falésia; charme e gastronomia.", lat:-16.5894, lng:-39.095},
      {n:"Praia do Espelho", base:"Trancoso", nota:"Piscinas naturais entre falésias; uma das mais belas do Brasil.", lat:-16.6906, lng:-39.1361},
      {n:"Caraíva", base:"Caraíva", nota:"Vila sem carros, de ruas de areia; acesso por travessia de canoa.", lat:-16.8086, lng:-39.1467},
    ],
    museus:[
      {n:"Museu do Descobrimento", base:"Porto Seguro", nota:"História do encontro de 1500, na Cidade Alta."},
      {n:"Memorial da Epopeia do Descobrimento", base:"Porto Seguro", nota:"Réplica da nau de Cabral e narrativa do descobrimento."},
    ],
    parques:[
      {n:"Centro Histórico de Porto Seguro", base:"Porto Seguro", nota:"Cidade Alta; marco do descobrimento e igrejas."},
      {n:"Recifes de Coroa Vermelha", base:"Santa Cruz Cabrália", nota:"Piscinas naturais de coral na maré baixa."},
      {n:"O Quadrado de Trancoso", base:"Trancoso", nota:"Praça histórica com a igrejinha de São João."},
      {n:"Praia do Espelho", base:"Trancoso", nota:"Falésias e piscinas naturais; uma das mais belas do Brasil."},
      {n:"Praia de Caraíva", base:"Caraíva", nota:"Vila sem carros à beira-rio; travessia de canoa."},
      {n:"Praia do Apaga-Fogo & Pitinga", base:"Arraial d'Ajuda", nota:"Praias de falésia e barracas badaladas."},
    ],
    campings:[
      {n:"Campings de Caraíva", base:"Caraíva", nota:"Estrutura rústica na vila sem energia plena.", lat:-16.8086, lng:-39.1467},
      {n:"Áreas em Arraial d'Ajuda", base:"Arraial d'Ajuda", nota:"Pousadas e campings perto da Rua do Mucugê.", lat:-16.4886, lng:-39.0719},
    ],
    pernoite:[
      {n:"Balsa do Buranhém", base:"Porto Seguro", nota:"Travessia a Arraial; calcule fila no verão.", lat:-16.4497, lng:-39.0647},
      {n:"Acesso a Caraíva", base:"Caraíva", nota:"Estrada de terra + travessia de canoa; sem carros na vila.", lat:-16.8086, lng:-39.1467},
    ],
    comer:[
      {n:"Moqueca & peixe na folha", base:"Porto Seguro", nota:"Cozinha baiana; acarajé e cocadas."},
      {n:"Gastronomia do Quadrado", base:"Trancoso", nota:"Restaurantes badalados na praça histórica."},
      {n:"Barracas da praia", base:"Praia do Espelho", nota:"Peixe e frutos do mar com pé na areia (reserve)."},
    ],
    igrejas:[
      {n:"Igreja N. S. da Pena", base:"Porto Seguro", nota:"Uma das mais antigas do Brasil, na Cidade Alta (séc. 16)."},
      {n:"Igrejinha de São João Batista", base:"Trancoso", nota:"Símbolo do Quadrado, com vista para o mar."},
    ],
    eventos:[
      {n:"Réveillon de Trancoso", base:"Trancoso", nota:"Dez–jan; auge da temporada no Quadrado."},
      {n:"Festas juninas & do descobrimento", base:"Porto Seguro", nota:"Cultura local e festejos no centro histórico."},
    ],
    encontros:[
      {n:"Encontros de campismo na Costa do Descobrimento", base:"Porto Seguro", nota:"Confraternizações de motorhome/trailer no litoral sul baiano; agenda no MaCamp e ANACAMP.", lat:-16.4497, lng:-39.0647},
    ],
  },

  "ce-litoral": {
    atracoes:[
      {n:"Praia do Futuro & Beira-Mar", base:"Fortaleza", nota:"Barracas badaladas e a orla da capital.", lat:-3.7319, lng:-38.4767},
      {n:"Morro Branco", base:"Beberibe", nota:"Falésias coloridas e labirintos de areia; garrafas de areia.", lat:-4.1797, lng:-38.1297},
      {n:"Praia das Fontes", base:"Beberibe", nota:"Falésias, fontes e o Mar do Meio, ao lado de Morro Branco.", lat:-4.1869, lng:-38.1200},
      {n:"Canoa Quebrada", base:"Aracati", nota:"Falésias, Broadway e buggy; vento de kite.", lat:-4.5247, lng:-37.7019},
      {n:"Cumbuco & Lagoa do Cauípe", base:"Caucaia", nota:"Dunas, lagoa e meca do kitesurf perto de Fortaleza.", lat:-3.6286, lng:-38.7256},
      {n:"Lagoinha", base:"Paraipaba", nota:"Praia de coqueiros, dunas e falésias.", lat:-3.2392, lng:-39.2611},
      {n:"Flecheiras & Mundaú", base:"Trairi", nota:"Piscinas naturais, mangue e cavalos-marinhos.", lat:-3.2167, lng:-39.2667},
      {n:"Icaraí de Amontada", base:"Amontada", nota:"Vila remota de dunas; refúgio de kitesurfistas.", lat:-3.0469, lng:-39.6453},
    ],
    museus:[
      {n:"Museu da Cultura Cearense", base:"Fortaleza", nota:"No Centro Dragão do Mar; cultura popular e cordel."},
      {n:"Museu do Mangue", base:"Trairi", nota:"Mangue de Mundaú; ecologia e os cavalos-marinhos."},
    ],
    parques:[
      {n:"Falésias de Morro Branco", base:"Beberibe", nota:"Labirintos e mirantes nas falésias coloridas."},
      {n:"Lagoa do Cauípe", base:"Cumbuco", nota:"Pista mundial de kitesurf entre as dunas."},
      {n:"Dunas de Canoa Quebrada", base:"Aracati", nota:"Buggy, tirolesa e o pôr do sol nas falésias."},
      {n:"Mangue de Mundaú", base:"Trairi", nota:"Passeio de barco pelo mangue; cavalos-marinhos."},
    ],
    campings:[
      {n:"Áreas em Icaraí de Amontada", base:"Amontada", nota:"Pousadas e estrutura simples na vila de kite.", lat:-3.0469, lng:-39.6453},
      {n:"Campings em Canoa Quebrada", base:"Aracati", nota:"Hospedagem econômica perto da Broadway."},
    ],
    pernoite:[
      {n:"Acesso a Icaraí de Amontada", base:"Amontada", nota:"Trechos finais de terra; vá de dia.", lat:-3.0469, lng:-39.6453},
      {n:"Buggy pelas dunas", base:"Cumbuco", nota:"Passeios dependem da maré; combine com guia local.", lat:-3.6286, lng:-38.7256},
    ],
    comer:[
      {n:"Caranguejada & peixada", base:"Fortaleza", nota:"Praia do Futuro e mercado dos peixes; tapioca e baião."},
      {n:"Lagosta na brasa", base:"Flecheiras", nota:"Frutos do mar frescos nas barracas das vilas."},
      {n:"Camarão & sucos de caju", base:"Canoa Quebrada", nota:"Restaurantes da Broadway e barracas de praia."},
    ],
    igrejas:[
      {n:"Catedral Metropolitana", base:"Fortaleza", nota:"Imponente igreja em estilo gótico no centro."},
    ],
    eventos:[
      {n:"Réveillon & Carnaval de Fortaleza", base:"Fortaleza", nota:"Pré-Caju, blocos e festas na orla."},
      {n:"Festival de kitesurf", base:"Cumbuco / Icaraí", nota:"Jul–dez; temporada de vento forte na costa oeste."},
      {n:"Festa de Iemanjá", base:"Fortaleza", nota:"15 de agosto; oferendas no mar na Praia do Futuro."},
    ],
    encontros:[
      {n:"Encontros de campismo no litoral cearense", base:"Canoa Quebrada/Cumbuco", nota:"Confraternizações de motorhome e kitesurfistas na costa; agenda no MaCamp e ANACAMP.", lat:-3.6286, lng:-38.7256},
    ],
  },

  "rn-litoral": {
    atracoes:[
      {n:"Ponta Negra & Morro do Careca", base:"Natal", nota:"A orla mais famosa e a duna-cartão-postal da capital.", lat:-5.8819, lng:-35.1717},
      {n:"Praia da Pipa", base:"Tibau do Sul", nota:"Falésias, Baía dos Golfinhos, Praia do Amor e vida noturna.", lat:-6.2289, lng:-35.0428},
      {n:"Baía dos Golfinhos", base:"Pipa", nota:"Golfinhos pela manhã, na maré baixa; acesso pela praia.", lat:-6.2347, lng:-35.0469},
      {n:"Dunas de Genipabu", base:"Extremoz", nota:"Buggy 'com emoção', esquibunda e dromedários.", lat:-5.6986, lng:-35.1869},
      {n:"Maior cajueiro do mundo", base:"Pirangi do Norte", nota:"Cajueiro de ~8.500 m²; passarela e mirante.", lat:-5.9667, lng:-35.1167},
      {n:"Parrachos de Maracajaú", base:"Maxaranguape", nota:"Piscinas de coral para snorkel, de catamarã, na maré baixa.", lat:-5.4167, lng:-35.2500},
      {n:"São Miguel do Gostoso", base:"São Miguel do Gostoso", nota:"Vila de kitesurf de vento constante; Praia de Tourinhos.", lat:-5.1228, lng:-35.6386},
      {n:"Mata Estrela", base:"Baía Formosa", nota:"Reserva de mata atlântica com lagoa de água escura.", lat:-6.3722, lng:-35.0078},
    ],
    museus:[
      {n:"Forte dos Reis Magos", base:"Natal", nota:"Forte quinhentista na barra do Potengi; origem da cidade."},
      {n:"Centro de Turismo (antiga cadeia)", base:"Natal", nota:"Artesanato potiguar e o mirante para Ponta Negra."},
    ],
    parques:[
      {n:"Santuário Ecológico de Pipa", base:"Pipa", nota:"Trilhas e mirantes sobre as falésias e a Baía dos Golfinhos."},
      {n:"Dunas de Genipabu (APA)", base:"Extremoz", nota:"Dunas móveis e a Lagoa de Genipabu/Jacumã."},
      {n:"Parrachos de Maracajaú", base:"Maxaranguape", nota:"Recifes de coral; mergulho e snorkel guiados."},
      {n:"Parque das Dunas", base:"Natal", nota:"Maior parque urbano de dunas do país, na Via Costeira."},
    ],
    campings:[
      {n:"Campings em Pipa", base:"Tibau do Sul", nota:"Hospedagem econômica perto da Praia do Amor.", lat:-6.1869, lng:-35.0931},
      {n:"Áreas em São Miguel do Gostoso", base:"Gostoso", nota:"Pousadas e estrutura simples na vila de kite.", lat:-5.1228, lng:-35.6386},
    ],
    pernoite:[
      {n:"Buggy nas dunas", base:"Genipabu", nota:"Tabelado, 'com ou sem emoção'; combine cedo, depende da maré.", lat:-5.6986, lng:-35.1869},
      {n:"Acesso ao Gostoso", base:"São Miguel do Gostoso", nota:"≈3 h de Natal por estrada; vá de dia.", lat:-5.1228, lng:-35.6386},
    ],
    comer:[
      {n:"Ginga com tapioca", base:"Natal", nota:"Petisco potiguar de peixe frito na tapioca, na orla."},
      {n:"Camarão & lagosta", base:"Pipa", nota:"Frutos do mar nos restaurantes da rua central."},
      {n:"Peixe na brasa", base:"São Miguel do Gostoso", nota:"Barracas de praia com peixe fresco e frutos do mar."},
    ],
    igrejas:[
      {n:"Catedral Nova de Natal", base:"Natal", nota:"Arquitetura modernista no centro da capital."},
    ],
    eventos:[
      {n:"Carnatal", base:"Natal", nota:"Dez; o carnaval fora de época com trios elétricos."},
      {n:"Festa de Sant'Ana", base:"Caicó (interior)", nota:"Jul; uma das maiores festas religiosas do RN."},
      {n:"Temporada de kitesurf", base:"São Miguel do Gostoso", nota:"Jul–jan; vento constante e campeonatos na vila."},
    ],
    encontros:[
      {n:"Encontros de campismo no litoral potiguar", base:"Pipa/Natal", nota:"Confraternizações de motorhome/trailer na costa do RN; agenda no MaCamp e ANACAMP.", lat:-6.2289, lng:-35.0428},
    ],
  },

  "al-costa-corais": {
    atracoes:[
      {n:"Piscinas de Pajuçara", base:"Maceió", nota:"Piscinas naturais a 2 km da orla, de jangada, na maré baixa.", lat:-9.6650, lng:-35.7000},
      {n:"Praia do Francês", base:"Marechal Deodoro", nota:"Praia badalada e a colonial Marechal Deodoro ao lado.", lat:-9.7569, lng:-35.8389},
      {n:"Rota Ecológica de Milagres", base:"São Miguel dos Milagres", nota:"Coqueirais, recifes e pousadas de charme; piscinas de jangada.", lat:-9.2783, lng:-35.3781},
      {n:"Galés de Maragogi", base:"Maragogi", nota:"Piscinas naturais a 6 km da costa, de catamarã, na maré baixa.", lat:-9.0122, lng:-35.2225},
      {n:"Praia dos Carneiros", base:"Tamandaré", nota:"A capelinha no mar, o rio Formoso e coqueirais; passeio de barco.", lat:-8.7050, lng:-35.0700},
      {n:"Piscinas de Porto de Galinhas", base:"Ipojuca", nota:"Piscinas naturais de jangada nos recifes; a praia símbolo de PE.", lat:-8.5089, lng:-35.0036},
    ],
    museus:[
      {n:"Memorial à República (Marechal Deodoro)", base:"Marechal Deodoro", nota:"Casa natal de Deodoro e o conjunto colonial tombado."},
      {n:"Igreja e Convento de São Francisco", base:"Marechal Deodoro", nota:"Barroco do séc. XVIII na antiga capital alagoana."},
    ],
    parques:[
      {n:"APA Costa dos Corais", base:"Maragogi", nota:"Maior unidade marinha do país; recifes e peixes-boi."},
      {n:"Praia dos Carneiros (rio Formoso)", base:"Tamandaré", nota:"Passeio de barco pelo rio, manguezal e a capelinha."},
      {n:"Projeto Peixe-Boi", base:"Porto de Pedras", nota:"Centro de visitação dos peixes-boi marinhos, na Rota Ecológica."},
    ],
    campings:[
      {n:"Campings em Maragogi", base:"Maragogi", nota:"Hospedagem econômica perto das galés.", lat:-9.0122, lng:-35.2225},
      {n:"Áreas em Porto de Galinhas", base:"Ipojuca", nota:"Pousadas e estrutura simples próximas à vila."},
    ],
    pernoite:[
      {n:"Catamarã às galés", base:"Maragogi", nota:"Só na maré baixa; reserve pelo horário da maré.", lat:-9.0122, lng:-35.2225},
      {n:"Jangadas às piscinas", base:"Porto de Galinhas", nota:"Saem da praia central conforme a maré; tabeladas.", lat:-8.5089, lng:-35.0036},
    ],
    comer:[
      {n:"Sururu & caldos", base:"Maceió", nota:"Sururu de Capote e frutos do mar na orla da Pajuçara."},
      {n:"Peixe na folha de bananeira", base:"Porto de Galinhas", nota:"Restaurantes da vila e na beira da praia."},
      {n:"Casquinha de siri & camarão", base:"Maragogi", nota:"Frutos do mar nas barracas das galés."},
    ],
    igrejas:[
      {n:"Capelinha dos Carneiros", base:"Tamandaré", nota:"A icônica igrejinha de São Benedito à beira-mar."},
      {n:"Catedral de Maceió", base:"Maceió", nota:"Nossa Senhora dos Prazeres, no centro da capital."},
    ],
    eventos:[
      {n:"Réveillon & verão de Maceió", base:"Maceió", nota:"Set–mar; auge da temporada nas praias alagoanas."},
      {n:"Festa de São Benedito", base:"Tamandaré", nota:"Procissão religiosa ligada à capelinha dos Carneiros."},
      {n:"Festival Gastronômico", base:"Porto de Galinhas", nota:"Pratos de frutos do mar e cultura praieira na vila."},
    ],
    encontros:[
      {n:"Encontros de campismo na Costa dos Corais", base:"Maragogi/Maceió", nota:"Confraternizações de motorhome/trailer no litoral AL/PE; agenda no MaCamp e ANACAMP.", lat:-9.6498, lng:-35.7089},
    ],
  },

  "pe-litoral": {
    atracoes:[
      {n:"Recife Antigo & Marco Zero", base:"Recife", nota:"O bairro histórico dos rios e pontes; Rua do Bom Jesus e Paço do Frevo.", lat:-8.0631, lng:-34.8711},
      {n:"Sítio Histórico de Olinda", base:"Olinda", nota:"Ladeiras barrocas, igrejas e o Alto da Sé (UNESCO).", lat:-8.0089, lng:-34.8553},
      {n:"Ilha de Itamaracá", base:"Itamaracá", nota:"Forte Orange e o projeto Peixe-Boi, ao norte.", lat:-7.7478, lng:-34.8256},
      {n:"Praias do Cabo de Santo Agostinho", base:"Cabo de Santo Agostinho", nota:"Calhetas, Gaibu e Suape, ao sul do Recife.", lat:-8.2900, lng:-34.9633},
      {n:"Piscinas de Porto de Galinhas", base:"Ipojuca", nota:"Piscinas naturais de jangada nos recifes; a praia símbolo de PE.", lat:-8.5114, lng:-35.0040},
      {n:"Praia dos Carneiros", base:"Tamandaré", nota:"A capelinha no mar e o rio Formoso; passeio de barco.", lat:-8.7036, lng:-35.0700},
    ],
    museus:[
      {n:"Paço do Frevo", base:"Recife", nota:"O frevo, patrimônio imaterial, no coração do Recife Antigo."},
      {n:"Instituto Ricardo Brennand", base:"Recife", nota:"Castelo, armaria e a maior coleção de Frans Post do mundo."},
      {n:"Oficina Cerâmica Francisco Brennand", base:"Recife", nota:"O ateliê-templo de esculturas do mestre Brennand."},
      {n:"Museu do Mamulengo", base:"Olinda", nota:"O teatro de bonecos popular do Nordeste."},
    ],
    parques:[
      {n:"Alto da Sé de Olinda", base:"Olinda", nota:"Mirante sobre Olinda e o Recife; tapioca e artesanato."},
      {n:"Forte Orange", base:"Itamaracá", nota:"Forte holandês do séc. XVII à beira-mar."},
      {n:"Praia de Calhetas", base:"Cabo de Santo Agostinho", nota:"Enseada de mata e mar calmo entre falésias."},
    ],
    campings:[
      {n:"Áreas em Porto de Galinhas", base:"Ipojuca", nota:"Pousadas e estrutura simples próximas à vila."},
      {n:"Campings no Cabo", base:"Cabo de Santo Agostinho", nota:"Hospedagem econômica perto de Gaibu e Calhetas.", lat:-8.29, lng:-34.9633},
    ],
    pernoite:[
      {n:"Jangadas às piscinas", base:"Porto de Galinhas", nota:"Saem da praia central conforme a maré; tabeladas.", lat:-8.5089, lng:-35.0036},
      {n:"Banho sinalizado no Recife", base:"Recife", nota:"Respeite os pontos de banho; há risco de tubarão em Boa Viagem.", lat:-8.0631, lng:-34.8711},
    ],
    comer:[
      {n:"Caranguejo & agulha frita", base:"Recife", nota:"Bares do Recife Antigo e da orla; bolo de rolo de sobremesa."},
      {n:"Tapioca no Alto da Sé", base:"Olinda", nota:"As barracas de tapioca recheada com vista para o Recife."},
      {n:"Peixe na folha de bananeira", base:"Porto de Galinhas", nota:"Restaurantes da vila e na beira da praia."},
    ],
    igrejas:[
      {n:"Basílica de São Bento", base:"Olinda", nota:"O altar dourado barroco mais célebre de Pernambuco."},
      {n:"Capela Dourada", base:"Recife", nota:"Joia do barroco brasileiro, na Ordem Terceira de São Francisco."},
      {n:"Capelinha dos Carneiros", base:"Tamandaré", nota:"A icônica igrejinha de São Benedito à beira-mar."},
    ],
    eventos:[
      {n:"Carnaval de Recife & Olinda", base:"Recife / Olinda", nota:"Fev; frevo, maracatu, Galo da Madrugada e os bonecos gigantes."},
      {n:"São João", base:"Recife", nota:"Jun; forró e quadrilhas no ciclo junino pernambucano."},
      {n:"Festa de Iemanjá & verão", base:"Porto de Galinhas", nota:"Set–mar; auge da temporada nas piscinas naturais."},
    ],
    encontros:[
      {n:"Encontros de campismo no litoral pernambucano", base:"Porto de Galinhas", nota:"Confraternizações de motorhome/trailer na costa de PE; agenda no MaCamp e ANACAMP.", lat:-8.5089, lng:-35.0036},
    ],
  },

  "pb-litoral": {
    atracoes:[
      {n:"Praia de Tambaú & orla", base:"João Pessoa", nota:"A orla mais movimentada da capital; pôr do sol e o Mercado de Artesanato.", lat:-7.1153, lng:-34.8228},
      {n:"Ponta do Seixas & Farol do Cabo Branco", base:"João Pessoa", nota:"O ponto mais oriental das Américas; mirante e o farol icônico.", lat:-7.1503, lng:-34.7936},
      {n:"Pôr do sol do Jacaré", base:"Cabedelo", nota:"O Bolero de Ravel ao entardecer no rio Paraíba; barcos e bares.", lat:-7.0381, lng:-34.8497},
      {n:"Praia de Coqueirinho", base:"Conde", nota:"Falésias coloridas, grutas e piscinas naturais do litoral sul.", lat:-7.3247, lng:-34.7989},
      {n:"Praia de Tambaba", base:"Conde", nota:"A primeira praia naturista oficial do Nordeste; falésias e mata.", lat:-7.3722, lng:-34.7919},
      {n:"Areia Vermelha", base:"Cabedelo", nota:"Banco de areia que emerge na maré baixa; passeio de catamarã.", lat:-6.9742, lng:-34.8339},
      {n:"Baía da Traição", base:"Baía da Traição", nota:"Praias remotas, falésias e aldeias indígenas Potiguara.", lat:-6.6892, lng:-34.9342},
    ],
    museus:[
      {n:"Centro Histórico de João Pessoa", base:"João Pessoa", nota:"Uma das cidades mais antigas do país; Igreja de São Francisco e o Centro Cultural."},
      {n:"Estação Cabo Branco (Ciência, Cultura e Artes)", base:"João Pessoa", nota:"Projeto de Oscar Niemeyer no alto do Cabo Branco."},
      {n:"Casa da Pólvora", base:"João Pessoa", nota:"Museu da cidade no centro histórico restaurado."},
    ],
    parques:[
      {n:"Igreja e Convento de São Francisco", base:"João Pessoa", nota:"Conjunto barroco-rococó, um dos mais belos do Brasil."},
      {n:"Jardim Botânico Benjamim Maranhão", base:"João Pessoa", nota:"Mata Atlântica preservada no coração da cidade verde."},
      {n:"Falésias de Coqueirinho", base:"Conde", nota:"Grutas, mirantes e piscinas naturais entre as falésias."},
    ],
    campings:[
      {n:"Campings no litoral sul", base:"Conde", nota:"Áreas perto de Coqueirinho e Tabatinga."},
      {n:"Áreas na Baía da Traição", base:"Baía da Traição", nota:"Hospedagem simples nas praias remotas do norte.", lat:-6.6892, lng:-34.9342},
    ],
    pernoite:[
      {n:"Catamarã à Areia Vermelha", base:"Cabedelo", nota:"Só na maré baixa; reserve pelo horário da maré.", lat:-6.9742, lng:-34.8339},
      {n:"Barcos do pôr do sol do Jacaré", base:"Cabedelo", nota:"Saídas ao entardecer; chegue cedo para garantir lugar.", lat:-6.9742, lng:-34.8339},
    ],
    comer:[
      {n:"Frutos do mar em Tambaú", base:"João Pessoa", nota:"Peixe, camarão e a tapioca paraibana na orla."},
      {n:"Peixe na brasa", base:"Coqueirinho", nota:"Barracas de praia entre as falésias do litoral sul."},
      {n:"Caranguejo & sucos tropicais", base:"Cabedelo", nota:"Bares do Jacaré e da orla norte."},
    ],
    igrejas:[
      {n:"Igreja de São Francisco", base:"João Pessoa", nota:"O complexo barroco de Santo Antônio, joia da capital."},
      {n:"Basílica de Nossa Senhora das Neves", base:"João Pessoa", nota:"A padroeira da cidade, no centro histórico."},
    ],
    eventos:[
      {n:"Réveillon & verão de João Pessoa", base:"João Pessoa", nota:"Set–mar; auge da temporada e festas na orla de Tambaú."},
      {n:"Carnaval & micaratas", base:"João Pessoa", nota:"Folia de rua e o pré-carnaval Muriçocas do Miramar."},
      {n:"Festa das Neves", base:"João Pessoa", nota:"Ago; padroeira da cidade, com programação cultural e shows."},
    ],
    encontros:[
      {n:"Encontros de campismo no litoral paraibano", base:"João Pessoa", nota:"Confraternizações de motorhome/trailer na costa da PB; agenda no MaCamp e ANACAMP.", lat:-7.1195, lng:-34.845},
    ],
  },

  };

  /* mescla nos roteiros e expõe o mapa */
  window.SERVICOS_MAP = S;
  if (window.ROTEIROS) {
    window.ROTEIROS.forEach(function(r){ if (S[r.id]) r.servicos = S[r.id]; });
  }
})();
