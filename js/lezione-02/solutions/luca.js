function countFirstNames(arrayData) {
    const firstNameCount = {};
    arrayData.forEach(name => {
        const [firstName, lastName] = name.split(' ');
        if (firstNameCount[firstName]) {
            firstNameCount[firstName] ++;
        } else {
            firstNameCount[firstName] = 1;
        }
    });
    for (const firstName in firstNameCount) {
        console.log(`Le persone con il nome ${firstName} sono ${firstNameCount[firstName]}`);
    }
}

countFirstNames(arrayData);