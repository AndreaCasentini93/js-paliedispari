// FUNZIONE PER GENERARE NUMERO RANDOM TRA DUE NUMERI (MIN, MAX)
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// FUNZIONE PER STABILIRE SE UN NUMERO E' PARI
function evenOddNumber (number) {

    if (number % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }

}


// VARIABILI GET ELEMENT BY ID
var message = document.getElementById("message");

// SCELTE UTENTE: PARI O DISPARI / NUMERO DA 1 A 5
var userChoice = prompt("Choose \"even\" or \"odd\", please.");

var userNumber = parseInt(prompt("Choose a number from 1 to 5, please."));

// SOMMA NUMERO UTENTE E NUMERO RANDOM
var computerNumber = randomNumber (1, 5);

var addiction = userNumber + computerNumber;

// COMUNICA L'ESITO DELLA PARTITA
var result = evenOddNumber (addiction);

result = result.charAt(0).toUpperCase() + result.substring(1);

userChoice = (userChoice.toLowerCase()).charAt(0).toUpperCase() + userChoice.substring(1);

if (result == userChoice) {
    message.innerHTML = result + ", you won!";
} else {
    message.innerHTML = result + ", you lost...";
}