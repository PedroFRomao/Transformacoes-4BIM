class Quadrado {
    constructor(ctx, x, y, largura, altura) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }

    desenhar() {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ctx.fillStyle = "green";
            this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
        } 
        
    checarColisao(){
        let colisao = 1;
        if (this.x < 0 ){
            colisao = 0;
            this.x += 10;
        }
        if ((this.x + this.largura) > canvas.width){
            colisao = 0;
            this.x -= 10;
        }
        if (this.y < 0 ){
            colisao = 0;
            this.y += 10;
        }
        if ((this.y + this.altura) > canvas.height){
            colisao = 0;
            this.y -= 10;
        }
        if (colisao > 0){
            quadrado.desenhar();
        }
    }
}

class Transformacoes {
    constructor(ctx) {
        this.ctx = ctx;
    }

    aplicarTranslacao(dx, dy) {
        this.ctx.translate(dx, dy);
        desenhar();
    }

    aplicarRotacao(angulo) {
        this.ctx.rotate(angulo);
        desenhar();
    }

    aplicarEscala(sx, sy) {
        this.ctx.scale(sx, sy);
        desenhar();
    }

    aplicarTransform(a, b, c, d, e, f) {
        this.ctx.transform(a, b, c, d, e, f);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        desenhar();
    }

    aplicarClippingPath() {
        ctx.beginPath();
        ctx.arc(quadrado.x, quadrado.y, 230, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.clip();
    }  
}

let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");

let quadrado = new Quadrado(ctx, 500, 250, 50, 50);
let transformacoes = new Transformacoes(ctx);

function game() {
    quadrado.checarColisao();
    requestAnimationFrame(game);
}

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        quadrado.x -= 10; // Mover para a esquerda
    } else if (event.key === "ArrowRight") {
        quadrado.x += 10; // Mover para a direita
    } else if (event.key === "ArrowUp") {
        quadrado.y -= 10; // Mover para cima
    } else if (event.key === "ArrowDown") {
        quadrado.y += 10; // Mover para baixo
    } else if (event.key === "1") {
        transformacoes.aplicarTranslacao(10, 10);
    } else if (event.key === "2") {
        transformacoes.aplicarRotacao(Math.PI / 180);
    } else if (event.key === "3") {
        transformacoes.aplicarEscala(1.2, 1.2);
    } else if (event.key === "4") {
        transformacoes.aplicarTransformacaoPersonalizada(1.1, 1, 0, 1.1, 10, 0);
    } else if (event.key === "5") {
        ctx.beginPath();
        ctx.arc(quadrado.x, quadrado.y, 230, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.clip();
    }
});

game();