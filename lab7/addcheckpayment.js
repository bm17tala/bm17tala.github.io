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