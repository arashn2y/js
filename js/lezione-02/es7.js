/*
 *  Esercizio 7
    Utilizzando un array, realizzare un piccolo anagrafe nomi-cognomi.  Il programma prenderà in input un array di ‘persone’ e lo restituirà in ordine alfabetico. Inoltre dovrà anche restituire delle statistiche di queste persone: 
    Contare quante persone hanno lo stesso nome
    Contare quante persone hanno lo stesso cognome
    Determinare il nome più lungo
    Determinare il nome più corto
    Scrivere il numero di persone nell’elenco
    Scrivere a console l’elenco, scambiando l’ordine: non più nome-cognome ma cognome nome
 */

import { arrayData } from './array.js';

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
    console.log(`\n\ncountNameRep chiamata con ${search_name}`);
    // Tolgo tutte le persone che non iniziano con quel nome
    const occurrencies = data.filter(p => {
        console.log(`Valore di p: ${p}`);
        const pName = p.split(" ")[0];
        console.log(pName);
        return pName === search_name;
    });
    console.log(occurrencies);
        
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
 * Cerca la persona con il nome più lungo nella lista
 * @param {Array<string>} data Vettore con le persone
 * @returns Una stringa contenente il nome più lungo
 */
function getLongestName(data) {
    if (data.length === 0)
        return undefined;

    // Se c'è solo una persona restituisco il nome di quella persona, è sicuramente il più lungo
    if(data.length == 1) {
        return data[0].split(" ")[0];
    }

    let longestName = data[0].split(" ")[0];
    // Scorro il vettore con le persone
    for (const person of data) {
        // Ottengo il nome della persona corrente
        const pName = person.split(" ")[0];

        if(longestName.length < pName.length) {
            // Ho trovato un nuovo nome più lungo
            longestName = pName;
        }
    }

    return longestName;
}

function getLongestSurname(data) {
    if (data.length === 0)
        return undefined;

    // Se c'è solo una persona restituisco il nome di quella persona, è sicuramente il più lungo
    if(data.length == 1) {
        return data[0].split(" ")[1];
    }

    let longestSurname = data[0].split(" ")[1];
    // Scorro il vettore con le persone
    for (const person of data) {
        // Ottengo il nome della persona corrente
        const pSurname = person.split(" ")[1];

        if(longestSurname.length < pSurname.length) {
            // Ho trovato un nuovo nome più lungo
            longestSurname = pSurname;
        }
    }

    return longestSurname;
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
console.log(`Il nome più lungo e': ${getLongestName(arrayData)}`);
console.log(`Il cognome più lungo è: ${getLongestSurname(arrayData)}`);