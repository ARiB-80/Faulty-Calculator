let numbers = document.querySelectorAll(".number");
let operands = document.querySelectorAll(".operand");
let screen = document.querySelector(".screen");
let ansScreen = document.querySelector(".ans-screen");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let back = document.querySelector(".back");


let screenVal=0;
let userOperand = "";
let calculation = "";
let fault ={
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**',
}
let random;


for (let number of numbers)
{
    number.addEventListener("click", () =>
    {
        if(screenVal === 0)
        {
            // clearScreen();
            screen.value = "";
        }

        calculation += number.innerText;
        screen.value += number.innerText;

        screenVal++;
    });  
}

for (let operand of operands)
{
    operand.addEventListener("click", () =>
    {
        if(screenVal === 0)
        {
            // clearScreen();
            screen.value = "";
        }
        userOperand = operand.innerText;
        screen.value += userOperand;

        random = Math.random();
        
        if(random <= 0.1)
        userOperand = fault[userOperand];
        
        
        calculation += userOperand;

        screenVal++;
    });  
}


equals.addEventListener("click", () => 
{

    calculation = eval(calculation)
    screen.value = calculation;
    // clearScreen()

    screenVal = 0;
    calculation = "";
    // ansScreen.innerText = `Prev Ans : ${calculation}`;
});

back.addEventListener("click", () => 
{
    // screen.innerText -= screen.;
    calculation = calculation.slice(0,-1);
    screen.value = calculation;
});

function clearScreen()
{
    screen.value = "";
    calculation = "";
}


clear.addEventListener("click", clearScreen);