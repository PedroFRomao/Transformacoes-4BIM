# Transformacoes-4BIM
<h1>Feito por:Nickolas Garcia e Pedro Ferraz
<h1>Cena</h1>
Este é um exemplo de código JavaScript que cria um jogo simples usando um quadrado e transformações no elemento `<canvas>`. O jogo permite que o usuário mova o quadrado, aplique transformações nele.A nossa cena é bem minimalista com somente um quadro verde, porém, com somente ele já conseguimos fazer todas as transformações<br>
Ele se move com as setinhas do teclado e possui uma colisão em torno do canva para impedir que ele sai de cena, e para fazer as transformações só é necessario apertar as teclas 1 ao 5

## Estrutura do código

O código é dividido em duas classes principais: `Quadrado` e `Transformacoes`.

### Classe Quadrado

A classe `Quadrado` representa o quadrado que é desenhado no canvas. Ele possui métodos para desenhar o quadrado e verificar colisões quando o quadrado atinge as bordas do canvas.

- `constructor(ctx, x, y, largura, altura)`: O construtor da classe inicializa o quadrado com o contexto de renderização, coordenadas iniciais, largura e altura.

- `desenhar()`: Desenha o quadrado no canvas, preenchido com uma cor verde. Ele também limpa o canvas a cada quadro para evitar a sobreposição de quadrados.

- `checarColisao()`: Verifica se o quadrado colide com as bordas do canvas e ajusta sua posição, se necessário.

### Classe Transformacoes

A classe `Transformacoes` lida com transformações no canvas, como transladação, rotação, escala e transformação personalizada.

- `constructor(ctx)`: O construtor da classe inicializa a transformação com o contexto de renderização.

- `aplicarTranslacao(dx, dy)`: Aplica uma translação ao canvas.

- `aplicarRotacao(angulo)`: Aplica uma rotação ao canvas.

- `aplicarEscala(sx, sy)`: Aplica uma escala ao canvas.

- `aplicarTransformacaoPersonalizada(a, b, c, d, e, f)`: Aplica uma transformação personalizada ao canvas.

## Uso

O código também inclui a configuração inicial do canvas, a criação de instâncias do quadrado e das transformações, além de um loop de jogo usando `requestAnimationFrame`. O usuário pode interagir com o jogo pressionando teclas do teclado para mover o quadrado e aplicar transformações.

- Teclas de setas (Arrow keys) movem o quadrado.
- Teclas numéricas (1-4) aplicam diferentes transformações.
- A tecla "5" cria uma máscara circular.

## Como executar

Para executar este código, você precisa de um arquivo HTML que inclua um elemento `<canvas>` com o ID "canva". Certifique-se de que o JavaScript esteja incluído no arquivo HTML. O código é ativado pelo evento de pressionar as teclas no teclado.

<h1>Explicação de cada transformações</h1>

<h2>Translação:</h2><br>
A translação é uma transformação geométrica que move um objeto de uma posição para outra no espaço, mantendo sua forma e tamanho. Isso é feito aplicando um vetor de deslocamento a todos os pontos do objeto.<br>
Por exemplo, se você mover um quadrado 3 unidades para a direita e 2 unidades para cima, você está realizando uma translação desse quadrado.
<h2>Rotação:</h2>
A rotação é uma transformação que gira um objeto em torno de um ponto de referência. O ponto em torno do qual o objeto gira é chamado de centro de rotação. <br>
A rotação é medida em graus ou radianos e pode ser no sentido horário ou anti-horário. A rotação é usada para alterar a orientação de um objeto, mas não afeta sua posição no espaço.
<h2>Escala:</h2>
A escala é uma transformação que aumenta ou diminui o tamanho de um objeto sem alterar sua forma. Pode ser aplicada uniformemente (aumentando ou diminuindo proporcionalmente em todas as direções) ou de maneira não uniforme (alterando as dimensões em uma direção específica). <br>
A escala é expressa como um fator, onde um fator de escala de 1 não altera o tamanho do objeto, um fator maior que 1 aumenta o tamanho e um fator menor que 1 diminui o tamanho.
<h2>Transform (Transformação):</h2>
A transformação, em um contexto mais amplo, refere-se a qualquer alteração ou manipulação aplicada a um objeto em um sistema gráfico ou de modelagem. Isso pode incluir translação, rotação, escala, ou uma combinação dessas operações. As transformações são frequentemente usadas em computação gráfica e matemática para representar o posicionamento e a orientação de objetos no espaço tridimensional. <br>
As transformações são representadas por matrizes, o que permite a combinação de várias operações para criar transformações complexas.
<h2>Clipping Path (Caminho de Recorte):</h2>
Um caminho de recorte é uma técnica utilizada em edição de imagens e design gráfico para isolar parte de uma imagem e ocultar o restante. <br>
Isso é útil quando você deseja separar um objeto ou parte de uma imagem de seu fundo ou para aplicar diferentes efeitos apenas a essa parte isolada. Um caminho de recorte é geralmente definido por meio de uma curva ou vetor que descreve a área que você deseja manter, e tudo fora desse caminho é cortado ou mascarado. <br>
Essa técnica é comumente usada em programas de edição de imagem, como o Adobe Photoshop, para criar recortes precisos de elementos de uma imagem.
