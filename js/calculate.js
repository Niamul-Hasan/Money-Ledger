
document.getElementById('calculate').addEventListener('click', function () {
    // getting income 
    const incomeInput = document.getElementById('income');
    const incomeAmount = parseFloat(incomeInput.value);
    console.log(incomeAmount);
    if (incomeAmount == 'NaN') {
        console.log('please enter a valid number');
    }
    else if (incomeAmount < 0) {
        console.log('hah...dont you know positive integer');
    }
    //getting rent cost
    const rentinput = document.getElementById('rent');
    const rentAmount = parseFloat(rentinput.value);
    console.log(rentAmount);
    //getting food cost
    const foodInput = document.getElementById('food');
    const foodAmount = parseFloat(foodInput.value);
    console.log(foodAmount);
    //getting cloth cost
    const clothInput = document.getElementById('cloth');
    const clothAmount = parseFloat(clothInput.value);
    console.log(clothAmount);


    // Calculate total expense
    const totalExpense = rentAmount + foodAmount + clothAmount;

    //update Total Expense in html
    const expenseField = document.getElementById('expense');
    const expenseAmount = expenseField.innerText;
    expenseField.innerText = totalExpense;

    //update Balance in html
    const balanceAfterExpense = incomeAmount - totalExpense;
    const balanceField = document.getElementById('balance');
    balanceField.innerText = balanceAfterExpense;



})

//bonous part of saving amount
document.getElementById('save').addEventListener('click', function () {
    console.log('i am for bonous');
})