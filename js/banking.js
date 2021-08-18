function getInputValue(inputID) {
    const depositeInput = document.getElementById(inputID);
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    depositeInput.value = ''; // Clear input
    return depositeAmount;
}
function updateTotalField(totalFieldId, amount) {
    const currentTotalElement = document.getElementById(totalFieldId);
    const currenTotalText = currentTotalElement.innerText;
    const previousTotal = parseFloat(currenTotalText);
    currentTotalElement.innerText = previousTotal + amount; // added total deposite here
}

function getCurrentBalance() {
    const currentTotalBalance = document.getElementById('total-balance')
    const currentTotalBalanceText = currentTotalBalance.innerText;
    const previousTotalBalance = parseFloat(currentTotalBalanceText);
    return previousTotalBalance;
}

function updateTotalBalance(depositeAmount, isAdd) {
    const currentTotalBalance = document.getElementById('total-balance')
    // const currentTotalBalanceText = currentTotalBalance.innerText;
    // const previousTotalBalance = parseFloat(currentTotalBalanceText);

    const previousTotalBalance = getCurrentBalance();
    if (isAdd == true) {
        currentTotalBalance.innerText = previousTotalBalance + depositeAmount;
    }
    else {
        currentTotalBalance.innerText = previousTotalBalance - depositeAmount;
    };

};
// deposite function 
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('total-deposite', depositeAmount);
        updateTotalBalance(depositeAmount, true);
    }
})
// handle withdrow function 
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowAmmount = getInputValue('withdrow-input');
    const currentBalance = getCurrentBalance();
    if (withdrowAmmount > 0 && withdrowAmmount < currentBalance) {
        updateTotalField('total-withdeow', withdrowAmmount)
        updateTotalBalance(withdrowAmmount, false);
    }
})