const tempoDiCottura = parseInt(prompt('Inserisci il tempo di cottura, in secondi, della pasta'));

const avvisoCinqueSecondiPrima = tempoDiCottura - 5;

setTimeout(function() {
    alert("scola la pasta!!!");
}, tempoDiCottura * 1000);


setTimeout(function() {
    alert("Sta per scadere");
}, avvisoCinqueSecondiPrima * 1000);