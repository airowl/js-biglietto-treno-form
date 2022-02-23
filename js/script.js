/* 
    chiedere all'utente i dati che di servono
    -   Nome e cognome del passegero
    -   Numero di km percorsi
    -   Età del passeggero con il select (Maggiorenne o Minorenne)

    Calcolo del prezzo

    Calcolo dello sconto in base
    -   se under 18 avrà uno sconto del 17%
    -   se over 65 avrà uno sconto del 33%

    Impostare evento al click dell'utente
    -   Genera
    -   Annulla

    Presentare il prezzo ultimato

    Calcolo randomico della carozza

    Calcolo randomico del codice CP // facoltativa

    Presentare il tutto sull'interfaccia utente

*/ 

const user = document.getElementById('my-user');
const kmUser = document.getElementById('my-km-user');
const ageUser = document.getElementById('my-age-user');

const under18 = ageUser.value;

console.log(user.value);
console.log(kmUser.value);
console.log(under18);

// calcolo del prezzo
const price = 0.27 * kmUser;

console.log(price);

// calcolo dello sconto per età
if (ageUser < 18) {

    console.log('è minorenne');

    const disUnder18 = (17 / 100);

    const output = price - disUnder18;

} else if (ageUser >= 65) {
    console.log('ha 65 anni in su');
    const disUnder18 = (33 / 100);


} else {
    console.log('tra i 19 e 64 anni');
}

// Prezzo assoluto
console.log(output);