// Utilizzando un array, realizzare un piccolo anagrafe nomi-cognomi. Il programma prenderà in input
//un array di 'persone' e lo restituirà in ordine alfabetico. Inoltre dovrà anche restituire delle statistiche 
// di queste persone:
// 1 - Contatare quante persone hanno lo stesso nome
// 2 - Contare quante persone hanno lo stesso cognome

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
let arrayCognomi = [];

function nome(arrayData) {
    let arrayNomi = [];
    let nomeCompleto = "";
    let nome = "";

    for(let i = 0; i<arrayData.length; i++){
        nomeCompleto = arrayData[i];
        nome = nomeCompleto.split(" ")[0];
        arrayNomi.push(nome);
    }

    return arrayNomi;
}

function Cognomi(arrayData){
    let nomeCompleto = "";
    let nome = "";
    let cognome = "";
    arrayCognomi.forEach(cognome => {

    });

    for (const cognome of arrayCognomi) {
        
    }

    for(let i = 0; i<arrayData.length; i++){
        nomeCompleto = arrayData[i];
        cognome = nomeCompleto.split(" ")[1];
        arrayCognomi.push(cognome);
    }
    return arrayCognomi;
}
   
function nomiUnici(arrayNomi){
    return [...new Set(arrayNomi)]
}
    
function nomiUguali(nomSearch, arrayNomi){
    const contatore = [];
    nomSearch.forEach(element => {
        const quantitaNome = arrayNomi.filter(nome => nome === element).length;
        contatore.push({nomeTrovato: element, quantita: quantitaNome})
    });
        
    return contatore;
}

console.log(nome(arrayData));
console.log(Cognomi(arrayData));
const resultNomiUnici = nomiUnici(arrayNomi);
const resultQtNomi = nomiUguali(resultNomiUnici, arrayNomi);
console.log(resultNomiUnici);
console.log(resultQtNomi);