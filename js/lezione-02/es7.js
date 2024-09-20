/*
 * Esercizio 7
Utilizzando un array, realizzare un piccolo anagrafe nomi-cognomi.  Il programma prenderà in input un array di ‘persone’ e lo restituirà in ordine alfabetico. Inoltre dovrà anche restituire delle statistiche di queste persone: 
Contare quante persone hanno lo stesso nome
Contare quante persone hanno lo stesso cognome
Determinare il nome più lungo
Determinare il nome più corto
Scrivere il numero di persone nell’elenco
Scrivere a console l’elenco, scambiando l’ordine: non più nome-cognome ma cognome nome
 */

const arrayData = [
    "Marco Rossi",
  "Luca Bianchi",
  "Sara Verdi",
  "Giulia Rossi",
  "Francesco Neri",
  "Luca Verdi",
  "Marco Bianchi",
  "Elena Russo",
  "Maria Neri",
  "Giulia Russo",
  "Francesco Verdi",
  "Sara Bianchi",
  "Luca Rossi",
  "Marco Neri",
  "Elena Rossi",
  "Maria Bianchi",
  "Giulia Verdi",
  "Francesco Bianchi",
  "Sara Russo",
  "Elena Verdi"
]

/**
 * Scrive i dati in forma ordinata
 * @param {Dati da scrivere ordinati} data 
 */
function writeSorted(data) {
    // Creo un nuovo vettore perchè non voglio modificare quello originale
    const sorted = [...data];
    sorted.sort();
    console.log(sorted);
}

/**
 * Conta le ripetizioni di un determinato nome nella lista di tutte le persone
 * @param {Array<string>} data Lista di tutte le persone
 * @param {string} search_name Nome da cercare
 */
function countNameRep(search_name, data) {
    // Tolgo tutte le persone che non iniziano con quel nome
    const occurrencies = data.filter(p => {
        const pName = p.split(" ")[0];
        return pName === search_name;
    });
        
    return occurrencies.length;
}

/**
 * Conta le ripetizioni di un determinato cognome nella lista di tutte le persone
 * @param {string} surname Cognome da cercare
 * @param {Array<string>} data Lista delle persone
 */
function countSurnameRep(surname, data) {
    // Tolgo tutte le persone che non iniziano con quel nome
    const occurrencies = data.filter(p => {
        const pSurname = p.split(" ")[1];
        return pSurname === surname;
    });

    return occurrencies.length;
}

/**
 * Formatta un nuovo vettore con le stesse persone ma scritte con il formato 'cognome nome'
 * @param {Array<string>} data Lista di tutte le persone
 * @returns Un nuovo vettore con le persone ribaltate: 'cognome nome'
 */
function getReversed(data) {
    return data.map(person => {
        const tk = person.split(" ");
        const name = tk[0];
        const surname = tk[1];

        return `${surname} ${name}`;
    })
}

writeSorted(arrayData);
// Vettore che contiene i nomi già analizzati
let alreadyDoneNames = [];
// Vettore con i cognomi già analizzati
let alreadyDoneSurnames = [];

for (const person of arrayData) {
    const pName = person.split(" ")[0];
    const pSurname = person.split(" ")[1];

    // Analizzo il nome solo se non lo ho ancora fatto
    if(!alreadyDoneNames.includes(pName)){
        console.log(`Il numero di persone che si chiamano ${pName} e': ${countNameRep(pName, arrayData)}`);
        alreadyDoneNames.push(pName);
    }

    // Analizzo il cognome solo se non lo ho ancora fatto
    if(!alreadyDoneSurnames.includes(pSurname)) {
        console.log(`Il numero di persone che hanno cognome ${pSurname} e': ${countSurnameRep(pSurname, arrayData)}`);
        alreadyDoneSurnames.push(pSurname);
    }
}

console.log(`Le persone 'ribaltate' sono: ${getReversed(arrayData)}`);
console.log(`Nell'elenco sono presenti ${arrayData.length} persone`);