"use strict";

const amount = document.getElementById("amount");

let amtValue = amount.value;
amtValue = parseFloat(amtValue).toFixed(2);
if(amtValue <= 0){
    console.log("Invalid amount");
}else{
    console.log(`$${amtValue}`);
}


