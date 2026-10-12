const inputArea = document.querySelector("input");
const topArea = document.querySelector("p");



function clearHandler(){
    console.log("Js running");
    topArea.textContent = ""
    inputArea.value = ""
}

function crossHandler() {

    inputArea.value = inputArea.value.slice(0, -1);
}

function percentHandler(){

    topArea.textContent += inputArea.value + " % "
    inputArea.value = ""
}

function divideHandler(){

//     if(topArea.textContent.slice(-2).includes("%") || topArea.textContent.slice(-2).includes("+") 
//         || topArea.textContent.slice(-2).includes("-") ||topArea.textContent.slice(-2).includes("*") 
//         ) {
//             topArea.textContent = topArea.textContent.slice(0 , -2) + "/ "
//  } else{
         topArea.textContent += inputArea.value + " / "
    inputArea.value = ""
     
   
}

function sevenHandler(){
   inputArea.value += 7
}

function eightHandler(){

     inputArea.value += 8
}

function nineHandler(){

     inputArea.value += 9
}

function multiplyHandler(){

    topArea.textContent += inputArea.value + " * "
    inputArea.value = ""
}

function fourHandler(){
    
     inputArea.value += 4
}

function  fiveHandler(){
    
     inputArea.value += 5
}

function sixHandler(){

     inputArea.value += 6
}

function minusHandler(){

    topArea.textContent += inputArea.value + " - "
    inputArea.value = ""
}

function oneHandler(){

     inputArea.value += 1
}

function twoHandler(){

     inputArea.value += 2
}

function threeHandler(){

     inputArea.value += 3
}

function plusHandler(){

    topArea.textContent += inputArea.value + " + "
    inputArea.value = ""
}

function plusMinusHandler(){

}

function zeroHandler(){

     inputArea.value += 0
}

function dotHandler(){

     inputArea.value += "."
}


function equalTooHandler(){

    topArea.textContent += inputArea.value 
    inputArea.value = ""


   if(topArea.textContent.includes("%")){
    const myValues = topArea.textContent.split("%")       // ["8 + 9", "2"]
    const firstValue = eval(myValues[0]);                  //12
    const secondValue = eval(myValues[1]);                 // 2
    inputArea.value = eval(firstValue /secondValue * 100);

   }else{
     calculation()
   }



}
function calculation(){

    inputArea.value = eval(topArea.textContent);
}