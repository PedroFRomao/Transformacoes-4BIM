# Transformacoes-4BIM
<h1>Feito por: Nickolas Garcia e Pedro Ferraz
<h1>Cena</h1>
Este é um exemplo de código JavaScript que cria um jogo simples usando um quadrado e transformações no elemento canva.<br> O jogo permite que o usuário mova o quadrado e aplique as transformações nele.<br> A nossa cena é bem minimalista com somente um quadro verde, porém todas as transformações são realizadas através do mesmo.<br>
  
  ![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/25165ad8-c9ba-40c3-90f4-5b6f3686ce4b)

Ele se move com as setinhas do teclado e possui uma colisão em torno do canva para impedir que ele sai de cena. Para fazer as transformações só é necessario apertar as teclas dos números de 1 à 5.<br>



## Estrutura do código

O código é dividido em duas classes principais: `Quadrado` e `Transformacoes`.
![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/bf74b947-f1ae-4ba5-9186-29153374338e)

### Classe Quadrado

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/5d989a7c-1c71-46f2-b330-f274f1045bdb)

A classe `Quadrado` representa o quadrado que é desenhado no canva.<br> Ele possui dois métodos. Um para desenhar o quadrado e outro para verificar colisões quando o quadrado atinge as bordas do canva.

- `constructor(ctx, x, y, largura, altura)`: O construtor da classe inicializa o quadrado com o contexto de renderização, coordenadas iniciais, largura e altura.

- `desenhar()`: Desenha o quadrado no canva, que sempre é preenchido com a cor verde e também limpa o canva a cada quadro para evitar a sobreposição de quadrados.

- `checarColisao()`: Verifica se o quadrado colide com as bordas do canva e ajusta sua posição, se necessário.

### Classe Transformacoes

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/c4b3f2d3-48c3-4560-aa5c-66881f53c8ed)

A classe `Transformacoes` lida com transformações no canva, como translação, rotação, escala e transformação personalizada.

- `constructor(ctx)`: O construtor da classe inicializa a transformação com o contexto de renderização.

- `aplicarTranslacao(dx, dy)`: Aplica uma translação ao canva.

- `aplicarRotacao(angulo)`: Aplica uma rotação ao canva.

- `aplicarEscala(sx, sy)`: Aplica uma escala ao canva.

- `aplicarTransformacaoPersonalizada(a, b, c, d, e, f)`: Aplica uma transformação personalizada ao canva.

## Uso

O usuário pode interagir com o jogo pressionando as teclas do teclado para mover o quadrado e aplicar as transformações.

- Teclas de setas (Arrow keys) movem o quadrado.
- Teclas numéricas (1-5) aplicam diferentes transformações.
![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/88e3c727-8d66-4121-93f4-fa8ae46a1af9)


## Explicação de cada transformações

<h2>Translação:</h2><br>
A translação é uma transformação geométrica que move um objeto de uma posição para outra no espaço, mantendo sua forma e tamanho. Isso é feito aplicando um vetor de deslocamento a todos os pontos do objeto.<br>
Por exemplo, se você mover um quadrado 3 unidades para a direita e 2 unidades para cima, você está realizando uma translação desse quadrado.

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/5d3d0660-d682-4bd4-96d9-0c3abc62a596)


<h2>Rotação:</h2>
A rotação é uma transformação que gira um objeto em torno de um ponto de referência. O ponto em torno do qual o objeto gira é chamado de centro de rotação. <br>
A rotação é medida em graus ou radianos e pode ser no sentido horário ou anti-horário.<br> A rotação é usada para alterar a orientação de um objeto, mas não afeta sua posição no espaço.

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/46fa6aa4-d600-4877-a2c3-59967947ad20)


<h2>Escala:</h2>
A escala é uma transformação que aumenta ou diminui o tamanho de um objeto sem alterar sua forma. Pode ser aplicada uniformemente (aumentando ou diminuindo proporcionalmente em todas as direções) ou de maneira não uniforme (alterando as dimensões em uma direção específica). <br>
A escala é expressa como um fator, onde um fator de escala de 1 não altera o tamanho do objeto, um fator maior que 1 aumenta o tamanho e um fator menor que 1 diminui o tamanho do mesmo.

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/527368dc-6ec3-4966-8d38-6d32a73b73e9)

<h2>Transform (Transformação):</h2>
A transformação, em um contexto mais amplo, refere-se a qualquer alteração ou manipulação aplicada a um objeto em um sistema gráfico ou de modelagem. Isso pode incluir translação, rotação, escala, ou uma combinação dessas operações. As transformações são frequentemente usadas em computação gráfica e matemática para representar o posicionamento e a orientação de objetos no espaço tridimensional. <br>
As transformações são representadas por matrizes, o que permite a combinação de várias operações para criar transformações complexas.

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/d5aa0945-7cd7-4211-8c87-bd9f92d1d63b)


<h2>Clipping Path (Caminho de Recorte):</h2>
Um caminho de recorte é uma técnica utilizada em edição de imagens e design gráfico para isolar parte de uma imagem e ocultar o restante, uma espécie de máscara. <br>
Isso é útil quando você deseja separar um objeto ou parte de uma imagem de seu fundo ou para aplicar diferentes efeitos apenas a essa parte isolada. Um caminho de recorte é geralmente definido por meio de uma curva ou vetor que descreve a área que você deseja manter, e tudo fora desse caminho é cortado ou mascarado. <br>
Essa técnica é comumente usada em programas de edição de imagem, como o Adobe Photoshop, para criar recortes precisos de elementos de uma imagem.

![image](https://github.com/PedroFRomao/Transformacoes-4BIM/assets/120103357/2587ecb0-f492-4326-8599-bbe10525af6c)

