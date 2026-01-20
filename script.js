let total = 0; // start with $0

const input = document.getElementById("expense-input");
const button = document.getElementById("add-expense");
const totalDisplay = document.getElementById("total");
 
button.addEventListener("click", function () {
    const amount = Number(input.value);
  
    if (amount > 0) {
      total += amount;
      totalDisplay.textContent = total.toFixed(2);
      input.value = "";
    }
  });
  