const annoDiNascita = 1998;
const annoCorrente = 2024;
let etaInAnni = annoCorrente - annoDiNascita;
console.log("l eta corrente è: " + etaInAnni);

let quantoMancaAi100anni = 100 - etaInAnni;
console.log("l eta che manca ai 100 anni è: " + quantoMancaAi100anni);

if (etaInAnni >= 18) {
console.log("il ragazzo è maggiorenne")}
else {
console.log("il ragazzo è minorenne")
};