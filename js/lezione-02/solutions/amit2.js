import {arrayData} from '../array.js';

// 7.1. Contare quante persone hanno lo stesso nome
const firstNames = arrayData.map((person) => {
    return person.split(" ")[0];
});

let namesCount = [];
let firstNamesToCut = [...firstNames];

while (firstNamesToCut.length > 0) {
    firstNamesToCut = [...countAndCutArray(firstNamesToCut)]
}

namesCount.forEach(nameCount => {
    console.log(`\nThe name ${nameCount[0]} repeats ${nameCount[1]} times in the array.\n`);
});

function countAndCutArray(array) {
    console.log(array);
    const nameToCount = array[0];
    // Create an array of the values equal to the first 
    const checkArray = array.filter(firstName => {
        return firstName === nameToCount;
    });
    // Count the name
    const count = checkArray.length;
    // Save the count if the name repeats more than once
    if (count > 1) {
        namesCount.push([nameToCount, count]);
    }
    // Cut the array
    const cutArray = array.filter(firstName => {
        return firstName !== nameToCount;
    });
    // Return the array without the checked name
    return cutArray;
}