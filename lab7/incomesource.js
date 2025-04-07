"use strict";

const amount = document.getElementById("amount");

let amtValue = amount.value;
amtValue = parseFloat(amtValue).toFixed(2);
if(amtValue <= 0){
    console.log("Invalid amount");
}else{
    console.log(`$${amtValue}`);
}

const form = document.getElementById("incomeForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
});

async function submitForm(){


    const formData = new FormData(document.getElementById("incomeForm"));
    
    try{
        const res = await fetch("https://webhook-test.com/e9b7cec9a3e920d3b86d4bdd074855a8", {method: 'POST', body: formData});

        const text = await res.text();
        console.log(text);

    }catch(error){
        console.log(error);
    }

    





    // fetch("https://webhook-test.com/e9b7cec9a3e920d3b86d4bdd074855a8", {method: 'POST', body: formData})
        // .then( (res) => res.text())
        // .then( (response) => {
        //     console.log(response);
        // }).catch( (error) => {
        //     console.log(error);
        // });

}
