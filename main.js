const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector(".error-message");
const cashGivendiv = document.querySelector(".Cash_give");
const returnChange = document.querySelector(".change-return");
const output =document.querySelector("#output");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");



const availableNotes = [ 500 ,200, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", ()=>{
hideMessage();

if ( Number(billAmount.value) > 0){
    nextButton.style.display="none";
    cashGivendiv.style.display="block"

 } else{
  showMessage("Enter valid bill Amount");

    }
    });

checkButton.addEventListener("click", ()=>{
    clearNoOfNotes();
    hideMessage();
  let billAmtValue = Number(billAmount.value);
  let cashGivenValue = Number(cashGiven.value);

  if (billAmtValue > 0 && cashGivenValue > 0) {
    if (!Number.isInteger(cashGivenValue)) {
      showMessage("Enter valid amount in cash given field");
      return;
    }

        if (billAmtValue > cashGivenValue) {
      showMessage("cash is less then bill, please enter right amount");
      return;
    }
    calculateNote(billAmtValue, cashGivenValue);
  } else {
    showMessage("Enter valid bill amount and cash given to continue");
  }
});
function calculateNote(bill, cash) {
  let returnAmt = cash - bill;
  if (returnAmt < 1) {
    showMessage("No Amount should be Return");
    return;
  }
  returnChange.style.display = "block";
  for (let i = 0; i < availableNotes.length; i++) {
    returnAmt = compare(returnAmt, availableNotes[i], i);
  }
}
 
// function calculateChange(amountToBeReturned){
//     //2010
//     // go over all the available
//     for(let i =0; i < availableNotes.length; i++){
//         //no of notes need for the denoination
//         const numberOfNotes =Math.trunc(
//             amountToBeReturned/availableNotes[i]
//         );
//         //2010/2000=1 || 10/500=0
//         amountToBeReturned= amountToBeReturned % availableNotes[i];
//         //2010%2000=10 || 10%500=10


//         //updating the no of notes in the table for the current amount
//         noOfNotes[i].innerText=numberOfNotes;


function compare(reminder, noteAmt, index) {
  if (reminder >= noteAmt) {
    let notes = Math.floor(reminder / noteAmt);
    reminder = reminder - notes * noteAmt;
    noOfNotes[index].innerText = `${notes}`;
  }
      return reminder;
}
function clearNoOfNotes() {
  for (let notes of noOfNotes) {
    notes.innerText = "";
  }
}


function showMessage(text){
    message.style.display="block";
    message.innerText = text;
   returnChange.style.display="none";
}
function hideMessage(){
    message.style.display="none";
}