const squareWidth = 34.2; // cm
const squareLength = 0.004; // cm
const squareArea = squareWidth * squareLength;
// console.log(`l'area è: ${squareArea} `)

const conversionTimeToYears = 365.25 * 24 * 60 * 60 * 1000;
const birthDate = new Date('2004-12-17');
const now = Date.now();
const age = (now-birthDate)/conversionTimeToYears;
const isAdult = (age>18)

console.log(
    `La data di nascita è: ${birthDate.toLocaleDateString('en-GB')}, \n
    quindi ha ${Math.floor(age)} anni.\n
    è adulto? ${isAdult?'sì':'no'}`
);