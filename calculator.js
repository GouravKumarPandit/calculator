let inputString = "";
let equal = document.getElementById('#equal');
let input = document.querySelector('input');
const buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.textContent === '='){
            console.log(input.value)
            input.value = eval(inputString);
        }
        else if(button.textContent === 'C'){
            input.value = "";
            inputString = "";
        }
        else if(button.textContent === 'X'){
            console.log(input.value)
            inputString = inputString.substring(0,inputString.length-1);
            input.value = inputString;
        }
        else{
            inputString += button.textContent;
            input.value = inputString;
        }
    })
});