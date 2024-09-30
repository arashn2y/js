import { arrayData } from "./array.js";

// 7.1. Contare quante persone hanno lo stesso nome
const sortedByFirstName = arrayData.sort((first, family) =>
    first.localeCompare(family)
);
const firstNames = arrayData.map((person) => {
    return person.split(" ")[0];
});

function <nome>(<parametri>) {
    if (counter > 1)
        console.log(`The name ${name} appears ${counter} times.`)
    name = firstNames[index];
    counter = 1;
}

let firstNameCount = []

if (firstNames.length >= 1) {
    let name = firstNames[0], counter = 1;
    firstNameCount.push(name, counter)
    for (let index = 1; index <= firstNames.length; index++) {
        if (firstNames[index] === firstNames[index - 1]) counter++;
        else {
            
        }
    }
} else {
    // errore
}


console.log('There are no repating names within this group.')
