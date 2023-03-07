const targetDom = document.getElementById('target');

let secondi = 10;

const intervallo = 1000;

const clock = setInterval(function() {

    if (secondi == 0) {
        clearInterval(clock);
        targetDom.innerHTML = "Buon anno!";
    } else {
        targetDom.innerHTML = secondi;
        secondi--;
    }

}, intervallo);

