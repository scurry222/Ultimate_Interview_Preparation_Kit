// Problem statement #
// In this challenge, you have to implement the MVC pattern to display the items in a shopping cart.

// You have three components:

// ShoppingCartModel

// The shopping cart model should have the following properties: itemNumber, itemName, itemQuantity, and itemPrice. It should also have a get function for each property.

// ShoppingCartView

// You are already given the part of the code that initializes the current view for the controller and the displayItem function that displays an item’s information.

// Your task is to implement a buyItem function to buy an item.

// A changeItemQuantity function that updates the quantity of an item in the cart. It should take the following parameters: itemNumber and newQuantity.

// ShoppingCartController

// The controller should update the view whenever a change occurs in the shopping cart model or if a user edits the view.

// Input #
// The buyItem function is called to buy items and changeItemQuantity is called to change the quantity of an existing item

// Output #
// The items in the cart are displayed

// Sample input #
// var view = new ShoppingCartView();
// var controller = new ShoppingCartController();
// view.registerWith(controller);
// view.buyItem("Popcorn", 3, 2.50);
// view.changeItemQuantity(0,6);
// Sample output #
// "Item Number: 0"
// "Item: Popcorn"
// "Quantity: 3"
// "Price: 2.5"
// "Item Number: 0"
// "Item: Popcorn"
// "Quantity: 6"
// "Price: 2.5"


class ShoppingCartModel { 
   constructor(itemNumber, itemName, itemQuantity, itemPrice){
       this.itemNumber = itemNumber;
       this.itemName = itemName;
       this.itemQuantity = itemQuantity;
       this.itemPrice = itemPrice;
   }
   getItemNumber = () => this.itemNumber;

   getItemName = () => this.itemName;

   getItemQuantity = () => this.itemQuantity;

   getItemPrice = () => this.itemPrice;
} 

class ShoppingCartView {
    constructor(){
        this.controller = null;
    }
    registerWith = (controller) => {
        this.controller = controller;
        this.controller.addView(this); 
    }
    
    displayItem = (itemNumber,itemName,itemQuantity,itemPrice) => console.log(`Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`); 

    buyItem = (itemNumber, itemName, itemQuantity, itemPrice) => this.controller.buyItem(itemNumber, itemName, itemQuantity, itemPrice)

    changeItemQuantity = (itemNumber, newQuantity) => this.controller.setItemQuantity(itemNumber, newQuantity)
} 

class ShoppingCartController { 
    constructor(){
        this.model = null;
        this.view = null;
        this.itemList = [];
    }
    
    addView = (view) => this.view = view;

    addModel = (model) => this.model = model;

    buyItem = (itemName, itemQuantity, itemPrice) => {
        this.itemList.push(new ShoppingCartModel(this.itemList.length, itemName, itemQuantity, itemPrice))
        this.updateView()
    }
    updateView = () => {
        this.itemList.forEach((item) => this.view.displayItem(
            item.getItemNumber(),
            item.getItemName(),
            item.getItemQuantity(),
            item.getItemPrice())
        )
    }
    setItemQuantity = (itemNumber, newQuantity) => {
        if (this.itemList[itemNumber]) {
            this.itemList[itemNumber].itemQuantity = newQuantity;
            this.updateView();
        }
    }
}

var view = new ShoppingCartView();
var controller = new ShoppingCartController();
view.registerWith(controller);
view.buyItem("Popcorn", 3, 2.50);
view.changeItemQuantity(0,6);
