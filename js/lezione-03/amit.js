const number = 3;    
console.log("Ciao");  

setInterval(() => {
    console.log("Hello word");
}, 3*1000);

const persona = {
    nome: "Gabriele",
    cognome: "Cavallo"
}

const js = JSON.stringify(persona);
console.log(js);
const persona2 = JSON.parse(js);
