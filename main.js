let display= document.querySelector('.answer')

let clear = document.querySelector('.clr')

clear.addEventListener("click", function(){
    display.innerText = ""
})

let number1 = document.querySelector('.num1')
number1.addEventListener("click", function (){
    display.innerText += "1"
    console.log(1)
})

let number2 = document.querySelector('.num2')
number2.addEventListener("click", function (){
    display.innerText += "2"
})

let number3 = document.querySelector('.num3')
number3.addEventListener("click", function (){
    display.innerText += "3"
})

let number4 = document.querySelector('.num4')
number4.addEventListener("click", function (){
    display.innerText += "4"
})

let number5 = document.querySelector('.num5')
number5.addEventListener("click", function (){
    display.innerText += "5"
})

let number6 = document.querySelector('.num6')
number6.addEventListener("click", function (){
    display.innerText += "6"
})


let number7 = document.querySelector('.num7')
number7.addEventListener("click", function (){
    display.innerText += "7"
})


let number8 = document.querySelector('.num8')
number8.addEventListener("click", function (){
    display.innerText += "8"
})


let number9 = document.querySelector('.num9')
number9.addEventListener("click", function (){
    display.innerText += "9"
})

let divide = document.querySelector('.operationdiv')
divide.addEventListener("click", function (){
    display.innerText += "/"
})



let operationequals = document.querySelector('.operationequals')
operationequals.addEventListener("click", function (){
    let prop = display.innerText
    let answer = eval(prop)
    display.innerText = answer
})
