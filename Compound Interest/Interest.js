// Turns a percentage to a decimal by dividing by 100
function percentageToDecimal (percentage){
    decimal = percentage / 100;
    return decimal;
}


function calculateInterest (){
    // Get input
    rate = document.querySelector("#rate").value;
    number = document.querySelector("#number").value;
    principal = document.querySelector("#principal").value;
    time = document.querySelector("#time").value;
 
    // Compute the Compound interest formula.
    const decimal = percentageToDecimal(rate);
    const devide = 1 + (decimal/number);
    for (let i = 0; i < time; i++)
    {
        const power = Math.pow(devide, time*number);
        const multiply = principal * power;
        const total = multiply;

         // Send output
        document.querySelector('#totalAmount').value = total.toFixed(2);
    }  

    return time
}

// Run function when the button is clicked.
document.querySelector("#calculateInterest").addEventListener("click", calculateInterest);

function calculateLoan (){
        // Get input
        loanAmount = document.querySelector("#loanAmount").value;
        interestRate = document.querySelector("#loanRate").value;
        time = document.querySelector("#loanTime").value;

        // Compute the Loan repayment compound interest formula.
        const plus_one = (1+ percentageToDecimal(interestRate)/12)
        const multiply = time*12;
        const power = Math.pow(plus_one, multiply);
        const sub_final = loanAmount*percentageToDecimal(interestRate)/12*power;
        const subtract = power-1;
        const final = sub_final/subtract;
        const total = final*multiply;

        // Send output
        document.querySelector('#finalAmount').value = final.toFixed(2);
        document.querySelector('#totalInterestAmount').value = total.toFixed(2);

}

// Run function when the button is clicked.
document.querySelector("#calculateLoan").addEventListener("click", calculateLoan);