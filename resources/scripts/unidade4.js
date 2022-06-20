
// PG 143
const botao = document.getElementById('botao-regras');

if (botao) {
    botao.addEventListener('click', () => {
        regrasOcultas = document.querySelectorAll('.regras-oculta')
        if (regrasOcultas.length >= 1) {
            // for (var i = 0; i < regrasOcultas.length; i++) {
            regrasOcultas[regrasOcultas.length - regrasOcultas.length].classList.remove('regras-oculta');
            // }
        }
    })
}

// PG 144
const botaoBox = document.getElementById('botao-box');
if (botaoBox) {
    botaoBox.addEventListener('click', () => {
        boxOcultados = document.querySelectorAll('.regras-oculta')
        if (boxOcultados.length >= 1) {
            boxOcultados[boxOcultados.length - boxOcultados.length].classList.remove('regras-oculta');
        }
    })
}

// PG 150
const botaoRegrasMdc1 = document.getElementById('botao-mdc-1');
if (botaoRegrasMdc1) {
    botaoRegrasMdc1.addEventListener('click', () => {
        regrasMdc1Ocultados = document.querySelectorAll('.mdc1')
        var cont = regrasMdc1Ocultados.length;
        if (regrasMdc1Ocultados.length >= 1) {
            regrasMdc1Ocultados[regrasMdc1Ocultados.length - cont].classList.remove('regras-oculta');
            regrasMdc1Ocultados[regrasMdc1Ocultados.length - cont].classList.remove('mdc1');
            cont--;
        }
    })
}

const botaoRegrasMdc2 = document.getElementById('botao-mdc-2');
if (botaoRegrasMdc2) {
    botaoRegrasMdc2.addEventListener('click', () => {
        regrasMdc1Ocultados = document.querySelectorAll('.mdc2')
        var cont2 = regrasMdc1Ocultados.length;
        if (regrasMdc1Ocultados.length >= 1) {
            regrasMdc1Ocultados[regrasMdc1Ocultados.length - cont2].classList.remove('regras-oculta');
            regrasMdc1Ocultados[regrasMdc1Ocultados.length - cont2].classList.remove('mdc2');
            cont2--;
        }
    })
}

const botaoRegrasMdc20 = document.getElementById('botao-mdc20');
if (botaoRegrasMdc20) {
    botaoRegrasMdc20.addEventListener('click', () => {
        regrasMdc2OcultadosEsquerda = document.querySelectorAll('.mdc20-esquerda')
        regrasMdc2OcultadosDireita = document.querySelectorAll('.mdc20-direita')
        var contEsquerda = regrasMdc2OcultadosEsquerda.length;
        var contDireita = regrasMdc2OcultadosDireita.length;
        if (regrasMdc2OcultadosEsquerda.length >= 1) {

            regrasMdc2OcultadosEsquerda[regrasMdc2OcultadosEsquerda.length - contEsquerda].classList.remove('regras-oculta');
            regrasMdc2OcultadosEsquerda[regrasMdc2OcultadosEsquerda.length - contEsquerda].classList.remove('mdc20-esquerda');
            contEsquerda--;

            if (regrasMdc2OcultadosDireita.length > 0) {
                regrasMdc2OcultadosDireita[regrasMdc2OcultadosDireita.length - contDireita].classList.remove('regras-oculta');
                regrasMdc2OcultadosDireita[regrasMdc2OcultadosDireita.length - contDireita].classList.remove('mdc20-direita');
                contDireita--;
            }
        }
    })
}

const botaoRegrasMdc30 = document.getElementById('botao-mdc30');
if (botaoRegrasMdc30) {
    botaoRegrasMdc30.addEventListener('click', () => {
        regrasMdc3OcultadosEsquerda = document.querySelectorAll('.mdc30-esquerda')
        regrasMdc3OcultadosDireita = document.querySelectorAll('.mdc30-direita')
        var contEsquerda = regrasMdc3OcultadosEsquerda.length;
        var contDireita = regrasMdc3OcultadosDireita.length;
        if (regrasMdc3OcultadosEsquerda.length >= 1) {

            regrasMdc3OcultadosEsquerda[regrasMdc3OcultadosEsquerda.length - contEsquerda].classList.remove('regras-oculta');
            regrasMdc3OcultadosEsquerda[regrasMdc3OcultadosEsquerda.length - contEsquerda].classList.remove('mdc30-esquerda');
            contEsquerda--;

            if (regrasMdc3OcultadosDireita.length > 0) {
                regrasMdc3OcultadosDireita[regrasMdc3OcultadosDireita.length - contDireita].classList.remove('regras-oculta');
                regrasMdc3OcultadosDireita[regrasMdc3OcultadosDireita.length - contDireita].classList.remove('mdc30-direita');
                contDireita--;
            }
        }
    })
}

const botaoRegrasMdc18 = document.getElementById('botao-mdc18');
if (botaoRegrasMdc18) {
    botaoRegrasMdc18.addEventListener('click', () => {
        regrasMdc18cultadosEsquerda = document.querySelectorAll('.mdc18-esquerda')
        regrasMdc18cultadosDireita = document.querySelectorAll('.mdc18-direita')
        var contEsquerda = regrasMdc18cultadosEsquerda.length;
        var contDireita = regrasMdc18cultadosDireita.length;
        if (regrasMdc18cultadosEsquerda.length >= 1) {

            regrasMdc18cultadosEsquerda[regrasMdc18cultadosEsquerda.length - contEsquerda].classList.remove('regras-oculta');
            regrasMdc18cultadosEsquerda[regrasMdc18cultadosEsquerda.length - contEsquerda].classList.remove('mdc18-esquerda');
            contEsquerda--;

            if (regrasMdc18cultadosDireita.length > 0) {
                regrasMdc18cultadosDireita[regrasMdc18cultadosDireita.length - contDireita].classList.remove('regras-oculta');
                regrasMdc18cultadosDireita[regrasMdc18cultadosDireita.length - contDireita].classList.remove('mdc18-direita');
                contDireita--;
            }
        }
    })
}

const botaoRegrasMdc36 = document.getElementById('botao-mdc36');
if (botaoRegrasMdc36) {
    botaoRegrasMdc36.addEventListener('click', () => {
        regrasMdc36cultadosEsquerda = document.querySelectorAll('.mdc36-esquerda')
        regrasMdc36cultadosDireita = document.querySelectorAll('.mdc36-direita')
        var contEsquerda = regrasMdc36cultadosEsquerda.length;
        var contDireita = regrasMdc36cultadosDireita.length;
        if (regrasMdc36cultadosEsquerda.length >= 1) {

            regrasMdc36cultadosEsquerda[regrasMdc36cultadosEsquerda.length - contEsquerda].classList.remove('regras-oculta');
            regrasMdc36cultadosEsquerda[regrasMdc36cultadosEsquerda.length - contEsquerda].classList.remove('mdc36-esquerda');
            contEsquerda--;

            if (regrasMdc36cultadosDireita.length > 0) {
                regrasMdc36cultadosDireita[regrasMdc36cultadosDireita.length - contDireita].classList.remove('regras-oculta');
                regrasMdc36cultadosDireita[regrasMdc36cultadosDireita.length - contDireita].classList.remove('mdc36-direita');
                contDireita--;
            }
        }
    })
}

const botaoRegrasMdc54 = document.getElementById('botao-mdc54');
if (botaoRegrasMdc54) {
    botaoRegrasMdc54.addEventListener('click', () => {
        regrasMdc54cultadosEsquerda = document.querySelectorAll('.mdc54-esquerda')
        regrasMdc54cultadosDireita = document.querySelectorAll('.mdc54-direita')
        var contEsquerda = regrasMdc54cultadosEsquerda.length;
        var contDireita = regrasMdc54cultadosDireita.length;
        if (regrasMdc54cultadosEsquerda.length >= 1) {

            regrasMdc54cultadosEsquerda[regrasMdc54cultadosEsquerda.length - contEsquerda].classList.remove('regras-oculta');
            regrasMdc54cultadosEsquerda[regrasMdc54cultadosEsquerda.length - contEsquerda].classList.remove('mdc54-esquerda');
            contEsquerda--;

            if (regrasMdc54cultadosDireita.length > 0) {
                regrasMdc54cultadosDireita[regrasMdc54cultadosDireita.length - contDireita].classList.remove('regras-oculta');
                regrasMdc54cultadosDireita[regrasMdc54cultadosDireita.length - contDireita].classList.remove('mdc54-direita');
                contDireita--;
            }
        }
    })
}


const botaoRegrasMdc4612 = document.getElementById('botao-mdc4612');
if (botaoRegrasMdc4612) {
    botaoRegrasMdc4612.addEventListener('click', () => {
        regrasMdc4612cultadosEsquerda = document.querySelectorAll('.mdc4612-esquerda')
        regrasMdc4612cultadosDireita = document.querySelectorAll('.mdc4612-direita')
        var contEsquerda = regrasMdc4612cultadosEsquerda.length;
        var contDireita = regrasMdc4612cultadosDireita.length;
        if (regrasMdc4612cultadosEsquerda.length >= 1) {

            regrasMdc4612cultadosEsquerda[regrasMdc4612cultadosEsquerda.length - contEsquerda].classList.remove('regras-oculta');
            regrasMdc4612cultadosEsquerda[regrasMdc4612cultadosEsquerda.length - contEsquerda].classList.remove('mdc4612-esquerda');
            contEsquerda--;

            if (regrasMdc4612cultadosDireita.length > 0) {
                regrasMdc4612cultadosDireita[regrasMdc4612cultadosDireita.length - contDireita].classList.remove('regras-oculta');
                regrasMdc4612cultadosDireita[regrasMdc4612cultadosDireita.length - contDireita].classList.remove('mdc4612-direita');
                contDireita--;
            }
        }
    })
}
// PG 158

const botaoTang = document.getElementById('alert-tang');
botaoTang.addEventListener('click', () => {
    swal({
        title: "T’ang (618-906)",
        text: "Durante a dinastia Tang, a China conheceu uma fase de grande prosperidade e progresso técnico e material. Entre as inovações que marcaram o período está o aparecimento do primeiro relógio mecânico, no ano 732, inventado por um monge chinês.",
        icon: "warning",
    });
});
