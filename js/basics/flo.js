const dataNascita = new Date('1999-06-25');
const dataAttuale = new Date();
const annoMaggiorene = 18;
const anno = dataAttuale.getFullYear() - dataNascita.getFullYear();

console.log(`La persona ha ${anno} anni.`);

if (anno >= annoMaggiorene) {
    console.log('La persona è maggiorenne.');
} else {
    console.log('La persona non è maggiorenne.');
}

let centoAnni = 100 - anno;
console.log("Per arrivare a 100 anni ne mancano: " + centoAnni);