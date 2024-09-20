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

const a = area(baseRettangolo, altezzaRettangolo);

let b = 24;
let c = 23;
console.log("L'area del rettangolo è: " + a);

let ilmiovettore = [];
let vettore2 = [
    23.23,
    234.90,
    b * c
]

console.log(vettore2);
console.log(ilmiovettore.length);
ilmiovettore.push(123);
ilmiovettore.push(28);
console.log(ilmiovettore.length);
console.log(ilmiovettore);
ilmiovettore.pop();

console.log(ilmiovettore.length);
console.log(ilmiovettore[0]);
console.log(ilmiovettore);