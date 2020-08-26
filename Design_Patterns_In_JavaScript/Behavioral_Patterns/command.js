// Problem Statement #
// you have a BankAccount class. You can check the amount in the account using the checkAccount function, withdraw a certain amount using the withdrawMoney function, and deposit an amount using the depositAmount function.

// Your task is to modify the code above by using the command pattern. Remember, the pattern has the following parts:

// commands: WithDraw, DepositAmount, and CheckAmount

// receiver: BankAccount

// invoker: an AccountManager carrying out the operations requested using a request function

// Use your knowledge of the pattern to divide your code into these objects.

// Input #
// Sending commands to carry out operations such as withdrawMoney, checkAmount, and depositAmount

// Output #
// The amount in the account after operations are performed

// Sample input #
// const manager = new AccountManager();
// const account = new BankAccount(100)
// const check = new CheckAmount(account);
// manager.request(check)
// const withdraw = new WithDrawAmount(account);
// const deposit = new DepositAmount(account);
// manager.request(withdraw,10)
// manager.request(check)
// manager.request(deposit,50)
// manager.request(check)

// Sample output #
// 100
// 90
// 140

// Abstract Command:
class Command {
    execute(args) {}
}

// Invoker:
class AccountManager {
    request(command, args) { command.execute(args) }
}

// Command:
class CheckAmount extends Command {
    constructor(bankAccount) {
        super()
        this.bankAccount = bankAccount
    }
    execute() {
      console.log(this.bankAccount.checkAmount())
    }
  }

// Command:
class WithDrawAmount extends Command {
    constructor(bankAccount) {
        super()
        this.bankAccount = bankAccount
    }
    execute(args) {
        this.bankAccount.withdrawMoney(args)
    }
}


//Command:
class DepositAmount extends Command {
    constructor(bankAccount) {
        super()
        this.bankAccount = bankAccount
    }
    execute(args) {
        this.bankAccount.depositAmount(args)
    }
}

// Reciever:
class BankAccount {
    constructor(amount){
        this.amount = amount
    }

  checkAmount() {
      console.log(this.amount)
  }

  withdrawMoney(withdrawamount) {
    if(withdrawamount > this.amount){
        console.log("Not enough money")
    }
    else{
        this.amount -=  withdrawamount
    }
  }
   depositAmount(money){
        this.amount += money
    }
}
