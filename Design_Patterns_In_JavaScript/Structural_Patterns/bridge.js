// modify the code using the bridge pattern so it can be run as follows
// const fb = new Facebook("Facebook", "Social Networking")
// const mode = new Mode(fb)
// mode.darkMode()
// fb.displayMode() 
  
// const whatsapp = new WhatsApp("Whatsapp", "Chatting")
// const mode2  = new Mode(whatsapp)
// mode2.lightMode()
// whatsapp.displayMode()  

class Applications {
    constructor(name, type){
        this.name = name
        this.type = type
    }
    display(){}
    displayMode(){}
}

class Mode{
    constructor(app){
        this.app = app
        this.lightMode = () => this.app.setLightMode()
        this.darkMode = () => this.app.setDarkMode()
    }
}

class WhatsApp extends Applications{
    constructor(name,type){
        super(name,type)
        this.mode = "light"
        this.setLightMode = () => this.mode = "light"
        this.setDarkMode = () => this.mode = "dark"
    }
    display() { console.log(`Welcome to whatsapp for ${this.type}.`) }
    displayMode() { console.log(`You are using whatsapp in ${this.mode} mode.`) }
}

class Facebook extends Applications{
    constructor(name,type){
        super(name,type)
        this.mode = "light"
        this.setLightMode = () => this.mode = "light"
        this.setDarkMode = () => this.mode = "dark" 
    }
    display() { console.log(`Welcome to facebook for ${this.type}.`) }
    displayMode() { console.log(`You are using facebook in ${this.mode} mode.`) }
}
