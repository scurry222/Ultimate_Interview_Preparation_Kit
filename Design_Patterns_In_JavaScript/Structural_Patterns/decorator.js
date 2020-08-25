// class SuperHero {
//     constructor(name,power) {
//       this.name = name
//       this.power = power
//     }
//   }
  
//   const superHeroWithSword = (superHero) => {
//     superHero.sword = true
//     superHero.hasSword = () => `${this.name}'s power is ${this.power}, and he also has a sword now.`
//     return superHero
//   }
  
//   const superHeroWithSpeedandSword = (superHero) => {
//     superHero.superSpeed = true
//     superHero.sword = true
//     superHero.superSpeed = () => `${this.name}'s power is ${this.power}, and he also has the super speed now.`
//     return superHero
//   }
  
//   const superHeroWithSuperSpeed = (superHero) => {
//     superHero.superSpeed = true
//     superHero.hasSpeedAndSword = () => `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
//     return superHero
//   }
  
//   class SuperHeroWithSuperSpeed extends SuperHero{
//     constructor(name,power){
//       super(name,power)
//       this.superSpeed = true
//     }
//     hasSuperSpeed(){
//       return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
//     }
//   }
  
  
//   class SuperHeroWithSpeedandSword extends SuperHero{
//     constructor(name,power){
//       super(name,power)
//       this.speedAndSword = true
//     }
//     hasSpeedAndSword(){
//       return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
//     }
//   }
  
//   var superhero1 = new SuperHeroWithSword("Fire Man", "Fire")
//   console.log(superhero1.hasSword())
  
//   var superhero2 = new SuperHeroWithSuperSpeed("Fire Man", "Fire")
//   console.log(superhero2.hasSuperSpeed())
  
//   var superhero3 = new SuperHeroWithSpeedandSword("Ice Man", "Ice")
//   console.log(superhero3.hasSpeedAndSword())

// Problem Statement

// Given this code, implement such that there is an option to add multiple customizations to a single superhero object.

class SuperHero {
    constructor(name,power) {
      this.name = name
      this.power = power
    }
  }
  
const superHeroWithSword = (superHero) => {
    superHero.sword = true
    superHero.hasSword = () => `${this.name}'s power is ${this.power}, and he also has a sword now.`
    return superHero
}

const superHeroWithSpeedandSword = (superHero) => {
    superHero.superSpeed = true
    superHero.sword = true
    superHero.superSpeed = () => `${this.name}'s power is ${this.power}, and he also has the super speed now.`
    return superHero
}

const superHeroWithSuperSpeed = (superHero) => {
    superHero.superSpeed = true
    superHero.hasSpeedAndSword = () => `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
    return superHero
}

var superhero1 = new SuperHero("Fire Man", "Fire")
console.log(superHeroWithSword(superhero1))
console.log(superHeroWithSuperSpeed(superhero1))
var superhero2 = new SuperHero("Ice Man", "Ice")
console.log(superHeroWithSpeedandSword(superhero2))
