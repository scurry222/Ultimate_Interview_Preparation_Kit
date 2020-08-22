// Problem statement #
// In this challenge, you have the abstract constructor function Loans. There are three types of loans that can be given:

// HomeLoan

// StudentLoan

// PersonalLoan

// You need to implement Loans such that it decides which loan instance to instantiate, given the input parameters. Implement a function getloan for this purpose. getloan should take the following parameters:

// type: type of loan

// amount: amount of the loan

// duration: duration of the loan

// All the three loans mentioned above have the following properties:

// amount: the amount of loan required (in dollars)

// duration: the duration of time (in years) for which the loan is borrowed

// interest: the annual interest rate

// The interest is different but fixed for all three loans:

// The interest on HomeLoan is: 0.08

// The interest on StudentLoan is: 0.03

// The interest on PersonalLoan is: 0.05

// Also defined for these loans is the calculateInterest method that totals the simple interest on the amount borrowed for the given duration. Use the following formula to total the total interest:

// Total Interest = amount * interest * durationcalculateInterest=amount∗interest∗duration

// Input #
// The calculateInterest method called for the loan chosen

// Output #
// The amount of total interest on the money borrowed

// Sample input #
// var loan = new Loans()
 
// var homeLoan = loan.getloan('home',3200,5)
// homeLoan.calculateInterest()
 
// var studentLoan = loan.getloan('student',1800,4)
// studentLoan.calculateInterest()
 
// var personalLoan = loan.getloan('personal',1200,2)
// personalLoan.calculateInterest()
// Sample output #
// 1280
// 216
// 120


class Loans {
    constructor() {
        this.getLoan = (name, amount, duration) => {
            let loan;
            switch(name) {
                case 'home': loan = new HomeLoan(amount, duration); break;
                
                case 'student': loan = new StudentLoan(amount, duration); break;

                case 'personal': loan = new PersonalLoan(amount, duration); break

                default: loan = null; break;
            }
            return loan
        }
    }
}

class HomeLoan {
    constructor(amount, duration) {
        this.amount = amount;
        this.duration = duration;
        this.interest = 0.08;
        this.calculateInterest = () => this.amount * this.interest * this.duration;
    }
}

class StudentLoan {
    constructor(amount, duration) {
        this.amount = amount;
        this.duration = duration;
        this.interest = 0.03;
        this.calculateInterest = () => this.amount * this.interest * this.duration;
    }
}

class PersonalLoan {
    constructor(amount, duration) {
        this.amount = amount;
        this.duration = duration;
        this.interest = 0.05;
        this.calculateInterest = () => this.amount * this.interest * this.duration;
    }
}

var loan = new Loans()
 
var homeLoan = loan.getLoan('home',3200,5)
console.log(homeLoan.calculateInterest())
 
var studentLoan = loan.getLoan('student',1800,4)
console.log(studentLoan.calculateInterest())
 
var personalLoan = loan.getLoan('personal',1200,2)
console.log(personalLoan.calculateInterest())
