let array = [2,7,82,3]

let somma = array.reduce((x,y) => {
    console.log("Valore di x: " + x);
    console.log("Valore di y: " + y);
    return x+y;
});

let media = somma / array.length
 

let moltiplicazione = array.reduce((x,y) => {
    return x*y
});
 

let obbiettivo = 0
 

let ilPiuVicino = array.reduce((x,y) => {
    return (Math.abs(y-obbiettivo) <Math.abs(x-obbiettivo) ?y:x)
});

console.log(Math.max(...array));
console.log(Math.min(...array));
console.log(somma);
console.log(media);
console.log(moltiplicazione);
console.log(ilPiuVicino);