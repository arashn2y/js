/*
    Corso frontend developer - Engim Artigianelli
    Esercizi su Variabili, Vettori, Commenti, Stringhe
*/

console.log("Test programma");

const names = [
    "Florin",
    "Luca",
    "Marco",
    "Talencia",
    "Amit",
    "Tatiana"
]


for (let i=0;i < names.length; i++) {
    console.log("Ciao " + names[i]);
}

console.log("Benvenuti al corso!!");

// Esercizio 1: Base e altezza
let baseRettangolo= 15.5;
let altezzaRettangolo = 16.33;
const areaRettangolo = baseRettangolo * altezzaRettangolo;
//console.log("L'area del rettangolo è: " + areaRettangolo);
console.log("L'area del rettangolo è: ");
console.log(areaRettangolo);

// Modo con function
function area(base, altezza) {
    return base * altezza;
}

const area = area(baseRettangolo, altezzaRettangolo);

console.log("L'area del rettangolo è: " + area);