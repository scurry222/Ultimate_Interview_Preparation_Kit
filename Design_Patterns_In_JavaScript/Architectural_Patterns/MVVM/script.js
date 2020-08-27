class Model {
	constructor(){
		this.model  = {color: "red"};
		this.observers = [];
	}
	subscribe = (observer) => this.observers.push(observer)

	notifyObservers = (attrNm, newVal) => this.observers.forEach((observer) => observer(attrNm, newVal))

	getCurrentColor = (key) => this.model[key]
	
	setColor = (key, value) =>{
		this.model[key] = value
		this.notifyObservers(key, value)
	}
}

class ViewModel{
	constructor(model){
		this.bind = (viewElement, modelElement) => {
            viewElement.style.color = model.getCurrentColor(modelElement)
            // reflect changes on the user interface
			model.subscribe((attrNm, newValue) => {
				const elem = document.getElementById(attrNm)
				if (newValue === "red") elem.style.color = "blue"
				else if (newValue === "green") elem.style.color = "red"
                else if (newValue === "blue") elem.style.color = "green"
            })
            // reflect changes on UI side
			viewElement.addEventListener('input', () => model.setColor("color", viewElement.value))
	    }
	}
}


var nameInput = document.getElementById('color');
var model = new Model()
var viewModel = new ViewModel(model);
viewModel.bind(nameInput, 'color');
