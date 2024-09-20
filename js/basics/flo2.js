let array = [12, 14, 5, 7, 9, 0];
let max = array[0];
let min = array[0];
let sum = 0;
let prodotto = 1;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}

for (let num of array) {
  if (num !== 0) {
    prodotto *= num;
  }
}

let closestToZero = array.reduce((min, current) => {
  return Math.abs(current) < Math.abs(min) ? current : min;
}, array[0]);

let mediaValori = sum / array.length;

console.log("Il numero più grande è: " + max);
console.log("Il numero più piccolo è: " + min);
console.log("La somma del array è: " + sum);
console.log("La media dei valori è: " + mediaValori);
console.log("Il prodotto dei valori è: " + prodotto);
console.log("Il numero più vicino a 0 è: " + closestToZero);