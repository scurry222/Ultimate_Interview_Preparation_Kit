// Problem statement #
// In this challenge, you need to use the mediator pattern to implement the HR of an office that mediates between the employees (workers and managers) of a company.

// You have been given the dummy code for the HR class. You need to define its constructor and the functions:

// registerEmployee(employee): Registers an employee

// scheduleRaise(raise, worker, manager): Conveys the raise to the manager. Once the manager approves the raise, it gives the raise to the worker

// Now, let’s look at the Manager and Worker classes. Both of them inherit from the Employee class (already defined for you). You need to do the following:

// Define the constructor for both classes

// In Manager class, define the receiveMessage function. It should display the message received from the HR regarding the salary raise of the worker

// In Manager class, define the approveRaise function. It should display a message of approval of the raise and return true after approval

// In the Worker class, define the receiveRaise function. It should increment the worker’s pay by the raise and display a message for the new pay

// Input #
// The scheduleRaise function is called

// Output #
// The messages conveying the raise to the manager, manager approving the raise, and the final pay are displayed

// Sample input #
// var hr = new HR()
// var employee = new Worker(hr,"Joe","Developer",1400)
// var manager = new Manager(hr,"Allen","Team Lead",3000)
// hr.scheduleRaise(200,employee,manager)
// Sample output #
// "Joe should get 200 dollar raise" //HR conveying the message to the manager
// "Joe's 200 dollar raise is approved" //manager approving the raise
// "My new pay is 1600 dollars" //worker announcing the new pay


class HR {
    constructor(){
      this.chatbox = []
    }
  
    registerEmployee(employee){
     this.chatbox[employee.name] = employee
    }
    
    scheduleRaise(raise,worker, manager){
      manager.receiveMessage(worker, raise)
      const approved = manager.finalizeRaise(worker, raise)
      if (approved) {
        worker.receiveRaise(raise)
      }
    }
  }
  
  class Employee{
    constructor(hr,name,position,pay){
      this.hr = hr
      this.name = name
      this.position = position
      this.pay = pay 
    }
  }
  
  class Manager extends Employee{
      constructor(hr, name, position, pay){
       super(hr, name, position, pay)
       this.hr.registerEmployee(this)
    }
      receiveMessage(worker,raise){
       console.log(`${worker.name} should get ${raise} dollar raise`)
      }
      finalizeRaise(worker,raise){
        console.log(`${worker.name}'s ${raise} dollar raise is approved`)
        return true
      }
  }
  
  
  class Worker extends Employee{
    constructor(hr, name, position, pay){
      super(hr, name, position, pay)
      this.hr.registerEmployee(this)
    }
     receiveRaise(raise){
      this.pay += raise
      console.log(`My new pay is ${this.pay} dollars`)
    }
  }