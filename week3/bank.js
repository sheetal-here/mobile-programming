const bankBalance = {
    amount: 10000
};

const correctPIN = "1234";

let transactionType = "";

// Balance hidden initially
let balanceVisible = false;

// Show Withdraw Section
function showWithdraw() {

    transactionType = "withdraw";

    // Change title
    document.getElementById("transactionTitle").innerText =
        "Withdraw Amount";

    // Show input section
    document.getElementById("inputSection").style.display =
        "block";
}

// Show Deposit Section
function showDeposit() {

    transactionType = "deposit";

    // Change title
    document.getElementById("transactionTitle").innerText =
        "Deposit Amount";

    // Show input section
    document.getElementById("inputSection").style.display =
        "block";
}

// Toggle Balance Visibility
function toggleBalance() {

    let balanceText =
        document.getElementById("balance");

    let eyeIcon =
        document.getElementById("eyeIcon");

    // If balance hidden
    if (balanceVisible === false) {

        balanceText.innerText =
            "Current Balance: Rs. " +
            bankBalance.amount;

        // Open eye icon
        eyeIcon.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

        balanceVisible = true;
    }

    // If balance visible
    else {

        balanceText.innerText =
            "Current Balance: ******";

        // Closed eye icon
        eyeIcon.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

        balanceVisible = false;
    }
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
    let enteredPIN =
        prompt("Enter your PIN:");

    // Incorrect PIN
    if (enteredPIN !== correctPIN) {

        alert("Incorrect PIN.");

        return;
    }

    // Withdraw
    if (transactionType === "withdraw") {

        // Check balance
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

    // Update balance if visible
    if (balanceVisible === true) {

        document.getElementById("balance").innerText =
            "Current Balance: Rs. " +
            bankBalance.amount;
    }

    // Hide input section
    document.getElementById("inputSection").style.display =
        "none";

    // Clear input field
    document.getElementById("amount").value = "";
}