
const button = document.querySelector('button');
let answer = document.createElement('p');
const myMain = document.querySelector('main');

button.addEventListener('click', 
    function(){
        const userWord = document.getElementById('user-word').value;
        
        if(isThisPalindrome(userWord)){
            answer.append("E' una parola palindroma!");
            answer.classList.add('pt-5','fs-3');
            myMain.append(answer);
        }else{
            answer.append("Non è una parola plindroma!");
            answer.classList.add('pt-5','fs-3');
            myMain.append(answer);
        }
    }  
);


function isThisPalindrome(str){
    const len = str.length;
    for (let i = 0; i < str.length / 2; i++) {  
        if (str[i] !== str[len - 1 - i]) {  
            return false;
        }else{
            return true;
        }
    } 
}