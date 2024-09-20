function calculate_age (giorno, mese, anno){
    let ciao = 23;
    return (new Date()).getFullYear() - anno;
}

 
function perCento(eta){
    return 100 - eta;
}
function maggiorenne(eta){
    if(eta > 17){
        return "Maggiorenne";
    }else{
        return "Minorenne";
    }
}
const eta_in_anni = calculate_age(11,12,1981);
console.log("L'età è di: " + eta_in_anni);
console.log("Quanti anni mancanno per raggiungere i 100 anni: " + perCento(eta_in_anni));
console.log(maggiorenne(eta_in_anni));
console.log(ciao);