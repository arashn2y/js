/* { status: 'ok', method: 'GET' } */
function loadUsers() {
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then((usersResponse => {
    console.log(usersResponse);
    console.log(`Ho caricato ${usersResponse.total}`);
    const usersArray = usersResponse.users;
    let underage = 0;

    for (const user of usersArray) {
        console.log(`\nUtente caricato: ${user.firstName} ${user.lastName} nato il ${user.birthDate}`);
        const {age} = user;
        if(age < 18) {
            console.log("L'utente è minorenne");
            underage ++;
        }
    }

    console.log("Gli utenti minorenni sono " + underage);
}));
}

// Could be GET or POST/PUT/PATCH/DELETE
fetch('http://dummyjson.com/test')
.then(res => res.json())
.then(response => {
    loadUsers();
});