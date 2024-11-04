
function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    // operador diverente => !=
    if(elemento != null && elemento.localName === 'audio' ) {
        elemento.play();
    }
    else {
        console.log('Elementonão encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        //console.log(evento.code == 'Space');
        if(evento.code ==='Space' || evento.code === 'entrer') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}