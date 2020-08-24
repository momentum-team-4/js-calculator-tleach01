
let clear = document.querySelector('.clr')
clear.addEventListener("click", function(){
    display.textContent = ""
})

let number1 = document.querySelector('.num1')
number1.addEventListener("click", function (){
    display.textContent += "1"
    console.log(1)
})

let number2 = document.querySelector('.num2')
number2.addEventListener("click", function (){
    display.textContent += "2"
})

let number3 = document.querySelector('.num3')
number3.addEventListener("click", function (){
    display.textContent += "3"
})

let number4 = document.querySelector('.num4')
number4.addEventListener("click", function (){
    display.textContent += "4"
})

let number5 = document.querySelector('.num5')
number5.addEventListener("click", function (){
    display.textContent += "5"
})

let number6 = document.querySelector('.num6')
number6.addEventListener("click", function (){
    display.textContent += "6"
})


let number7 = document.querySelector('.num7')
number7.addEventListener("click", function (){
    display.textContent += "7"
})


let number8 = document.querySelector('.num8')
number8.addEventListener("click", function (){
    display.textContent += "8"
})


let number9 = document.querySelector('.num9')
number9.addEventListener("click", function (){
    display.textContent += "9"
})

let number0 = document.querySelector('.num0')
number0.addEventListener("click", function (){
    display.textContent += "0"
})

let display= document.querySelector('.answer')


let divide = document.querySelector('.operationdiv')
divide.addEventListener("click", function (){
    display.textContent += "/"
})

let multiply = document.querySelector('.operationmult')
multiply.addEventListener("click", function (){
    display.textContent += "*"
})

let subtract = document.querySelector('.operationsub')
subtract.addEventListener("click", function (){
    display.textContent += "-"
})

let addition = document.querySelector('.operationadd')
addition.addEventListener("click", function (){
    display.textContent += "+"
})


let decimal = document.querySelector('.operationdec')
decimal.addEventListener("click", function (){
    display.textContent += "."
})

let equals = document.querySelector(".operationequal")
equals.addEventListener("click", function(){
    let prop = display.innerText
    let answer = eval(prop)
    display.textContent = answer
})

// use textContent & (eval(prop))

