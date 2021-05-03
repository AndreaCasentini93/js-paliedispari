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

function calculator () {

    // CHIEDI ALL'UTENTE UNA PAROLA
    var userWord = document.getElementById("user-word").value;

    // GENERA UNA RISPOSTA CHE SPECIFICA SE LA PAROLA INSERITA E' PALINDROMA OPPURE NO
    var palindrome = palindromeCalculator (userWord);

    console.log(palindrome);

    if (palindrome) {
        document.getElementById("palindrome").innerHTML = "The word " + userWord + " is palindrome."
    } else {
        document.getElementById("palindrome").innerHTML = "The word " + userWord + " isn't palindrome."
    }

}