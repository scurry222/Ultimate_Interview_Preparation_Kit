// Problem statement #
// First, you need to define the dressPrice function, which is used to set the price of a dress and return it. The prices of different type of dresses are as follows:

// maxi: 1000

// gown: 2000

// skirt: 500

// Every dress has a unique serialNumber and there cannot be multiple dresses with the same serialNumber. However, in the code given below, there is no such restriction. It allows dresses with the same serialNumber to be created more than once:

// class Dress{
//   constructor(serialNumber,type,color,designer,availability){
//     this.serialNumber = serialNumber
//     this.type = type
//     this.color = color
//     this.designer = designer
//     this.availability = availability
//     this.price = 0
//   }
//   dressPrice(){

// As you can see, line 17 returns false, meaning two dresses with the same serialNumber exist. You need to implement the flyweight pattern such that the condition:

// console.log(pinkdress1 === pinkdress2)
// evaluates to true. Here is how you can achieve this:

// Implement a DressFactory class which has a createDress function. The function definition should not allow different instances of the same serialNumber dress to be created.
// Input #
// Two dresses with the same serialNumber created and dressPrice function called on them

// Output #
// Both instances should be the same and the price for both should be returned

// Sample input #
// const factory = new DressFactory()
// const pinkdress1 = factory.createDress("#123","skirt","pink","Zara","yes")
// const pinkdress2 = factory.createDress("#123","skirt","pink","Zara","yes")
 
// console.log(pinkdress1 === pinkdress2)
// console.log(pinkdress1.dressPrice())
// console.log(pinkdress2.dressPrice())
// Sample output #
// true
// 500
// 500


class Dress{
    constructor(serialNumber,type,color,designer,availability){
      this.serialNumber = serialNumber
      this.type = type
      this.color = color
      this.designer = designer
      this.availability = availability
      this.price = 0
    }
    dressPrice(){
      if (this.type === 'maxi') this.price = 1000
      else if (this.type === 'gown') this.price = 2000
      else if (this.type === 'skirt') this.price = 500
      return this.price
    }
  }
  
  class DressFactory {
    constructor() {
      this.dressList = {}
    }
    createDress(serialNumber, type, color, designer, availability) {
      const exists = this.dressList[serialNumber]
      if (!!exists) return this.dressList[serialNumber]
      else {
        const dress = new Dress(serialNumber, type, color, designer, availability)
        this.dressList[serialNumber] = dress
        return dress
      }
    }
  }