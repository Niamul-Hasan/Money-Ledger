
document.getElementById('calculate').addEventListener('click', function () {
    // getting income 
    const incomeInput = document.getElementById('income');
    const incomeAmount = parseFloat(incomeInput.value);
    if (incomeAmount < 0) {
        getErrorMassege();
    }
    //getting rent cost
    const rentinput = document.getElementById('rent');
    const rentAmount = parseFloat(rentinput.value);
    //getting food cost
    const foodInput = document.getElementById('food');
    const foodAmount = parseFloat(foodInput.value);
    //getting cloth cost
    const clothInput = document.getElementById('cloth');
    const clothAmount = parseFloat(clothInput.value);

    if (typeof rentAmount == 'number' && typeof foodAmount == 'number' && typeof clothAmount == 'number' && typeof incomeAmount == 'number' && incomeAmount > 0 && rentAmount >= 0 && foodAmount >= 0 && clothAmount >= 0) {
        // Calculate total expense
        const totalExpense = rentAmount + foodAmount + clothAmount;
        if (totalExpense > incomeAmount) {
            getErrorMassege();
        }

        else {
            //update Total Expense in html
            const expenseField = document.getElementById('expense');
            expenseField.innerText = totalExpense;
            //update Balance in html
            const balanceAfterExpense = incomeAmount - totalExpense;
            const balanceField = document.getElementById('balance');
            balanceField.innerText = balanceAfterExpense;
            noError();
        }

    }
    if (rentAmount < 0 || foodAmount < 0 || clothAmount < 0) {
        getErrorMassege();
    }


})

//bonous part of saving amount
document.getElementById('save').addEventListener('click', function () {
    getSavingAndUpdateBalance('balance')
})

function getSavingAndUpdateBalance(fieldId) {
    //getting remaning balance after expence
    const balanceField = document.getElementById(fieldId).innerText;
    const balanceAmount = parseFloat(balanceField);
    //getting parcentage value from input field
    const savingInput = document.getElementById('save-input');
    const savingParcentageValue = savingInput.value;
    //updating saving Amount field in html
    if (parseFloat(savingParcentageValue) > 0 && typeof parseFloat(savingParcentageValue) == 'number' && parseFloat(savingParcentageValue) <= 100) {
        const savingAmount = balanceAmount * parseFloat(savingParcentageValue) / 100;
        const savingField = document.getElementById("saving-amount");
        savingField.innerText = savingAmount;
        //updating remaining balance field after expense and saving
        const remainingBalanceField = document.getElementById('remaining-balance');
        const balanceAfterSaving = balanceAmount - savingAmount;
        remainingBalanceField.innerText = balanceAfterSaving;
        noError();
    }
    else {
        getErrorMassege();
    }
}

//function for error massege
function getErrorMassege() {
    document.getElementById('error').style.display = 'block';
}
function noError() {
    document.getElementById('error').style.display = 'none';

}