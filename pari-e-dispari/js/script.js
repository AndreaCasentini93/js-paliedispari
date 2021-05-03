// FUNZIONE PER GENERARE NUMERO RANDOM TRA DUE NUMERI (MIN, MAX)
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// FUNZIONE PER STABILIRE SE UN NUMERO E' PARI
function evenOddNumber (number) {

    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

// FUNZIONE DI SCELTA PARI
function even () {

    userChoice = "Even";
    userChoiceMessage.innerHTML = "Even";

    test1 = true;

    if (test2) {
        formBox.innerHTML = "<button onclick=\"calculator()\">Play</button><button onclick=\"reset()\">Reset</button>";
    }

}

// FUNZIONE DI SCELTA DISPARI
function odd () {

    userChoice = "Odd";
    userChoiceMessage.innerHTML = "Odd";

    test1 = true;

    if (test2) {
        formBox.innerHTML = "<button onclick=\"calculator()\">Play</button><button onclick=\"reset()\">Reset</button>";
    }

}

// FUNZIONE DI SCELTA NUMERO DA 1 A 5
function number () {

    if (!isNaN(enterNumber.value) && enterNumber.value > 0 && enterNumber.value < 6) {

        userNumber = parseInt(enterNumber.value);
        userNumberMessage.innerHTML = userNumber;

        test2 = true;

        if (test1) {
            formBox.innerHTML = "<button onclick=\"calculator()\">Play</button><button onclick=\"reset()\">Reset</button>";
        }

    }

}

// FUNZIONE PULSANTE CALCOLATORE
function calculator () {

    // PULSANTE CALCOLATORE SI ATTIVA SOLO SE SONO STATE FATTE ENTRAMBE LE SCELTE DALL'UTENTE
    if (test1 && test2) {

        // SOMMA NUMERO UTENTE E NUMERO RANDOM
        var computerNumber = randomNumber (1, 5);

        var addiction = userNumber + computerNumber;

        // COMUNICA L'ESITO DELLA PARTITA
        var result = evenOddNumber (addiction);
        
        computerNumberMessage.innerHTML = computerNumber;
        
        addictionMessage.innerHTML = addiction;

        if (result == userChoice) {
            endMessage.innerHTML = result + ", you won!";
        } else {
            endMessage.innerHTML = result + ", you lost...";
        }

        // BLOCCA IL PULSANTE CALCOLATORE
        test1 = false;
        test2 = false;

    } else if (!test1 && !test2) {

        enterNumber.value = "";
        userChoiceMessage.innerHTML = "";
        userNumberMessage.innerHTML = "";
        computerNumberMessage.innerHTML = "";
        addictionMessage.innerHTML = "";
        endMessage.innerHTML = "";

    }

}

// FUNZIONE DI RESET
function reset () {

    enterNumber.value = "";
    userChoiceMessage.innerHTML = "";
    userNumberMessage.innerHTML = "";
    computerNumberMessage.innerHTML = "";
    addictionMessage.innerHTML = "";
    endMessage.innerHTML = "";

}


// VARIABILI GET ELEMENT BY ID
var enterNumber = document.getElementById("enter-number");
var userChoiceMessage = document.getElementById("user-choice");
var userNumberMessage = document.getElementById("user-number");
var formBox = document.getElementById("form-box-3");
var computerNumberMessage = document.getElementById("computer-number");
var addictionMessage = document.getElementById("addiction-message");
var endMessage = document.getElementById("end-message");

// VARIABILI ESTERNE A FUNZIONI
var userChoice;
var userNumber;
var test1 = false;
var test2 = false;