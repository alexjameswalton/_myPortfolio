//Q1
let button1A = document.getElementById('1A');
let button1B = document.getElementById('1B');
let button1C = document.getElementById('1C');

function colorChange1(event){
    button1A.style.backgroundColor = 'red';
    button1B.style.backgroundColor = '#88B04B';
    button1C.style.backgroundColor = 'red';
    event.target.style.transitionDelay = "0s";
}

button1A.addEventListener('mousedown', colorChange1);
button1B.addEventListener('mousedown', colorChange1);
button1C.addEventListener('mousedown', colorChange1);

//Q2
let button2A = document.getElementById('2A');
let button2B = document.getElementById('2B');
let button2C = document.getElementById('2C');

function colorChange2(event){
    button2A.style.backgroundColor = 'red'    
    button2B.style.backgroundColor = 'red'
    button2C.style.backgroundColor = '#88B04B'
    event.target.style.transitionDelay = "0s";
}

button2A.addEventListener('mousedown', colorChange2);
button2B.addEventListener('mousedown', colorChange2);
button2C.addEventListener('mousedown', colorChange2);

//Q3
let button3A = document.getElementById('3A');
let button3B = document.getElementById('3B');
let button3C = document.getElementById('3C');

function colorChange3(event){
    button3A.style.backgroundColor = '#88B04B';    
    button3B.style.backgroundColor = 'red';
    button3C.style.backgroundColor = 'red';
    event.target.style.transitionDelay = "0s";
}

button3A.addEventListener('mousedown', colorChange3);
button3B.addEventListener('mousedown', colorChange3);
button3C.addEventListener('mousedown', colorChange3);

//Q4
let button4A = document.getElementById('4A');
let button4B = document.getElementById('4B');
let button4C = document.getElementById('4C');

function colorChange4(event){
    button4A.style.backgroundColor = 'red';    
    button4B.style.backgroundColor = '#88B04B';
    button4C.style.backgroundColor = 'red';
    event.target.style.transitionDelay = "0s";
}

button4A.addEventListener('mousedown', colorChange4);
button4B.addEventListener('mousedown', colorChange4);
button4C.addEventListener('mousedown', colorChange4);

//Q5
let button5A = document.getElementById('5A');
let button5B = document.getElementById('5B');
let button5C = document.getElementById('5C');

function colorChange5(event){
    button5A.style.backgroundColor = 'red';    
    button5B.style.backgroundColor = '#88B04B';
    button5C.style.backgroundColor = 'red';
    event.target.style.transitionDelay = "0s";
}

button5A.addEventListener('mousedown', colorChange5);
button5B.addEventListener('mousedown', colorChange5);
button5C.addEventListener('mousedown', colorChange5);
