# 1. O que é o Projeto?
O CopaHistória é um portal interativo sobre as 22 edições das Copas do Mundo (de 1930 a 2022). Ele foi desenvolvido como uma Single Page Application (SPA), ou seja, um site de página única que simula a navegação de várias telas sem precisar recarregar o navegador.

O projeto possui:

Banner Principal (Hero): Com chamada para ação e o mascote Zico.
Introdução Histórica: Texto explicativo sobre a origem das Copas.
Linha do Tempo (Timeline): Apresentando 6 marcos históricos em formato cronológico.
Galeria de Edições: Grade com 22 cartões dinâmicos de cada edição da Copa.
Página de Detalhes: Carrega dinamicamente a história, as estatísticas disciplinares (cartões), artilheiro e 3 registros fotográficos locais da Copa selecionada, com cores temáticas baseadas no país campeão.
Quiz Interativo: Jogo de 5 perguntas com barra de progresso e pontuação final.

Mascote Zico: Elemento interativo em SVG que flutua, pulsa em animação CSS e exibe curiosidades dinâmicas em um balão de fala.SVG um formato de imagem vetorial. Em vez de usar pixels (como JPG ou PNG), ele usa equações matemáticas para desenhar linhas, formas e cores. Isso significa que você pode ampliá-lo ou reduzi-lo infinitamente sem perder a qualidade ou ficar "borrado".

# 2. Tecnologias Utilizadas: O que cada uma faz?
Pense nas três tecnologias como a construção de uma casa:

HTML (Estrutura/Tijolos): É o esqueleto do site. Define onde ficam os títulos, parágrafos, imagens e botões. Sem ele, não há conteúdo.
CSS (Aparência/Pintura/Decoração): É o acabamento. Define as cores (azul escuro e dourado), fontes, tamanhos, espaçamentos, layout em colunas (Grid/Flexbox) e as animações (como o mascote pulsando).
JavaScript (Lógica/Instalações Elétricas): É o cérebro. Define o comportamento e a interatividade. É ele quem detecta os cliques dos botões, calcula a pontuação do quiz, esconde/mostra seções e carrega as fotos e textos certos para cada ano da Copa.

# 3. Recordando:

Osite é 100% responsivo e se adapta a qualquer tamanho de tela (celulares, tablets e desktops). Desenvolvemos isso utilizando regras de layout modernas do CSS chamadas Flexbox e CSS Grid para posicionar os elementos de forma flexível.

Além disso, usamos Media Queries (regras CSS que detectam a largura da tela). Quando a tela do usuário é menor que 768 pixels (celular), o CSS reorganiza a grade de cards de 3 colunas para 1 coluna empilhada, esconde o menu horizontal padrão do topo e exibe um menu lateral (gaveta) acionado pelo botão hambúrguer de três linhas."

Onde olhar no código: No arquivo style.css, procure pela linha comentada /* RESPONSIVIDADE: adaptações para tablet... */ até o fim do arquivo. Você verá blocos como @media (max-width: 1024px) e @media (max-width: 768px).

# Como funciona a troca de telas para a página de detalhes?"


Em vez de criar arquivos separados como 1930.html, 1934.html, 1950.html... Mantemos o esqueleto da tela de detalhes dentro do próprio index.html com um identificador id="details-view" e a classe CSS .hidden (que aplica display: none no CSS para deixá-lo escondido).

Quando o usuário clica em 'Ver detalhes' em qualquer card, o JavaScript entra em ação: ele lê os dados daquela Copa específica do nosso banco de dados( banco de dados local ou estático), preenche as tags HTML com o texto e as fotos certas, remove a classe .hidden da tela de detalhes e adiciona a classe .hidden na tela principal. Isso dá a ilusão de troca de página instantânea, sem precisar fazer requisições lentas ao servidor."

Onde olhar no código: No arquivo script.js, veja a função abrirPaginaDetalhes(copa). Ela altera o .src das imagens, o .innerText dos textos e faz: homeView.classList.add("hidden"); detailsView.classList.remove("hidden");

# Como as cores mudam na página de detalhes de acordo com o país campeão?

No JavaScript, criamos um campo chamado classeTema em cada objeto de Copa (ex: tema-brasil para os anos em que o Brasil foi campeão, tema-uruguai para o Uruguai, etc.).

Quando o usuário clica em ver detalhes, o JS lê esse campo e aplica essa classe no contêiner da página de detalhes (detailsView.classList.add(copa.classeTema)). No CSS, criamos regras específicas para esses temas. Por exemplo, a classe .tema-brasil .details-hero-banner força a cor de fundo a ficar verde escura, enquanto a .tema-alemanha .details-hero-banner deixa o fundo preto suave. Isso cria uma identidade visual única e automática para cada edição."

Onde olhar no código: No arquivo style.css, na seção /* TEMAS POR PAÍS... */ e no script.js dentro da função abrirPaginaDetalhes.
Pergunta 4: "Como funciona a lógica do Quiz?"
IMPORTANT

# As 5 perguntas, as alternativas e o índice da resposta correta estão armazenados em uma lista (array de objetos) no JavaScript chamada quizPerguntas.

O JS gerencia o estado do jogo através de duas variáveis: a pergunta atual (indicePerguntaAtual) e a pontuação (pontuacaoQuiz). O script gera os botões das alternativas dinamicamente. Quando o usuário clica em uma alternativa, o JS compara o índice dela com a resposta certa. Se estiver correto, adiciona a classe .correct (que o CSS pinta de verde) e soma 1 ponto. Se estiver errado, pinta a clicada de vermelho com a classe .incorrect e destaca a correta. No final, o JS avalia a pontuação e exibe uma mensagem de feedback e emoji correspondentes."

Onde olhar no código: No arquivo script.js, na seção comentada /* Controla o quiz... */ na parte inferior do arquivo.
Pergunta 5: "Como o mascote Zico foi feito e como funciona a interação do balão de fala?"
IMPORTANT

O mascote Zico é um arquivo vetorial no formato SVG. Optamos por SVG porque ele é leve, responsivo e desenhado através de código matemático (linhas e círculos), garantindo nitidez absoluta em qualquer resolução de tela.

A pulsação suave é controlada puramente por CSS usando uma animação @keyframes chamada pulsa, que altera a escala (scale) de 1.0x para 1.08x repetidamente. Usamos a regra animation-play-state: paused no hover para que, quando o usuário colocar o mouse sobre o mascote, a pulsação pare e o balão de fala (que fica oculto por padrão com display: none) apareça. Na página de detalhes, o texto que aparece dentro desse balão é preenchido de forma dinâmica pelo JavaScript a partir do atributo curiosidade de cada Copa."

Onde olhar no código: No arquivo style.css, na seção /* ANIMAÇÃO DO MASCOTE... */ e no script.js na função definirCuriosidadeMascote().