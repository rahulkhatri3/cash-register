const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message =document.querySelector("#error-message");
checkButton.addEventListener("click", function validateBillCashAmount(){
    message.style.display = "none";

if (billAmount.value >0){
    if(cashGiven.value> billAmount.value){
        const amountToBeReturned = cashGiven.value -billAmount.value;
        calculateChange(amountToBeReturned);
    }else{
        showMessage(
            "The cash provided should atleast be equal to the bill amount"
        );
    }
    }else{
        showMessage("invalid Bill Amount");
    }

});

function calculateChange(){}

function showMessage(msg){
    console.log("here");
    message.style.display="block";
    message.innerText = msg;
}