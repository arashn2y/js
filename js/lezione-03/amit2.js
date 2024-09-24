import { data } from "./data.js";
let personData = JSON.parse(data);
const birthDate = new Date(personData.birthDate);
// Conversion factor of milliseconds to years
const ageConversion = 1000*60*60*24*365;
const age = Math.floor((Date.now() - birthDate)/ageConversion);
// console.log('age = ',age);
console.log('La persona inserita ha codice identificativo', personData.id,
    `\nSi chiama ${personData.firstName}, ha ${age} anni, vive in ${personData.address}. E’ nato il ${birthDate.toLocaleDateString()}.`
);