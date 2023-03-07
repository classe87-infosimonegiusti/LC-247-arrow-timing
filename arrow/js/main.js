/* THIS */

console.log(this);

const myTarget = document.getElementById('target');

/*
myTarget.addEventListener("click", function() {
    console.log(this);
}); 
*/

myTarget.addEventListener("click", () => console.log(this)); 



// FUNZIONI E LORO DEFINIZIONE

//soggeta a hoisting
function somma(a, b) {
    return a+b;
}

//non soggetta ad hoisting
const mysomma = function (a,b) {
    return a+b;
}

//arrow function su più righe (non soggetta ad hoisting) - vedi sopra per la funzionalità
const sommaArrow = (a,b) => {
    return a+b;
}

//arrow function su una riga (non soggetta ad hoisting) - return implicito
const sommaArrowSuUnaRiga = (a,b) => a+b;


const arrowFunctionSenzaParamenti = () => 'ciao'

const arrowFunctionConUnParametro = (numero) => numero * 2;
const arrowFunctionConUnParametroSenzaParentesi = numero => numero * 2;

//vedi riga 41, ma con un approccio "tradizionale"
function funzioneUnParametro (numero) {
    return numero * 2;
}

console.log(somma(5,3)); //8 
console.log(mysomma(2,4)); //6
console.log(sommaArrow(1,3)); //4
console.log(sommaArrowSuUnaRiga(2,3)); //5
console.log(arrowFunctionConUnParametroSenzaParentesi(10)); //20