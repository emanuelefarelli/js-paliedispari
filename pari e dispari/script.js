// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const button = document.querySelector('button');
const myMain = document.querySelector('main');
let resultElement = document.createElement('p');



button.addEventListener('click',
    function(){
        const userOption = document.getElementById('user-choise').value;
        const userNumber = parseInt(document.getElementById('user-number').value);
        const botChoise = random(1,5);
        const total = botChoise + userNumber
        const result = isItEven(total)
        console.log('user number: '+userNumber);
        console.log('total: '+total);
        console.log('result: '+result);
        let userAnswer;


        if(userOption == 'pari'){
            userAnswer = true;
        }else{
            userAnswer = false;
        }

        if(userAnswer == result){
            resultElement.append('risultato: '+ total +' Hai vinto!');
            myMain.append(resultElement);

        }else{
            resultElement.append('risultato: '+ total +' Hai perso');
            myMain.append(resultElement);
        }
    }
);

function random(min,max){
    return parseInt(Math.random() * max) + min;
}

function isItEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

