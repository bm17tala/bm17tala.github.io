const today = new Date();
today.setDate(today.getDate() - 1);

document.getElementById('expenseDate').setAttribute('max', today.toISOString().split('T')[0]);

const expenseAmount = document.getElementById('expenseAmount');
expenseAmount.addEventListener('blur', () => {
    let amt = expenseAmount.value;
    if (amt === "") return;
    if(amt >= 50000 || amt <= 0) alert('Amount must be less than $50000 and more than $0');
});