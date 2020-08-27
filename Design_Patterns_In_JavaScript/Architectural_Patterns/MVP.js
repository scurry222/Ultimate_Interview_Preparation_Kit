// Problem statement #
// In this challenge, you need to implement sending and displaying a sent email using the MVP pattern. You have already been given the dummy code for the classes you need to implement.

// The Model class should contain the following:

// The properties: sender’s name, receiver’s name, and the email title

// The get and set functions to access and set the values of each property

// In the View class, you need to do the following:

// Define the sendEmail function to send an email
// In the Presenter class, you need to do the following:

// Define the setModel function that sets the model

// Define the getView function to return the view

// Define the sendEmail function that sets the properties of the email and displays the email information

// Input #
// The sendEmail function is called

// Output #
// The information of the email is displayed

// Sample input #
// var model   = new Model()
// var view = new View()
// var presenter = new Presenter(view)
// presenter.setModel(model)
// view.registerWith(presenter)
// presenter.getView().sendEmail("Rachel", "Joey", "Rent Discussion")
// presenter.getView().sendEmail("Monica", "Phoebe", "Smelly Cat Draft")
// Sample output #
// "Email From: Joey To: Rachel Title: Rent Discussion"
 
// "Email From: Phoebe To: Monica Title: Smelly Cat Draft"


class Model{
    constructor() {
        this.senderName = "";
        this.recieverName = "";
        this.emailTitle = "";
    }
    getSenderName = () => this.senderName;
    setSenderName = (senderName) => this.senderName = senderName;

    getRecieverName = () => this.recieverName;
    setRecieverName = (recieverName) => this.recieverName = recieverName;

    getEmailTitle = () => this.emailTitle;
    setEmailTitle = (emailTitle) => this.emailTitle = emailTitle;
}

class View{
    constructor(){
        this.presenter = null;
    }

    registerWith = (presenter) => this.presenter = presenter;

    sendEmail = (to,fromWhom, emailTitle) => this.presenter.sendEmail(to, fromWhom, emailTitle)

    displayEmailInfo = (senderName,recieverName, emailTitle) => console.log(
        "Email From: ",
        senderName,
        " To: ",
        recieverName,
        " Title: ",
        emailTitle
    );

}

class Presenter {
    constructor(view){
        this.view = view;
        this.model = null;
    }

    setModel = (model) => this.model = model;

    getView = () => this.view;

    sendEmail = (to,fromWhom, emailTitle) => {
        this.model.setSenderName(fromWhom);
        this.model.setRecieverName(to);
        this.model.setEmailTitle(emailTitle);
        this.view.displayEmailInfo(
            this.model.getSenderName(),
            this.model.getRecieverName(),
            this.model.getEmailTitle()
        )
    }
}

var model   = new Model()
var view = new View()
var presenter = new Presenter(view)
presenter.setModel(model)
view.registerWith(presenter)
presenter.getView().sendEmail("Rachel", "Joey", "Rent Discussion")
presenter.getView().sendEmail("Monica", "Phoebe", "Smelly Cat Draft")
