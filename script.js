// const numbers = document.querySelectorAll(".numbers");
// let screen = document.querySelector("result span");
// buttons = document.querySelectorAll("button");
// let screenValue = '';

// for(item of button){
//     item.addEventListener("click", (e)=>{
//         buttontext = e.target.innerText;
//         if(screen == "x"){
//             screenValue = "*";
//             screen.value += buttontext;
//         }
//         else if(screen=="AC"){
//             screenValue += "";
//             screen.value +=buttontext;
//         }
//         else if(screen=="="){
//             screenValue+= eval(screen);
//             screen.valye +=buttontext;
//         }
//         document.getElementById("result").innerHTML=buttontext;
//         console.log(buttontext);
//     });
// }

const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result span");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const signs = document.querySelectorAll(".sign");
const equals = document.querySelector(".equals");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue=0;

for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", (e)=>{
        console.log(numbers);
        let atr = e.target.getAttribute("value");
        if(isFirstValue === false){
            getFirstValue(atr);
        }
        else if(isSecondValue==false){
            getSecondValue(atr);
        }
    }); 
}

function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;

}

function getSecondValue(el){
    if(firstValue !="" && sign !=""){
        secondValue+=el;
        result.innerHTML=secondValue;
        secondValue= +secondValue;
    }
}
function getSign(){
    for(let i=0;i<signs.length;i++){
        signs[i].addEventListener("click", (e)=>{
            sign=e.target.getAttribute("value");
            isFirstValue=true;
        });
    }
}

getSign();

equals.addEventListener("click", ()=>{
    result.innerHTML = "";
    if(sign==="+"){
        resultValue = firstValue+secondValue;
    }
    else if(sign==="-"){
        resultValue = firstValue-secondValue;
    }
    else if(sign==="/"){
        resultValue=firstValue/secondValue;
    }
    else if(sign==="x"){
        resultValue=firstValue*secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue="";

    checkResultLength();
});

function checkResultLength(){
    resultValue = JSON.stringify(resultValue)
    if(resultValue.length >=8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener("click", ()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue !="" && secondValue!="" && sign !=""){
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
});

percent.addEventListener("click", ()=>{
    result.innerHTML="";
    if(firstValue !=""){
        resultValue= firstValue/100;
        firstValue = resultValue;
    }
    if(firstValue !="" && secondValue != "" && sign != ""){
        resultValue = firstValue/100;
    }
    result.innerHTML = resultValue;
});

clear.addEventListener("click", (e)=>{
    result.innerHTML=0;
    firstValue="";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue=0;
});