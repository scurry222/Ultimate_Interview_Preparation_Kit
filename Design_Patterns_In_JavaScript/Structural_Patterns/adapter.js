// Problem statement

// The turn value to be a random number. In the playGame function, if the turn is an even number, it’ll be player 1’s turn else it’ll be player 2’s turn. You name the updated function, newPlayGame.

// Make a new interface with the updated functionality.

// Make an adapter class to associate the new API with the old one.

// old interface
class TruthAndDare {
    constructor() {
      this.turn = Math.floor(Math.random() * 2) + 1;
    }
    Getturn() {
      if(this.turn == 1){
        this.turn = 2
      }else{
        this.turn = 1
      }
      return this.turn
    }
    playGame(playerOnename,playerTwoname) {
      if(this.Getturn() == 1){
        return`${playerOnename}'s turn`
      }else{
        return `${playerTwoname}'s turn`
      }
    }
}
  
// new interface
class NewTruthAndDare {
    constructor(randomValue){
        this.turn = randomValue
    }

    newplayGame(playerOnename,playerTwoname){
        return this.turn % 2 == 0 ? `${playerOnename}'s turn` : `${playerTwoname}'s turn`
    }
}
  
// Adapter Class
class Adapter {
    constructor(randomValue){
        const newGame = new NewTruthAndDare(randomValue)

        this.playGame = (playerOnename, playerTwoname) => newGame.newplayGame(playerOnename, playerTwoname);
    }
}

const obj = new Adapter(Math.floor(Math.random() * 2))
console.log(obj.playGame("Ross", "Channdler"))
