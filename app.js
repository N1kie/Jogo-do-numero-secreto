function textoDeTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        let palavraTentativas = contador > 1 ? 'tentativas' : 'tentativa';
        textoDeTela('h1', 'Finalmente voce acertou, voce descobriu com ' + contador + ' ' + palavraTentativas + '!');
        textoDeTela('p', ' ');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        contador ++;
        if (chute > numeroAleatorio) {
            textoDeTela('p','o numero secreto é menor que ' + chute);
        } else {
            textoDeTela('p','o numero secreto é maior que ' + chute);
        }
        limparCampo()
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicia() {
    limparCampo()
    contador = 1;
    numeroAleatorio = geraAleatorio();
    console.log(numeroAleatorio)
    textoDeTela('h1', 'jogo do numero secreto');
    textoDeTela('p', 'Escolha um numero entre 1 e 100');
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function geraAleatorio() {
    return parseInt(Math.random()*100 + 1);
}

let contador = 1;
let numeroAleatorio = geraAleatorio();
textoDeTela('h1', 'jogo do numero secreto');
textoDeTela('p', 'Escolha um numero entre 1 e 100');
console.log(numeroAleatorio);
