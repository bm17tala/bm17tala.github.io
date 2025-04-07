const today = new Date();

document.getElementById('checkDate').setAttribute('min', today.toISOString().split('T')[0]);

const expenseAmount = document.getElementById('expenseAmount');
expenseAmount.addEventListener('blur', () => {
    let amt = expenseAmount.value;
    if (amt === "") return;
    if(amt <= 0) alert('Amount must be more than $0');
});

const accountNumber = document.getElementById("accountNumber");

accountNumber.addEventListener('blur', () => {
    if (accountNumber.value === "") return;

    const regex = /^\d{10}$/;

    if (!regex.test(accountNumber.value)) alert("Please enter exactly 10 digits.");
});

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
