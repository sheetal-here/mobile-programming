const bankBalance = {
    amount: 10000
};

const correctPIN = "1234";

let transactionType = "";

// Show Withdraw Input
function showWithdraw() {

    transactionType = "withdraw";

    document.getElementById("inputSection").style.display = "block";
}

// Show Deposit Input
function showDeposit() {

    transactionType = "deposit";

    document.getElementById("inputSection").style.display = "block";
}

// Submit Transaction
function submitTransaction() {

    let amount =
        Number(document.getElementById("amount").value);

    // Check valid amount
    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    // Check multiple of 100
    if (amount % 100 !== 0) {
        alert("Amount must be a multiple of 100.");
        return;
    }

    // Ask for PIN
    let enteredPIN = prompt("Enter your PIN:");

    // Check PIN
    if (enteredPIN !== correctPIN) {
        alert("Incorrect PIN.");
        return;
    }

    // Withdrawal
    if (transactionType === "withdraw") {

        if (amount > bankBalance.amount) {
            alert("Insufficient Balance.");
            return;
        }

        bankBalance.amount =
            bankBalance.amount - amount;

        alert("Withdrawal Successful!");
    }

    // Deposit
    else if (transactionType === "deposit") {

        bankBalance.amount =
            bankBalance.amount + amount;

        alert("Deposit Successful!");
    }

    // Update Balance
    document.getElementById("balance").innerText =
        "Current Balance: Rs. " + bankBalance.amount;

    // Clear Input Field
    document.getElementById("amount").value = "";
}