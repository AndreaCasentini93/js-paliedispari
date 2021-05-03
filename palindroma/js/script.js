// FONZIONE PER VALUTARE SE UNA PAROLA E' PALINDROMA
function palindromeCalculator (word) {

    word = word.toLowerCase()

    var wordReverse = "";

    var i = --word.length;
    while (i >= 0) {

        wordReverse += word[i];

        i--
    }

    if (word == wordReverse) {
        return true;
    } else {
        return false;
    }

}

// VARIABILI GET ELEMENT BY ID
var computerResponse = document.getElementById("computer-response");
var enterWord = document.getElementById("enter-word");

function calculator () {

    // CHIEDI ALL'UTENTE UNA PAROLA
    enterWord = enterWord.value;
    var userWord = enterWord;

    // SOLO SE L'UTENTE INSERISCE UNA PAROLA COMPOSTA DA LETTERE IL CALCOLATORE FUNZIONA
    if(!(userWord.trim() == "" || !isNaN(parseInt(userWord)) && typeof parseInt(userWord) == 'number')) {
  
        // GENERA UNA RISPOSTA CHE SPECIFICA SE LA PAROLA INSERITA E' PALINDROMA OPPURE NO
        var palindrome = palindromeCalculator (userWord);
    
        if (palindrome) {
            computerResponse.innerHTML = "The word <span id=\"word-style\">" + userWord + "</span> is palindrome."
        } else {
            computerResponse.innerHTML = "The word <span id=\"word-style\">" + userWord + "</span> isn't palindrome."
        }
    
    } else {
      
        // GENERA UNA RISPOSTA DI ERRORE
        computerResponse.innerHTML = "The word you entered is invalid, please try again."
    
    }

    // PULISCI L'INPUT TEXT
    enterWord.value = "";

}

function reset () {

    // PULISCI L'INPUT TEXT
    enterWord.value = "";

    // RIMUOVI IL MESSAGGIO DI RISPOSTA
    computerResponse.innerHTML = "";

}