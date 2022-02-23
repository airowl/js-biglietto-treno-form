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



