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
    "Elena Verdi",
  ];
  
  function estraiPrimoNome(fullName) {
    return fullName.split(" ")[0];
  }
  
  function estraiCognome(fullName) {
    return fullName.split(" ")[1];
  }
  
  function aggiornaContatore(acc, key) {
    console.log(`aggiornaContatore \n Valore di acc: ${JSON.stringify(acc)}\nValore di key: ${JSON.stringify(key)}`);
    if (acc[key] === undefined) {
      acc[key] = 1;
    } else {
      acc[key] = acc[key] + 1;
    }

    //console.log(acc);
  }
  
  function contaNomi(array) {
    const acc = {};
    array.forEach((fullName) => {
      const firstName = estraiPrimoNome(fullName);
      aggiornaContatore(acc, firstName);
      console.log(`Valore di acc: ${JSON.stringify(acc)}`);
    });
    return acc;
  }
  
  function contaCognomi(array) {
    const acc = {};
    array.forEach((fullName) => {
      const lastName = estraiCognome(fullName);
      aggiornaContatore(acc, lastName);
    });
    return acc;
  }
  
  function reverseArray(array) {
    return array.reverse();
  }
  
  function nomeLungo(array) {
    let longestName = estraiPrimoNome(array[0]);
    array.forEach((fullName) => {
      const firstName = estraiPrimoNome(fullName);
      if (firstName.length > longestName.length) {
        longestName = firstName;
      }
    });
    return longestName;
  }
  
  function nomeCorto(array) {
    let shortestName = estraiPrimoNome(array[0]);
    array.forEach((fullName) => {
      const firstName = estraiPrimoNome(fullName);
      if (firstName.length < shortestName.length) {
        shortestName = firstName;
      }
    });
    return shortestName;
  }
  
  const printReverse = reverseArray([...arrayData]);
  
  const nomeContato = contaNomi(arrayData);
  const cognomeContato = contaCognomi(arrayData);
  const nomePiuLungo = nomeLungo(arrayData);
  const nomePiuCorto = nomeCorto(arrayData);
  
  console.log("Il numero di persone con lo stesso nome sono: ", nomeContato);
  /*console.log("Il numero di persone con lo stesso cognome sono: ", cognomeContato);
  console.log("Array invertito: ", printReverse);
  console.log("Il nome più lungo è: ", nomePiuLungo);
  console.log("Il nome più corto è: ", nomePiuCorto);*/