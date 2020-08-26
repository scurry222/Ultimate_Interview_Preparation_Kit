// Problem statement #
// In this challenge, you have to use the chain of responsibility pattern to implement the functionality of assigning work to employees.

// Each employee has a name and a level property. The level of an employee tells which task they can handle, that is, easy, medium, or hard. Hence, each employee is assigned a task depending on their level.
// You have already been provided an abstract class EmployeeChain. It contains two functions:

// setNextEmp: sets the next object in the chain
// assignWork: assigns work to an employee depending on their level

// You have to use the chain of responsibility pattern to implement these functions, so you can achieve the final goal of assigning work to employees.

// Input #
// Function assignWork is called to assign work to an employee

// Output #
// A message is displayed that the work has been assigned to the appropriate employee

// Sample input #
// var w1 = new EasyLevelWorkHandler(); 
// var w2 = new MediumLevelWorkHandler(); 
// var w3 = new HardLevelWorkHandler(); 
// w1.setNextEmp(w2); 
// w2.setNextEmp(w3); 
 
// const emp1 = new Employee("Joe","Easy")
// const emp2 = new Employee("Anne","Medium")
// const emp3 = new Employee("Shawn","Hard")
  
// w1.assignWork(emp1); 
// w1.assignWork(emp2); 
// w1.assignWork(emp3); 
// Sample output #
// "Easy work assigned to: Joe"    
// "Medium work assigned to: Anne" 
// "Hard work assigned to: Shawn"


class EmployeeChain {
    setNextEmp(nextEmpInChain){}
    assignWork(req){console.log(`Cannot find level to assign employee to`)}
}
  
class Employee {
  constructor(name, level) {
    this.name = name
    this.level = level
  } 
  getName = () => this.name

  getLevel = () => this.level
}
  
class EasyLevelWorkHandler extends Employee {
  constructor() {
    super()
    this.nextEmpInChain = new EmployeeChain()
  }
  setNextEmp = (nextEmpInChain) => this.nextEmpInChain = nextEmpInChain

  assignWork = (req) => (req.getLevel() == 'Easy') ?
   console.log(`${req.getLevel()} work assigned to: ${req.getName()}`) : this.nextEmpInChain.assignWork(req) 

}

class MediumLevelWorkHandler extends Employee {
  constructor() {
    super()
    this.nextEmp = new EmployeeChain()
  }
  setNextEmp = (nextEmpInChain) => this.nextEmpInChain = nextEmpInChain
  
  assignWork = (req) => (req.getLevel() == 'Medium') ?
    console.log(`${req.getLevel()} work assigned to: ${req.getName()}`) :
    this.nextEmpInChain.assignWork(req)
}


class HardLevelWorkHandler extends Employee {
  constructor() {
    super()
    this.nextEmpInChain = new EmployeeChain()
  }
  setNextEmp = (nextEmpInChain) => this.nextEmpInChain = nextEmpInChain

  assignWork = (req) => (req.getLevel() == 'Hard') ?
    console.log(`${req.getLevel()} work assigned to: ${req.getName()}`) :
    this.nextEmpInChain.assignWork(req)
}

var w1 = new EasyLevelWorkHandler(); 
var w2 = new MediumLevelWorkHandler(); 
var w3 = new HardLevelWorkHandler(); 
w1.setNextEmp(w2); 
w2.setNextEmp(w3); 
 
const emp1 = new Employee("Joe","Easy")
const emp2 = new Employee("Anne","Medium")
const emp3 = new Employee("Shawn","Hard")
  
w1.assignWork(emp1); 
w1.assignWork(emp2); 
w1.assignWork(emp3);
