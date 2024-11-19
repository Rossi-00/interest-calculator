import { question } from 'readline-sync';

console.log("Interest Calculation Application: ");

let interest_rate;

let debt_amount = question("\nEnter the amount owed: $ ");

if (debt_amount > 0) {
    let overdue_days = question("Enter how many days have passed since the due date of the invoice: ");

    if (overdue_days > 0) {
        if (overdue_days > 15) {
            interest_rate = 10;
        } else {
            interest_rate = 5;
        }

        debt_amount = Number(debt_amount);
        overdue_days = Number(overdue_days);

        let total_interest = (debt_amount / 100) * interest_rate;
        let total_amount = debt_amount + total_interest;

        console.log("\nOriginal debt amount: $ " + debt_amount);
        console.log("Overdue days: " + overdue_days);
        console.log("Interest rate: " + interest_rate + "%");
        console.log("Total amount with interest: $ " + total_amount);
    } else {
        console.log("You are on time!");
    }
} else {
    console.log("The debt amount must be greater than zero!");
}

