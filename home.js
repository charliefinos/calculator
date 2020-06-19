

// add = (a, b) => {
//     a = display.value;
//     oper = a + b;
//     console.log(oper);
// }

// substract = (a, b) => {
//     oper = a - b ;
//     console.log(oper);
// }

// divide = (a, b) => {
//     oper = a / b;
//     console.log(oper);
// }

// multiply = (a, b) => {
//     oper = a * b;
//     console.log(oper);
// }

// operator = () => {

// }


const numbers = document.querySelectorAll('button');
let display = document.querySelector('#calculator-screen');

numbers.forEach((number)=> {
    number.addEventListener('click', (e) => {
        console.log(e.target.value);
        displayNumb(e.target.value);
    })
})


function displayNumb(num){
    switch(num) {
        case '1':
            display.value += '1';
            break;
        case '2':
            display.value += '2';
            break;
        case '3':
            display.value += '3';
            break;
        case '4':
            display.value += '4';
            break;
        case '5':
            display.value += '5';
            break;
        case '6':
            display.value += '6';
            break;
        case '7':
            display.value += '7';
            break;
        case '8':
            display.value += '8';
            break;
        case '9':
            display.value += '9';
            break;
        case'0':
            display.value += '0';
            break;    
        case '+' :
            display.value += '+' ;
            break;
        case '-':
            display.value += '-';
            break;
        case '*':
            display.value += '*';
            break;
        case '/':
            display.value += '/';
            break;
        case '.':
            display.value += '.'    
            break;
    
    }
}


// clear display

function clearDisplay(){
    display.value = ''
    display.placeholder = '0'
}

function equal(result){
    result = eval(display.value);
    display.value = result;
}

function Oper(num){
    switch(num){
        case '+':
            display.value += '+';
            break;
        case '-':
            display.value += '-';
            break;
        case '*':
            display.value += '*';
            break;
        case '/':
            display.value += '/';
            break;

    }
}

