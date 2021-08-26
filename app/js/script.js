//Variables
const billAmount = document.querySelector("#bill");
const peopleAmount = document.querySelector("#people");
const billTipAmount = document.querySelector(".tip-amount-value");
const billTotalAmount = document.querySelector(".total-value");
const buttons = document.querySelectorAll(".tip-section button");
const custom = document.querySelector("#custom");
const resetButton = document.querySelector(".reset");

//Calculate Tip When Click On Tip Percentage Buttons

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (billAmount.value === "") return;
    if (peopleAmount.value === "") peopleAmount.value = 1;

    calculateTip(
      parseFloat(billAmount.value),
      parseInt(tipvalue),
      parseInt(peopleAmount.value)
    );
  });
});

//Calculate Tip When User Give Custom Tip Percentage Input

//Calculate Tip

function calculateTip(billAmount, tipPercentage, peopleAmount) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / peopleAmount;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (billAmount * (tipAmount * 100)) / 100;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalAmount.innerHTML = `$${totalAmount}`;
}
//Reset Everything
resetButton.addEventListener("click", resetSwitch);
function resetSwitch() {
  billTipAmount.textContent = "$0.00";
  billTotalAmount.textContent = "$0.00";
  billAmount.value = "";
  peopleAmount.value = "";
}
