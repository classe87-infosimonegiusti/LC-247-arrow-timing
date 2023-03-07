const myTarget = document.getElementById('target');
//const fermaContatoreDom = document.getElementById('fermaContatore');

let secondi = 0;

const riferimentoIntervall = setInterval(funzioneDaEseguire, 1000);

function funzioneDaEseguire() {
    secondi++;

    if (secondi >= 5) {
        clearInterval(riferimentoIntervall);
    }

    myTarget.innerHTML = `Sono passati ${secondi} secondi dall inizio della visita`;
}

/*
fermaContatoreDom.addEventListener('click', function () {
    clearInterval(riferimentoIntervall);
});
*/