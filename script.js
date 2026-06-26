/*
  PROJETO: História das Copas do Mundo
  ARQUIVO: script.js — Toda a lógica de interatividade comentada linha a linha
  Responsável por: geração dos cards, troca de telas, quiz e mascote
*/

/* BASE DE DADOS: array com os 22 objetos representando cada edição da Copa */
const copasDados = [
  // 1. Dados estruturados da Copa do Mundo de 1930
  {
    ano: 1930, // Ano da edição
    sede: "Uruguai", // País sede
    campeao: "Uruguai", // País campeão
    vice: "Argentina", // País vice-campeão
    artilheiro: "Guillermo Stábile (Argentina) — 8 gols", // Nome e gols do artilheiro
    cartoesAmarelos: "Sistema de cartões não existia — avisos eram comunicados verbalmente pelos árbitros.", // Estatística de cartões amarelos
    cartoesVermelhos: "1 expulsão verbal registrada ao longo de todo o torneio.", // Estatística de expulsões
    descricao: "A primeira edição da Copa do Mundo foi realizada no Uruguai, único país candidato a sediar o torneio inaugural, em parte por ser o campeão olímpico vigente e por ter se comprometido a arcar com os custos de viagem das seleções europeias. Apenas 13 seleções participaram, das quais apenas 4 eram europeias, dado o alto custo e a longa viagem de navio. O Uruguai conquistou o título ao vencer a Argentina na grande final. O artilheiro da competição foi o argentino Guillermo Stábile, com 8 gols. Nessa época, o sistema de cartões coloridos ainda não existia — as advertências e expulsões eram comunicadas verbalmente pelos árbitros, e apenas uma expulsão verbal foi formalmente registrada em todo o torneio.", // Texto descritivo da Copa
    classeTema: "tema-uruguai", // Classe CSS associada ao tema de cores do país
    curiosidade: "A primeira Copa do Mundo! Os jogadores viajavam de navio por semanas.", // Curiosidade do mascote
    fotosLegendas: [ // Legendas para a galeria de imagens
      "Jogadores do Uruguai comemorando o título",
      "Foto do estádio Centenário, palco da final",
      "Guillermo Stábile, artilheiro do torneio"
    ]
  },
  // 2. Dados estruturados da Copa do Mundo de 1934
  {
    ano: 1934,
    sede: "Itália",
    campeao: "Itália",
    vice: "Tchecoslováquia",
    artilheiro: "Oldřich Nejedlý (Tchecoslováquia) — 5 gols",
    cartoesAmarelos: "Sistema de cartões não existia.",
    cartoesVermelhos: "1 expulsão verbal direta registrada.",
    descricao: "Realizada na Itália sob o governo de Mussolini, a segunda Copa do Mundo foi a primeira a contar com um processo classificatório, pois o número de países interessados havia crescido consideravelmente. O próprio Uruguai, campeão vigente, se recusou a participar em retaliação ao boicote europeu de 1930. A Itália sagrou-se campeã em casa ao vencer a Tchecoslováquia na final. A artilharia ficou com o tcheco Oldřich Nejedlý, autor de 5 gols. A comunicação das penalidades ainda era inteiramente verbal, e apenas um jogador foi expulso de forma direta durante todo o campeonato.",
    classeTema: "tema-italia",
    curiosidade: "O Uruguai boicotou esta edição em protesto contra a ausência europeia em 1930!",
    fotosLegendas: [
      "Seleção italiana campeã",
      "O rei da Itália entregando o troféu",
      "Oldřich Nejedlý, artilheiro tcheco"
    ]
  },
  // 3. Dados estruturados da Copa do Mundo de 1938
  {
    ano: 1938,
    sede: "França",
    campeao: "Itália",
    vice: "Hungria",
    artilheiro: "Leônidas da Silva (Brasil) — 7 gols",
    cartoesAmarelos: "Sistema de cartões não existia.",
    cartoesVermelhos: "4 expulsões verbais ao longo do torneio.",
    descricao: "A terceira edição da Copa do Mundo foi realizada na França e marcada por um clima de tensão política na Europa às vésperas da Segunda Guerra Mundial. A Itália conquistou o bicampeonato ao vencer a Hungria na final. O grande destaque individual do torneio foi o atacante brasileiro Leônidas da Silva, o \"Diamante Negro\", artilheiro com 7 gols — curiosamente, ele foi poupado pelo técnico brasileiro para a suposta final, e o Brasil acabou eliminado na semifinal. O clima acirrado das partidas resulted em 4 expulsões verbais ao longo do certame, ainda sem o uso de cartões físicos.",
    classeTema: "tema-italia",
    curiosidade: "O artilheiro Leônidas da Silva jogou descalço no barro contra a Polônia!",
    fotosLegendas: [
      "Leônidas da Silva, \"Diamante Negro\"",
      "Itália bicampeã com a taça",
      "Partida da Copa de 1938 na França"
    ]
  },
  // 4. Dados estruturados da Copa do Mundo de 1950
  {
    ano: 1950,
    sede: "Brasil",
    campeao: "Uruguai",
    vice: "Brasil",
    artilheiro: "Ademir de Menezes (Brasil) — 9 gols",
    cartoesAmarelos: "Sistema de cartões não existia.",
    cartoesVermelhos: "Nenhuma expulsão formalizada registrada nas partidas principais.",
    descricao: "Após a interrupção causada pela Segunda Guerra Mundial, a Copa do Mundo retornou in 1950, sediada no Brasil. O torneio utilizou um sistema de pontos na fase final em vez de partidas eliminatórias diretas. O Brasil entrou na última rodada precisando apenas de um empate contra o Uruguai para ser campeão, diante de mais de 170 mil torcedores no Maracanã. O Uruguai, porém, virou o placar de 1 a 0 para 2 a 1 e conquistou o título em um episódio que ficou marcado na história como o \"Maracanazo\". O artilheiro isolado foi o brasileiro Ademir de Menezes, com 9 gols. Nenhuma expulsão formal foi registrada nas partidas principais do torneio.",
    classeTema: "tema-uruguai",
    curiosidade: "O Maracanazo silenciou mais de 170 mil pessoas. O Uruguai calou o estádio!",
    fotosLegendas: [
      "Torcedores no Maracanã durante a final",
      "Obdulio Varela levantando o troféu pelo Uruguai",
      "Ademir de Menezes, artilheiro brasileiro"
    ]
  },
  // 5. Dados estruturados da Copa do Mundo de 1954
  {
    ano: 1954,
    sede: "Suíça",
    campeao: "Alemanha Ocidental",
    vice: "Hungria",
    artilheiro: "Sándor Kocsis (Hungria) — 11 gols",
    cartoesAmarelos: "Sistema de cartões não existia.",
    cartoesVermelhos: "3 expulsões verbais registradas.",
    descricao: "A Copa de 1954, realizada na Suíça, ficou marcada por um dos maiores azarões da história. A Hungria entrava no torneio com uma invencibilidade de quatro anos e era amplamente considerada a maior seleção do mundo, tendo já derrotado a Alemanha Ocidental por 8 a 3 na fase de grupos. Na final, porém, os alemães viraram o placar de 2 a 0 para 3 a 2 e conquistaram o primeiro título da história da Alemanha, em um resultado que ficou conhecido como o \"Milagre de Berna\". O artilheiro foi o húngaro Sándor Kocsis, com 11 gols — um número extraordinário até hoje. A intensidade das partidas gerou 3 expulsões verbais decretadas pelos árbitros.",
    classeTema: "tema-alemanha",
    curiosidade: "O 'Milagre de Berna'! A Alemanha usou chuteiras com travas ajustáveis na chuva.",
    fotosLegendas: [
      "Alemanha Ocidental comemorando o \"Milagre de Berna\"",
      "Sándor Kocsis, artilheiro húngaro",
      "Final de 1954 no Estádio Wankdorf, Suíça"
    ]
  },
  // 6. Dados estruturados da Copa do Mundo de 1958
  {
    ano: 1958,
    sede: "Suécia",
    campeao: "Brasil",
    vice: "Suécia",
    artilheiro: "Just Fontaine (França) — 13 gols",
    cartoesAmarelos: "Sistema de cartões não existia.",
    cartoesVermelhos: "3 expulsões relatadas pelas equipes de arbitragem.",
    descricao: "A Copa de 1958, realizada na Suécia, marcou a estreia do Brasil como campeão mundial. A seleção canarinho revelou dois jogadores que se tornariam lendas: Garrincha e Pelé. Na final contra os anfitriões suecos, o Brasil venceu por 5 a 2, com dois gols de Pelé, que tinha apenas 17 anos. O torneio também foi palco de um feito histórico jamais repetido: o francês Just Fontaine marcou 13 gols em um único Mundial, recorde que permanece intocado até hoje. A arbitragem registrou 3 expulsões verbais ao longo da competição, ainda sem o suporte de cartões coloridos.",
    classeTema: "tema-brasil",
    curiosidade: "Pelé estreou com apenas 17 anos e se tornou o campeão mais jovem de todos!",
    fotosLegendas: [
      "Pelé comemorando gol aos 17 anos",
      "Brasil levantando a taça na Suécia",
      "Just Fontaine, recordista com 13 gols"
    ]
  },
  // 7. Dados estruturados da Copa do Mundo de 1962
  {
    ano: 1962,
    sede: "Chile",
    campeao: "Brasil",
    vice: "Tchecoslováquia",
    artilheiro: "Garrincha, Vavá, Leonel Sánchez, Florian Albert, Valentin Ivanov e Dražan Jerković (4 gols)",
    cartoesAmarelos: "Sistema de cartões não existia.",
    cartoesVermelhos: "6 expulsões verbais registradas.",
    descricao: "O Brasil conquistou o bicampeonato mundial no Chile, mesmo sem Pelé, que se lesionou na fase de grupos. A seleção foi liderada por Garrincha, que foi o grande nome do torneio com suas dribles desconcertantes. A final foi vencida pelo Brasil contra a Tchecoslováquia por 3 a 1. A artilharia foi dividida de forma inédita entre seis jogadores de diferentes países, todos com 4 gols. A Copa ficou marcada pela violência em campo, com 6 expulsões verbais registradas, especialmente na partida entre Chile e Itália, chamada pela imprensa de \"A Batalha de Santiago\".",
    classeTema: "tema-brasil",
    curiosidade: "Garrincha jogou a final com febre de 39°C e liderou o bicampeonato brasileiro!",
    fotosLegendas: [
      "Garrincha em ação no Chile",
      "Brasil bicampeão com a taça",
      "\"A Batalha de Santiago\" (Chile x Itália)"
    ]
  },
  // 8. Dados estruturados da Copa do Mundo de 1966
  {
    ano: 1966,
    sede: "Inglaterra",
    campeao: "Inglaterra",
    vice: "Alemanha Ocidental",
    artilheiro: "Eusébio (Portugal) — 9 gols",
    cartoesAmarelos: "Sistema de cartões não existia — última edição com avisos exclusivamente verbais.",
    cartoesVermelhos: "5 expulsões verbais registradas.",
    descricao: "A Copa de 1966, realizada na Inglaterra, foi o único torneio conquistado pelos ingleses até hoje. Na final, a Inglaterra venceu a Alemanha Ocidental por 4 a 2 na prorrogação, com um gol polêmico de Geoff Hurst cujo rebote no travessão nunca foi definitivamente confirmado como tendo cruzado a linha. O grande destaque individual do torneio foi o português Eusébio, artilheiro com 9 gols e considerado um dos maiores jogadores de sua geração. Esta foi a última Copa a utilizar exclusivamente avisos verbais como mecanismo de punição — a partir da edição seguinte, os cartões amarelos e vermelhos seriam introduzidos. Ao todo, 5 expulsões verbais foram registradas.",
    classeTema: "tema-inglaterra",
    curiosidade: "O gol polêmico da final! Até hoje debatem se a bola cruzou a linha de gol.",
    fotosLegendas: [
      "Inglaterra comemorando o título em Wembley",
      "Eusébio emocionado após eliminação de Portugal",
      "Geoff Hurst após o gol polêmico da final"
    ]
  },
  // 9. Dados estruturados da Copa do Mundo de 1970
  {
    ano: 1970,
    sede: "México",
    campeao: "Brasil",
    vice: "Itália",
    artilheiro: "Gerd Müller (Alemanha Ocidental) — 10 gols",
    cartoesAmarelos: "33 cartões amarelos.",
    cartoesVermelhos: "Nenhum cartão vermelho.",
    descricao: "A Copa de 1970, disputada no México, é frequentemente citada como a mais bonita da história do futebol. O Brasil de Pelé, Tostão, Rivelino, Jairzinho, Clodoaldo e Gérson jogou um futebol de qualidade rara e conquistou o tricampeonato ao vencer a Itália por 4 a 1 na final, com um gol de Pelé e um gol antológico de Carlos Alberto Torres no último lance. Esta edição marcou a introdução oficial dos cartões amarelos e vermelhos na Copa do Mundo, em uma proposta do inglês Ken Aston. Curiosamente, apesar da novidade, nenhum cartão vermelho foi exibido durante todo o torneio — apenas 33 amarelos foram aplicados. O artilheiro foi o alemão Gerd Müller, com 10 gols.",
    classeTema: "tema-brasil",
    curiosidade: "Eu nasci nessa Copa! Os cartões amarelos e vermelhos surgiram em 1970.",
    fotosLegendas: [
      "Pelé e Carlos Alberto com a taça no México",
      "Gol de Carlos Alberto Torres na final",
      "Gerd Müller, artilheiro com 10 gols"
    ]
  },
  // 10. Dados estruturados da Copa do Mundo de 1974
  {
    ano: 1974,
    sede: "Alemanha Ocidental",
    campeao: "Alemanha Ocidental",
    vice: "Países Baixos",
    artilheiro: "Grzegorz Lato (Polônia) — 7 gols",
    cartoesAmarelos: "84 cartões amarelos.",
    cartoesVermelhos: "5 cartões vermelhos.",
    descricao: "A Copa de 1974, realizada na Alemanha Ocidental, apresentou ao mundo a filosofia do \"Futebol Total\" dos Países Baixos de Johan Cruyff, com jogadores que alternavam posições de forma fluida. Apesar do brilhantismo holandês, a Alemanha Ocidental, jogando em casa, conquistou o título ao vencer a seleção laranja por 2 a 1 na final. Com a consolidação do sistema de cartões, a arbitragem demonstrou maior rigor, distribuindo 84 amarelos e 5 vermelhos ao longo do torneio. O artilheiro foi o polonês Grzegorz Lato, com 7 gols. A Polônia fez uma campanha histórica e ficou em terceiro lugar.",
    classeTema: "tema-alemanha",
    curiosidade: "A Laranja Mecânica de Cruyff revolucionou o futebol com o Futebol Total!",
    fotosLegendas: [
      "Franz Beckenbauer levantando o troféu",
      "Johan Cruyff em ação pelos Países Baixos",
      "Grzegorz Lato, artilheiro polonês"
    ]
  },
  // 11. Dados estruturados da Copa do Mundo de 1978
  {
    ano: 1978,
    sede: "Argentina",
    campeao: "Argentina",
    vice: "Países Baixos",
    artilheiro: "Mario Kempes (Argentina) — 6 gols",
    cartoesAmarelos: "65 cartões amarelos.",
    cartoesVermelhos: "3 cartões vermelhos.",
    descricao: "A Copa de 1978, realizada em Buenos Aires sob o governo militar argentino, foi marcada por controvérsias políticas mas também por momentos de grande futebol. A Argentina conquistou seu primeiro título mundial em casa, vencendo os Países Baixos na final após a prorrogação. O herói da conquista foi Mario Kempes, artilheiro com 6 gols e responsável pelo gol da virada na final. Johan Cruyff, estrela holandesa da edição anterior, optou por não participar por razões pessoais. O balanço disciplinar apontou 65 cartões amarelos e 3 vermelhos ao longo do torneio.",
    classeTema: "tema-argentina",
    curiosidade: "Chuva de papéis! A final no Monumental de Núñez ficou coberta de serpentinas.",
    fotosLegendas: [
      "Mario Kempes comemorando gol na final",
      "Argentina comemorando o título em Buenos Aires",
      "Estádio Monumental de Núñez durante a final"
    ]
  },
  // 12. Dados estruturados da Copa do Mundo de 1982
  {
    ano: 1982,
    sede: "Espanha",
    campeao: "Itália",
    vice: "Alemanha Ocidental",
    artilheiro: "Paolo Rossi (Itália) — 6 gols",
    cartoesAmarelos: "98 cartões amarelos.",
    cartoesVermelhos: "5 cartões vermelhos.",
    descricao: "A Copa de 1982, realizada na Espanha, é lembrada com carinho especial pelos amantes do futebol ofensivo, em grande parte pela atuação deslumbrante do Brasil de Zico, Sócrates, Falcão e Cerezo — que acabou eliminado pela Itália em um confronto dramático. A Itália, liderada por Paolo Rossi — que retornava de suspensão por envolvimento em escândalo de apostas —, se recuperou de um início apagado para conquistar o tricampeonato ao vencer a Alemanha Ocidental na final. Rossi marcou 6 gols na fase final e se tornou um dos heróis mais improvável da história da Copa. Os árbitros distribuíram 98 amarelos e 5 vermelhos na competição.",
    classeTema: "tema-italia",
    curiosidade: "O artilheiro Paolo Rossi quase não jogou por estar suspenso antes da Copa!",
    fotosLegendas: [
      "Paolo Rossi comemorando gol",
      "Itália tricampeã com a taça",
      "Zico em ação pelo Brasil na Copa de 1982"
    ]
  },
  // 13. Dados estruturados da Copa do Mundo de 1986
  {
    ano: 1986,
    sede: "México",
    campeao: "Argentina",
    vice: "Alemanha Ocidental",
    artilheiro: "Gary Lineker (Inglaterra) — 6 gols",
    cartoesAmarelos: "135 cartões amarelos.",
    cartoesVermelhos: "8 cartões vermelhos.",
    descricao: "A Copa de 1986, realizada no México, foi o torneio de Diego Armando Maradona. O camisa 10 argentino protagonizou duas das jogadas mais comentadas da história do futebol no mesmo jogo, contra a Inglaterra nas quartas de final: o gol marcado com a mão (\"a Mão de Deus\") e o gol considerado o mais bonito da história da Copa, após driblar seis adversários. A Argentina conquistou o bicampeonato ao vencer a Alemanha Ocidental por 3 a 2 na final. O artilheiro foi o inglês Gary Lineker, com 6 gols. O torneio registrou um número elevado de penalidades: 135 amarelos e 8 vermelhos.",
    classeTema: "tema-argentina",
    curiosidade: "Maradona marcou o Gol do Século e a Mão de Deus no mesmo jogo contra a Inglaterra!",
    fotosLegendas: [
      "Maradona segurando a taça",
      "O gol de \"A Mão de Deus\" contra a Inglaterra",
      "Maradona no \"Gol do Século\" contra a Inglaterra"
    ]
  },
  // 14. Dados estruturados da Copa do Mundo de 1990
  {
    ano: 1990,
    sede: "Itália",
    campeao: "Alemanha Ocidental",
    vice: "Argentina",
    artilheiro: "Salvatore Schillaci (Itália) — 6 gols",
    cartoesAmarelos: "162 cartões amarelos.",
    cartoesVermelhos: "16 cartões vermelhos (recorde histórico).",
    descricao: "A Copa de 1990, realizada na Itália, ficou marcada como uma das edições mais defensivas e violentas da história. A média de gols por partida foi a mais baixa já registrada. A Alemanha Ocidental conquistou o tricampeonato ao vencer a Argentina por 1 a 0 na final, com gol de pênalti. A Argentina chegou à final desfalcada de jogadores suspensos e com Maradona longe de sua melhor forma. A surpresa positiva foi o italiano Salvatore Schillaci, desconhecido antes do torneio, que terminou como artilheiro com 6 gols. A violência em campo resultou em um recorde de 162 amarelos e 16 vermelhos — o maior número de expulsões já registrado em uma Copa.",
    classeTema: "tema-alemanha",
    curiosidade: "Teve recorde histórico de violência: 162 cartões amarelos e 16 vermelhos!",
    fotosLegendas: [
      "Alemanha Ocidental tricampeã na Itália",
      "Salvatore Schillaci comemorando gol",
      "Lothar Matthäus levantando a taça"
    ]
  },
  // 15. Dados estruturados da Copa do Mundo de 1994
  {
    ano: 1994,
    sede: "Estados Unidos",
    campeao: "Brasil",
    vice: "Itália",
    artilheiro: "Oleg Salenko (Rússia) e Hristo Stoichkov (Bulgária) — 6 gols cada",
    cartoesAmarelos: "156 cartões amarelos.",
    cartoesVermelhos: "15 cartões vermelhos.",
    descricao: "A Copa de 1994, realizada nos Estados Unidos, foi histórica por ser a primeira disputada em um país onde o futebol não era o esporte mais popular — mas gerou grandes públicos e foi um sucesso de organização. O Brasil encerrou um jejum de 24 anos sem título ao vencer a Itália nos pênaltis na final de Pasadena, após um jogo sem gols. Roberto Baggio, estrela italiana, cobrou o pênalti decisivo para o alto, sobre o gol. Romário foi o principal jogador brasileiro e candidato natural ao título de melhor do torneio. A artilharia foi dividida entre o russo Salenko (que marcou 5 gols em um único jogo contra Camarões) e o búlgaro Stoichkov, ambos com 6 gols. Os árbitros distribuíram 156 amarelos e 15 vermelhos.",
    classeTema: "tema-brasil",
    curiosidade: "O primeiro título decidido nos pênaltis, com a cobrança de Baggio indo para o céu.",
    fotosLegendas: [
      "Romário e Bebeto comemorando",
      "Roberto Baggio após perder o pênalti decisivo",
      "Brasil tetracampeão levantando a taça em Pasadena"
    ]
  },
  // 16. Dados estruturados da Copa do Mundo de 1998
  {
    ano: 1998,
    sede: "França",
    campeao: "França",
    vice: "Brasil",
    artilheiro: "Davor Šuker (Croácia) — 6 gols",
    cartoesAmarelos: "258 cartões amarelos.",
    cartoesVermelhos: "22 cartões vermelhos.",
    descricao: "A Copa de 1998, realizada na França, foi vencida pelo país anfitrião com uma campanha dominante. A final entre França e Brasil terminou em 3 a 0 para os franceses, mas ficou marcada pela polêmica em torno de Ronaldo: o atacante teve uma convulsão na véspera da partida e seu nome foi retirado e recolocado na escalação em circunstâncias nunca esclarecidas. Zinedine Zidane marcou dois gols de cabeça na final e foi o grande herói da seleção francesa. A Croácia, em sua primeira Copa como país independente, fez uma campanha histórica e terminou em terceiro lugar. O artilheiro foi o croata Davor Šuker, com 6 gols. O torneio teve altos números disciplinares: 258 amarelos e 22 vermelhos.",
    classeTema: "tema-franca",
    curiosidade: "Zidane marcou dois gols de cabeça na grande final e virou o herói nacional.",
    fotosLegendas: [
      "Zinedine Zidane comemorando gol na final",
      "França campeã no Stade de France",
      "Davor Šuker, artilheiro croata"
    ]
  },
  // 17. Dados estruturados da Copa do Mundo de 2002
  {
    ano: 2002,
    sede: "Coreia do Sul e Japão",
    campeao: "Brasil",
    vice: "Alemanha",
    artilheiro: "Ronaldo (Brasil) — 8 gols",
    cartoesAmarelos: "272 cartões amarelos.",
    cartoesVermelhos: "17 cartões vermelhos.",
    descricao: "A Copa de 2002, realizada conjuntamente na Coreia do Sul e no Japão, foi a primeira a ser disputada na Ásia e gerou grandes surpresas: Coreia do Sul chegou às semifinais e Senegal às quartas de final. O Brasil conquistou o pentacampeonato ao vencer a Alemanha por 2 a 0 na final, com dois gols de Ronaldo. O atacante, que havia sofrido um colapso misterioso antes da final de 1998, redimiu-se em grande estilo e foi eleito o melhor jogador do torneio, com 8 gols no total. Ronaldinho Gaúcho e Rivaldo foram peças fundamentais na caminhada brasileira. A arbitragem distribuiu 272 amarelos e 17 vermelhos ao longo da competição.",
    classeTema: "tema-brasil",
    curiosidade: "Ronaldo Fenômeno ressurgiu com o corte de cabelo Cascão e marcou 8 gols!",
    fotosLegendas: [
      "Ronaldo comemorando gol na final",
      "Brasil pentacampeão com a taça no Japão",
      "Ronaldinho Gaúcho em ação"
    ]
  },
  // 18. Dados estruturados da Copa do Mundo de 2006
  {
    ano: 2006,
    sede: "Alemanha",
    campeao: "Itália",
    vice: "França",
    artilheiro: "Miroslav Klose (Alemanha) — 5 gols",
    cartoesAmarelos: "345 cartões amarelos (recorde histórico).",
    cartoesVermelhos: "28 cartões vermelhos.",
    descricao: "A Copa de 2006, realizada na Alemanha, ficou marcada por dois episódios: a conquista italiana nos pênaltis contra a França na final, e a cabeçada de Zinedine Zidane no italiano Marco Materazzi durante a partida decisiva — um dos momentos mais emblemáticos e melancólicos na história da Copa, pois foi o último jogo da carreira do craque francês. A Itália levantou sua quarta taça e a França chegou à final surpreendentemente, liderada por um Zidane inspirado até aquele momento. O artilheiro foi o alemão Miroslav Klose, com 5 gols. Esta edição registrou o recorde absoluto de cartões amarelos na história da Copa: 345, além de 28 vermelhos.",
    classeTema: "tema-italia",
    curiosidade: "A cabeçada histórica de Zidane em Materazzi marcou o fim da carreira do craque.",
    fotosLegendas: [
      "Cabeçada de Zidane em Materazzi na final",
      "Itália tetracampeã comemorando nos pênaltis",
      "Miroslav Klose, artilheiro da Copa"
    ]
  },
  // 19. Dados estruturados da Copa do Mundo de 2010
  {
    ano: 2010,
    sede: "África do Sul",
    campeao: "Espanha",
    vice: "Países Baixos",
    artilheiro: "Thomas Müller, David Villa, Wesley Sneijder e Diego Forlán — 5 gols cada",
    cartoesAmarelos: "241 cartões amarelos.",
    cartoesVermelhos: "14 cartões vermelhos.",
    descricao: "A Copa de 2010, realizada pela primeira vez no continente africano, foi um marco histórico para o futebol mundial. A Espanha conquistou seu primeiro título ao vencer os Países Baixos por 1 a 0 na prorrogação da final, com gol de Andrés Iniesta. A seleção espanhola, então vigente campeã europeia, jogou um futebol de posse e trocas de passes que se tornou referência global. A vuvuzela, instrumento musical sul-africano, tornou-se o símbolo sonoro inesquecível do torneio. O gol de Iniesta na prorrogação gerou uma das comemorações mais emotivas da história. A artilharia foi compartilhada entre quatro jogadores com 5 gols cada. Os árbitros distribuíram 241 amarelos e 14 vermelhos.",
    classeTema: "tema-espanha",
    curiosidade: "A primeira Copa na África, famosa pelo barulho contagiante das vuvuzelas!",
    fotosLegendas: [
      "Andrés Iniesta comemorando o gol do título",
      "Espanha levantando a taça na África do Sul",
      "Torcedores com vuvuzelas nas arquibancadas"
    ]
  },
  // 20. Dados estruturados da Copa do Mundo de 2014
  {
    ano: 2014,
    sede: "Brasil",
    campeao: "Alemanha",
    vice: "Argentina",
    artilheiro: "James Rodríguez (Colômbia) — 6 gols",
    cartoesAmarelos: "187 cartões amarelos.",
    cartoesVermelhos: "10 cartões vermelhos.",
    descricao: "A Copa de 2014, realizada no Brasil, foi marcada por emoções extremas para o país anfitrião. Nas semifinais, o Brasil enfrentou a Alemanha no Estádio Mineirão sem Neymar (suspenso) e David Luiz (contundido), e sofreu uma derrota histórica por 7 a 1 que ficou conhecida como o \"Mineirazo\". A Alemanha confirmou o favoritismo ao vencer a Argentina por 1 a 0 na final do Maracanã, com gol de Götze na prorrogação, e conquistou o tetracampeonato. Lionel Messi foi eleito o melhor jogador do torneio. O artilheiro foi o colombiano James Rodríguez, com 6 gols, incluindo um voleio antológico contra o Uruguai. Os árbitros mostraram 187 amarelos e apenas 10 vermelhos.",
    classeTema: "tema-alemanha",
    curiosidade: "O Mineirazo! O inacreditável 7 a 1 da Alemanha sobre o Brasil nas semifinais.",
    fotosLegendas: [
      "Götze comemorando o gol do título no Maracanã",
      "James Rodríguez comemorando gol pelo voleio",
      "Placar do Mineirão após o 7 a 1 do Brasil"
    ]
  },
  // 21. Dados estruturados da Copa do Mundo de 2018
  {
    ano: 2018,
    sede: "Rússia",
    campeao: "França",
    vice: "Croácia",
    artilheiro: "Harry Kane (Inglaterra) — 6 gols",
    cartoesAmarelos: "219 cartões amarelos.",
    cartoesVermelhos: "4 cartões vermelhos.",
    descricao: "A Copa de 2018, realizada na Rússia, foi marcada pela conquista da França, liderada por um coletivo jovem e talentoso que incluía Kylian Mbappé, Antoine Griezmann e N'Golo Kanté. A final contra a Croácia foi um espetáculo com 6 gols: França venceu por 4 a 2 em uma partida que incluiu um gol contra, um gol de falta, um pênalti polêmico e belos gols dos croatas Perišić e Mandžukić. A Croácia surpreendeu o mundo ao eliminar Argentina, Rússia e Inglaterra no caminho para a final. O artilheiro foi o inglês Harry Kane, com 6 gols. A arbitragem foi uma das menos rígidas em décadas: apenas 219 amarelos e 4 vermelhos.",
    classeTema: "tema-franca",
    curiosidade: "Mbappé se tornou o second adolescente a fazer gol em final, após Pelé!",
    fotosLegendas: [
      "Kylian Mbappé em ação pela França",
      "França campeã segurando a taça na Rússia",
      "Luka Modrić liderando a Croácia"
    ]
  },
  // 22. Dados estruturados da Copa do Mundo de 2022
  {
    ano: 2022,
    sede: "Catar",
    campeao: "Argentina",
    vice: "França",
    artilheiro: "Kylian Mbappé (França) — 8 gols",
    cartoesAmarelos: "227 cartões amarelos.",
    cartoesVermelhos: "4 cartões vermelhos.",
    descricao: "A Copa de 2022, realizada no Catar em novembro e dezembro por conta do calor extremo do verão local, foi amplamente celebrada como a melhor da história, especialmente por conta de sua final. A Argentina, liderada por um Lionel Messi em estado de graça, venceu a França nos pênaltis após um empate em 3 a 3, em uma decisão de tirar o fôlego. A França estava perdendo por 2 a 0 quando Kylian Mbappé marcou dois gols em dois minutos para empatar. No tempo extra, Messi recolocou a Argentina na frente, Mbappé empatou de novo e, nos pênaltis, o goleiro argentino Emiliano Martínez foi o herói. Mbappé terminou como artilheiro com 8 gols, incluindo um hat-trick na final. Messi foi eleito o melhor jogador do torneio, completando o único título que lhe faltava.",
    classeTema: "tema-argentina",
    curiosidade: "A coroação de Messi na final com mais gols da história, decidida nos pênaltis!",
    fotosLegendas: [
      "Messi levantando a taça no Catar",
      "Final épica entre Argentina e França",
      "Mbappé comemorando hat-trick na final"
    ]
  }
];

/* Dicionário de códigos ISO de países para as bandeiras via FlagCDN */
const paisesIso = {
  "Uruguai": "uy",
  "Itália": "it",
  "Alemanha Ocidental": "de",
  "Alemanha": "de",
  "Brasil": "br",
  "Inglaterra": "gb-eng",
  "Argentina": "ar",
  "França": "fr",
  "Espanha": "es",
  "Tchecoslováquia": "cz",
  "Hungria": "hu",
  "Suécia": "se",
  "Países Baixos": "nl",
  "Croácia": "hr"
};

const bandeirasLocais = {
  "Uruguai": "img/bandeiras/uy.png",
  "Itália": "img/bandeiras/it.png",
  "Alemanha Ocidental": "img/bandeiras/de.png",
  "Alemanha": "img/bandeiras/de.png",
  "Brasil": "img/bandeiras/br.png",
  "Inglaterra": "img/bandeiras/gb-eng.png",
  "Argentina": "img/bandeiras/ar.png",
  "França": "img/bandeiras/fr.png",
  "Espanha": "img/bandeiras/es.png",
  "Tchecoslováquia": "img/bandeiras/cz.png",
  "Hungria": "img/bandeiras/hu.png",
  "Suécia": "img/bandeiras/se.png",
  "Países Baixos": "img/bandeiras/nl.png",
  "Croácia": "img/bandeiras/hr.png"
};

function obterFonteBandeira(pais) {
  if (bandeirasLocais[pais]) {
    return bandeirasLocais[pais];
  }

  const iso = paisesIso[pais] || "br";
  return `https://flagcdn.com/w320/${iso}.png`;
}

const imagensPadraoCopas = [
  "img/copas/entrando1930fotoinicio.jpg",
  "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
  "img/copas/images.jpeg"
];

function aplicarImagemComFallback(img, src, fallbackIndex) {
  img.onerror = () => {
    img.onerror = null;
    img.src = imagensPadraoCopas[fallbackIndex];
  };

  img.src = src || imagensPadraoCopas[fallbackIndex];
}

/*O DOM (Document Object Model) é a representação estruturada do código HTML de uma página web em forma de árvore*/
/* Elementos do DOM: Captura as referências de contêineres e botões do HTML */
const copasGallery = document.getElementById("copas-gallery"); // Grade de cards
const homeView = document.getElementById("home-view"); // Bloco principal do site
const detailsView = document.getElementById("details-view"); // Bloco oculto de detalhes
const detailsHero = document.getElementById("details-hero"); // Banner do topo de detalhes
const btnVoltarHome = document.getElementById("btn-voltar-home"); // Botão de retorno superior
const btnMobileToggle = document.getElementById("btn-mobile-toggle"); // Hamburguer mobile
const navNavigation = document.getElementById("nav-navigation"); // Menu lateral gaveta mobile

/* Percorre o array de copas e cria os 22 cards na galeria principal */
function gerarCardsGaleria() {
  copasGallery.innerHTML = ""; // Limpa qualquer conteúdo antigo
  
  copasDados.forEach(copa => {
    // Usa a bandeira local da pasta img/bandeiras quando disponível;
    // se não houver, cai para a imagem via CDN.
    const flagUrl = obterFonteBandeira(copa.campeao);
    
    // Cria elemento wrapper do card
    const card = document.createElement("div");
    card.className = "copa-card"; // Classe CSS de formatação
    card.setAttribute("data-ano", copa.ano); // Facilita localização de teste
    
    // Insere o HTML interno do card contendo imagem, ano, sede, campeão e botão
    card.innerHTML = `
      <div class="card-header-flag">
        <img class="card-flag-bg" src="${flagUrl}" alt="" aria-hidden="true">
        <img class="card-flag-main" src="${flagUrl}" alt="Bandeira do ${copa.campeao}">
        <span class="card-year-badge">${copa.ano}</span>
      </div>
      <div class="card-body">
        <h3>Copa de ${copa.ano}</h3>
        <div class="card-meta-info">
          <div class="card-meta-line">
            <span><strong>Sede:</strong></span>
            <span>${copa.sede}</span>
          </div>
          <div class="card-meta-line">
            <span><strong>Campeão:</strong></span>
            <span>${copa.campeao}</span>
          </div>
          <div class="card-meta-line">
            <span><strong>Vice:</strong></span>
            <span>${copa.vice}</span>
          </div>
        </div>
        <div class="card-btn-area">
          <button class="btn btn-gold btn-ver-detalhes" id="btn-detalhe-${copa.ano}">Ver detalhes</button>
        </div>
      </div>
    `;
    
    copasGallery.appendChild(card); // Adiciona o card criado ao container da galeria
    
    // Escuta evento de clique no botão para abrir os detalhes da edição
    const btnDetalhe = card.querySelector(".btn-ver-detalhes");
    btnDetalhe.addEventListener("click", () => {
      abrirPaginaDetalhes(copa); // Dispara transição para visualização de detalhes
    });
  });
}

const imagensHistoricas = {
  1930: [
    "img/copas/entrando1930fotoinicio.jpg",
    "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
    "img/copas/images.jpeg"
  ],

  1950: [
    "img/copas/entrando1930fotoinicio.jpg",
    "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
    "img/copas/images.jpeg"
  ],

  1958: [
    "img/copas/entrando1930fotoinicio.jpg",
    "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
    "img/copas/images.jpeg"
  ],

  1970: [
    "img/copas/entrando1930fotoinicio.jpg",
    "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
    "img/copas/images.jpeg"
  ],

  1994: [
    "img/copas/entrando1930fotoinicio.jpg",
    "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
    "img/copas/images.jpeg"
  ],

  2022: [
    "img/copas/entrando1930fotoinicio.jpg",
    "img/copas/Uruguay_en_el_Mundial_1930,_Los_Sports,_1930-08-08_(387).jpg",
    "img/copas/images.jpeg"
  ]
};

/* Ao clicar em "Ver detalhes", popula o template e exibe a página da edição */
function abrirPaginaDetalhes(copa) {
  // Reseta classe de temas de cores anteriores no contêiner principal
  detailsView.className = "details-section";
  // Adiciona a classe de tema da edição ativa (ex: tema-brasil, tema-italia)
  detailsView.classList.add(copa.classeTema);
  
  // Preenche dados gerais nos campos do template
  document.getElementById("details-year-tag").innerText = `Copa do Mundo de ${copa.ano}`;
  document.getElementById("details-title").innerText = `${copa.sede.toUpperCase()} ${copa.ano}`;
  document.getElementById("details-sede").innerText = copa.sede;
  document.getElementById("details-champ-name").innerText = copa.campeao;
  document.getElementById("details-vice-name").innerText = copa.vice;
  document.getElementById("details-artilheiro").innerText = copa.artilheiro;
  document.getElementById("details-amarelos").innerText = copa.cartoesAmarelos;
  document.getElementById("details-vermelhos").innerText = copa.cartoesVermelhos;
  document.getElementById("details-description").innerText = copa.descricao;
  
  // Carrega bandeira do campeão usando primeiro a imagem local da pasta img/bandeiras
  const champFlagImg = document.getElementById("details-champ-flag");
  champFlagImg.src = obterFonteBandeira(copa.campeao);
  
  // Carrega bandeira do vice usando primeiro a imagem local da pasta img/bandeiras
  const viceFlagImg = document.getElementById("details-vice-flag");
  viceFlagImg.src = obterFonteBandeira(copa.vice);
  
  // Mapeia os caminhos locais para as 3 fotos da galeria de detalhes
  const img1 = document.getElementById("details-img-1");
  const img2 = document.getElementById("details-img-2");
  const img3 = document.getElementById("details-img-3");
  
  const fotosDaCopa = imagensHistoricas[copa.ano] || imagensPadraoCopas;
  aplicarImagemComFallback(img1, fotosDaCopa[0], 0);
  aplicarImagemComFallback(img2, fotosDaCopa[1], 1);
  aplicarImagemComFallback(img3, fotosDaCopa[2], 2);
  
  // Preenche as legendas correspondentes de cada imagem
  document.getElementById("details-desc-1").innerText = copa.fotosLegendas[0];
  document.getElementById("details-desc-2").innerText = copa.fotosLegendas[1];
  document.getElementById("details-desc-3").innerText = copa.fotosLegendas[2];
  
  // Atualiza o balão de curiosidade do mascote com o dado da edição ativa
  definirCuriosidadeMascote(copa.curiosidade);
  
  // Esconde o painel da home e mostra o painel de detalhes
  homeView.classList.add("hidden");
  detailsView.classList.remove("hidden");
  
  // Rola a página suavemente até o topo da tela
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Oculta a página de detalhes e restaura a página principal */
function retornarParaHome() {
  detailsView.classList.add("hidden"); // Esconde painel de detalhes
  homeView.classList.remove("hidden"); // Mostra painel da Home
  
  // Restaura o foco ativo no item "Início" no cabeçalho
  atualizarMenuAtivo("nav-inicio");
}

/* Define o texto do balão de fala do mascote conforme a edição exibida */
function definirCuriosidadeMascote(textoCuriosidade) {
  const bubbleFixed = document.getElementById("bubble-fixed");
  bubbleFixed.innerText = textoCuriosidade; // Define texto no balão
}

/* MENU DE NAVEGAÇÃO E ACESSIBILIDADE */

/* Links do menu com scroll suave para as âncoras das seções internas */
const menuLinks = document.querySelectorAll(".nav-link"); // Busca todos os links do menu

menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Cancela comportamento padrão de salto abrupto
    
    navNavigation.classList.remove("open"); // Fecha menu móvel lateral
    btnMobileToggle.classList.remove("open"); // Reseta botão hamburguer
    
    // Se estiver exibindo detalhes de alguma copa, volta para a Home antes de rolar
    if (!detailsView.classList.contains("hidden")) {
      retornarParaHome();
      // Pequeno tempo para aguardar o render da home antes do scroll
      setTimeout(() => {
        executarScrollAnchor(link.getAttribute("href"));
      }, 50);
    } else {
      executarScrollAnchor(link.getAttribute("href")); // Rola diretamente
    }
  });
});

/* Executa rolagem suave considerando a altura de 80px do header fixo */
function executarScrollAnchor(targetId) {
  const targetElement = document.querySelector(targetId); // Localiza elemento destino
  if (targetElement) {
    const offset = 80; // Altura do cabeçalho fixo para compensar
    const elementPosition = targetElement.getBoundingClientRect().top; // Distância relativa ao topo visível
    const offsetPosition = elementPosition + window.scrollY - offset; // Distância absoluta corrigida
    
    // Rola para a coordenada calculada
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth" // Animação suave
    });
  }
}

// Botão de explorar história do hero rola até a galeria
document.getElementById("btn-explorar-historia").addEventListener("click", (e) => {
  e.preventDefault(); // Impede ação padrão do link
  executarScrollAnchor("#galeria"); // Rola para galeria
});

// Botão do hero para testar conhecimentos rola até o quiz
document.getElementById("btn-ir-quiz").addEventListener("click", (e) => {
  e.preventDefault(); // Impede ação padrão do link
  executarScrollAnchor("#quiz"); // Rola para quiz
});

// Escuta cliques no botão de voltar superior para retornar à home
btnVoltarHome.addEventListener("click", retornarParaHome);

// Alterna o estado aberto/fechado do menu móvel (hamburguer) no clique
btnMobileToggle.addEventListener("click", () => {
  btnMobileToggle.classList.toggle("open"); // Alterna animação do ícone
  navNavigation.classList.toggle("open"); // Desliza ou esconde menu lateral
});

/* Monitoramento de Scroll para Destaque de Menu Ativo */
function atualizarMenuAtivo(idAtivo) {
  menuLinks.forEach(link => {
    // Se for o ID do link ativo, adiciona classe de destaque, senão remove
    if (link.id === idAtivo) {
      link.classList.add("active"); // Adiciona sublinhado dourado
    } else {
      link.classList.remove("active"); // Remove sublinhado
    }
  });
}

// Escuta evento global de rolagem do mouse para destacar seção ativa
window.addEventListener("scroll", () => {
  // Se a tela de detalhes estiver ativa, não ativa destaque por scroll da home
  if (!detailsView.classList.contains("hidden")) return;
  
  const scrollPos = window.scrollY + 100; // Tolerância de leitura
  const inicioSec = document.getElementById("inicio");
  const galeriaSec = document.getElementById("galeria");
  const timelineSec = document.getElementById("timeline");
  const quizSec = document.getElementById("quiz");
  const curiosidadesSec = document.getElementById("curiosidades");
  
  // Verifica em qual faixa de pixel de altura da tela o scroll está
  if (scrollPos < galeriaSec.offsetTop - 100) {
    atualizarMenuAtivo("nav-inicio"); // Início ativo
  } else if (scrollPos >= galeriaSec.offsetTop - 100 && scrollPos < timelineSec.offsetTop - 100) {
    atualizarMenuAtivo("nav-copas"); // Galeria ativa
  } else if (scrollPos >= timelineSec.offsetTop - 100 && scrollPos < quizSec.offsetTop - 100) {
    atualizarMenuAtivo("nav-campeoes"); // Linha do tempo ativa
  } else if (scrollPos >= quizSec.offsetTop - 100 && scrollPos < curiosidadesSec.offsetTop - 100) {
    atualizarMenuAtivo("nav-quiz-link"); // Quiz ativo
  } else {
    atualizarMenuAtivo("nav-curiosidades"); // Origem ativa
  }
});


/* Controla o quiz: exibe perguntas, valida respostas e mostra o placar final */

// Base de dados contendo as 5 perguntas, alternativas e o índice correto
const quizPerguntas = [
  {
    pergunta: "Qual país sediou e venceu a primeira Copa do Mundo de Futebol em 1930?",
    opcoes: ["Brasil", "Argentina", "Uruguai", "França"],
    respostaCorreta: 2 // Índice correspondente a 'Uruguai'
  },
  {
    pergunta: "Quem é o recordista de gols em uma única edição de Copa, marcando 13 gols em 1958?",
    opcoes: ["Pelé", "Just Fontaine", "Gerd Müller", "Ronaldo Fenômeno"],
    respostaCorreta: 1 // Índice correspondente a 'Just Fontaine'
  },
  {
    pergunta: "Em qual edição da Copa do Mundo os cartões amarelos e vermelhos foram introduzidos oficialmente?",
    opcoes: ["Copa do Mundo de 1950", "Copa do Mundo de 1966", "Copa do Mundo de 1970", "Copa do Mundo de 1974"],
    respostaCorreta: 2 // Índice correspondente a 'Copa do Mundo de 1970'
  },
  {
    pergunta: "Qual país conquistou o primeiro título de Copa do Mundo de sua história no famoso 'Milagre de Berna' em 1954?",
    opcoes: ["Alemanha Ocidental", "Hungria", "Itália", "Uruguai"],
    respostaCorreta: 0 // Índice correspondente a 'Alemanha Ocidental'
  },
  {
    pergunta: "Na final histórica de 2022 no Catar, qual jogador francês marcou um hat-trick e levou a artilharia da edição?",
    opcoes: ["Zinedine Zidane", "Antoine Griezmann", "Kylian Mbappé", "Karim Benzema"],
    respostaCorreta: 2 // Índice correspondente a 'Kylian Mbappé'
  }
];

let indicePerguntaAtual = 0; // Controla qual pergunta está ativa (0 a 4)
let pontuacaoQuiz = 0; // Acumula o número de acertos do jogador

// Captura os elementos DOM referentes ao quiz
const quizStartScreen = document.getElementById("quiz-start-screen");
const quizQuestionScreen = document.getElementById("quiz-question-screen");
const quizResultsScreen = document.getElementById("quiz-results-screen");
const quizOptionsContainer = document.getElementById("quiz-options");
const quizQuestionText = document.getElementById("quiz-question-text");
const currentQuestionNumSpan = document.getElementById("current-question-num");
const quizBarFill = document.getElementById("quiz-bar-fill");
const btnNextQuestion = document.getElementById("btn-next-question");

// Adiciona eventos aos cliques de botões de fluxo do quiz
document.getElementById("btn-start-quiz").addEventListener("click", iniciarQuiz); // Inicia
btnNextQuestion.addEventListener("click", carregarProximaPergunta); // Avança pergunta
document.getElementById("btn-restart-quiz").addEventListener("click", iniciarQuiz); // Reinicia
document.getElementById("btn-quiz-home").addEventListener("click", () => {
  executarScrollAnchor("#inicio"); // Retorna ao banner hero
});

// Inicializa variáveis e alterna visualizações de tela para começar o quiz
function iniciarQuiz() {
  indicePerguntaAtual = 0; // Reseta contador
  pontuacaoQuiz = 0; // Reseta placar
  
  quizStartScreen.classList.add("hidden"); // Oculta tela inicial
  quizResultsScreen.classList.add("hidden"); // Oculta resultados
  quizQuestionScreen.classList.remove("hidden"); // Exibe tela de jogo
  
  exibirPergunta(); // Carrega a primeira pergunta
}

// Renderiza a pergunta ativa e gera dinamicamente os botões das alternativas
function exibirPergunta() {
  btnNextQuestion.classList.add("hidden"); // Oculta botão de avanço até responderem
  quizOptionsContainer.innerHTML = ""; // Limpa alternativas antigas
  
  const dadosPergunta = quizPerguntas[indicePerguntaAtual]; // Carrega objeto da pergunta ativa
  quizQuestionText.innerText = dadosPergunta.pergunta; // Define texto da pergunta
  currentQuestionNumSpan.innerText = indicePerguntaAtual + 1; // Define número indicador
  
  // Atualiza barra de progresso
  const progressoPorcentagem = ((indicePerguntaAtual + 1) / quizPerguntas.length) * 100;
  quizBarFill.style.width = `${progressoPorcentagem}%`; // Define largura preenchida
  
  // Loop para criar o botão de cada alternativa
  dadosPergunta.opcoes.forEach((opcao, index) => {
    const botaoOpcao = document.createElement("button"); // Cria elemento
    botaoOpcao.className = "quiz-option"; // Associa estilos
    botaoOpcao.innerText = opcao; // Define texto
    botaoOpcao.setAttribute("data-index", index); // Define identificador
    
    // Escuta evento de escolha da alternativa
    botaoOpcao.addEventListener("click", () => {
      validarRespostaSelecionada(index, botaoOpcao); // Valida escolha
    });
    
    quizOptionsContainer.appendChild(botaoOpcao); // Insere no contêiner
  });
}

// Verifica se a opção clicada está correta e dá o feedback visual correspondente
function validarRespostaSelecionada(indexSelecionado, botaoClicado) {
  const dadosPergunta = quizPerguntas[indicePerguntaAtual]; // Pergunta ativa
  const botoesOpcao = quizOptionsContainer.querySelectorAll(".quiz-option"); // Alternativas renderizadas
  
  // Percorre as alternativas para travar e destacar a correta em verde
  botoesOpcao.forEach(btn => {
    btn.disabled = true; // Desabilita botão para não clicar de novo
    
    const btnIndex = parseInt(btn.getAttribute("data-index"));
    
    // Destaca a alternativa correta em verde
    if (btnIndex === dadosPergunta.respostaCorreta) {
      btn.classList.add("correct");
    }
  });
  
  // Se o índice escolhido for o correto, incrementa acertos, senão destaca erro em vermelho
  if (indexSelecionado === dadosPergunta.respostaCorreta) {
    pontuacaoQuiz++; // Incrementa ponto
  } else {
    botaoClicado.classList.add("incorrect"); // Destaca em vermelho
  }
  
  btnNextQuestion.classList.remove("hidden"); // Mostra botão de avançar de pergunta
}

// Avança o índice da pergunta ativa ou encerra o quiz
function carregarProximaPergunta() {
  indicePerguntaAtual++; // Incrementa contador de pergunta
  
  if (indicePerguntaAtual < quizPerguntas.length) {
    exibirPergunta(); // Carrega nova pergunta
  } else {
    exibirResultadosQuiz(); // Encerra jogo e mostra placar final
  }
}

// Renderiza a tela de resultados finais, definindo emojis e textos com base nos acertos
function exibirResultadosQuiz() {
  quizQuestionScreen.classList.add("hidden"); // Esconde tela de jogo
  quizResultsScreen.classList.remove("hidden"); // Exibe tela de resultados
  
  const scoreText = document.getElementById("quiz-results-score");
  const feedbackText = document.getElementById("quiz-results-feedback");
  const badgeSpan = document.getElementById("results-badge");
  const titleText = document.getElementById("quiz-results-title");
  
  // Define texto numérico do placar
  scoreText.innerText = `Você acertou ${pontuacaoQuiz} de ${quizPerguntas.length} perguntas.`;
  
  // Valida o nível de acertos para dar feedback customizado
  if (pontuacaoQuiz === 5) {
    badgeSpan.innerText = "🏆"; // Emoji de troféu
    titleText.innerText = "Excelente! Craque Histórico!";
    feedbackText.innerText = "Você é um verdadeiro especialista e conhece tudo sobre as Copas do Mundo!";
  } else if (pontuacaoQuiz >= 3) {
    badgeSpan.innerText = "🥈"; // Emoji de medalha de prata
    titleText.innerText = "Muito Bom!";
    feedbackText.innerText = "Você fez uma ótima partida e tem um ótimo conhecimento sobre o torneio!";
  } else {
    badgeSpan.innerText = "⚽"; // Emoji de bola
    titleText.innerText = "Precisa de Treino!";
    feedbackText.innerText = "Vale a pena dar mais uma lida na nossa galeria e tentar o quiz de novo!";
  }
}

// Aguarda o carregamento do DOM para disparar a geração inicial dos cards
document.addEventListener("DOMContentLoaded", () => {
  gerarCardsGaleria(); // Cria os 22 cards na Home
});
