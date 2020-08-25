// Problem statement #
// In this challenge, you have to implement a part of an online hair product ordering system. The available products are shampoo, conditioner, and hair serum. A customer who is shopping online can buy any of these. A product object has the following properties:

// productName: name of the product, that is, shampoo, conditioner, or hair serum

// amount: the number of bottles that the customer wants to buy

// This system will allow a customer to buy an amount of product. If that amount is available in the inventory, a BuyProduct class instance should be initiated. If the amount is not available, a PreOrderProduct class instance should be initiated. The inventory will look like:

// the amount of shampoo is: 20
// the amount of conditioner is: 20
// the amount of hair serum is: 1000
// In the end, the customers should get a message that lets them know if they can buy that amount of bottles or will have to pre-order. Here’s an example:

// `2 bottles of shampoo are available. Click on "buy" to purchase them.`
 
// `2000 bottles of hair serum are not available. You can Pre-order them on the next page.` 
// You need to implement the facade pattern to achieve this. You’ve already been given the Inventory, BuyingProduct, BuyProduct, and PreOrder classes. Write their definitions and link them such that the output mentioned above is shown to the customer.

// Input #
// buyProduct method invoked with some given arguments

// Output #
// The message displayed regarding whether the customer can buy the products or will have to pre-order them

// Sample input #
// var customer = new BuyingProduct()
// customer.buyProduct({productName: "shampoo", amount : 2})
// customer.buyProduct({productName: "hair serum", amount : 2000})
// Sample output #
// `2 bottles of shampoo are available. Click on "buy" to purchase them.`
 
// `2000 bottles of hair serum are not available. You can Pre-order them on the next page.`

class Inventory {
    //initialize the amounts of shampoo, conditioner, and hair serums  
    //check availability of products
    constructor() {
      this.shampooAmount = 20
      this.conditionerAmount = 20
      this.hairSerumAmount = 1000
    }
    availability(product) {
      return product.productName == 'shampoo' && product.amount > this.shampooAmount ? false :
      product.productName == 'conditioner' && product.amount > this.conditionerAmount ? false :
      product.productName == 'hair serum' && product.amount > this.hairSerumAmount ? false : true;
    }
  }
  
class BuyingProduct extends Inventory {
    buyProduct(product) {
        const order = this.availability(product) ? new BuyProduct : new PreOrderProduct
        return order.showDetails(product)
    }
}
  
class BuyProduct{
    showDetails(product) {
        console.log(`${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`)
    }
}
  
class PreOrderProduct{
    showDetails(product) {
        console.log(`${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`)
    }
}

var customer = new BuyingProduct()
customer.buyProduct({productName: "shampoo", amount : 2})
customer.buyProduct({productName: "hair serum", amount : 2000})
