/* 
    chiedere all'utente i dati che di servono
    -   Nome e cognome del passegero
    -   Numero di km percorsi
    -   Età del passeggero con il select (Maggiorenne o Minorenne)

    Impostare evento al click dell'utente
    -   Genera
    -   Annulla

    Calcolo del prezzo

    Calcolo dello sconto in base
    -   se under 18 avrà uno sconto del 17%
    -   se over 65 avrà uno sconto del 33%


    Presentare il prezzo ultimato

    Calcolo randomico della carozza

    Calcolo randomico del codice CP // facoltativa

    Presentare il tutto sull'interfaccia utente

*/ 

const user = document.getElementById('my-user');
const kmUser = document.getElementById('my-km-user');
const ageUser = document.getElementById('my-age-user');


// console.log(user.value);
// console.log(parseFloat(kmUser.value));
// console.log(ageUser.value);


// button calcolo per l'evento

const button = document.querySelector('#my-submit');

button.addEventListener('click', function() {
    // calcolo del prezzo
    const kmPrice = 0.27;
    let price = kmPrice * parseFloat(kmUser.value);

    console.log(`Il prezzo intero è di ${price} €.`);

    // calcolo dello sconto per età
    if (ageUser.value == 'under18') {

        console.log('è minorenne');

        const disUnder18 = (17 / 100);
        price -= price * disUnder18;

    } else if (ageUser.value == 'over65') {

        console.log('ha 65 anni in su');

        const disOver65 = (33 / 100);
        price -= price * disOver65;

    } else {
        console.log('tra i 19 e 64 anni');
    }

    // Prezzo assoluto
    const output = parseFloat( price.toFixed(2) );
    document.getElementById('my-price').innerHTML = output + "€";

    // random del numero della carrozza
    const numberCar = Math.floor(Math.random() * 10) + 1;
    document.getElementById('my-carrozza').innerHTML = numberCar;

    // random del CodeCp
    const codeCP = Math.floor(Math.random() * 99999) + 1;
    document.getElementById('my-code-cp').innerHTML = codeCP;

    // presentare i dati all'utente
    document.getElementById('my-name-user').innerHTML = user.value;

});


// button reset 

const reset = document.querySelector('#my-reset');

reset.addEventListener('click', function(){
    user.value = "";
    kmUser.value = "";
});
