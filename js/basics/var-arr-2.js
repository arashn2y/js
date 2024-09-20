// Foglio esercizi 2

let vettore = [
    -100,
    2,
    3,
    4,
    5,
    90,
    80,
    100,
    100.23,
];
console.log("==================")
let v2 = [];
for (const cella of vettore) {
    v2.push(Math.abs(cella));
}
console.log(v2);

console.log("==================")

// Trovo il minimo
const min = Math.min(v2);
const min_index = v2.find(min);
console.log(vettore[min_index]);


// M ha il valore minimo
console.log(vettore[m_i]);

/*
for (let i = 0; i < vettore.length; i++) {

    let cella = vettore[i];     // Leggo la cella
    if (cella > max) {
        // Ho trovato un nuovo valore massimo
        max = cella;
    } else {
        // Non faccio niente
    }
}*/


// Determinare il valore massimo
let max = vettore[0];

for (const cella of vettore) {
    console.log(cella);
    if (cella > max) {
        // Ho trovato un nuovo valore massimo
        max = cella;
    } else {
        // Non faccio niente
    }
}

console.log(max);
