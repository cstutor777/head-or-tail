const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
@property(cc.Label) CoinDisplay   : cc.Label = null;
@property(cc.Label) BetHeadDisplay: cc.Label = null;
@property(cc.Label) BetTailDisplay: cc.Label = null;
@property(cc.Sprite)HeadCoin:cc.Sprite = null;
@property(cc.Sprite)TailCoin:cc.Sprite = null;

CoinData (){
    var userCoin = this.Cash
    localStorage.setItem('Cash', JSON.stringify(userCoin))
    cc.log(userCoin)    
    this.CoinDisplay.string = 'COIN : ' + userCoin
}

Cash = 1000
Bet = 0 
roundCounter = 0

userMove = null
    move = 0
    player = ''
guess = {
    bet: 0,
    userBet:''
}
moves = {
       Head:0,
       Tail:1,
       
}

onLoad () {
    this.CoinData()
    
}



Button_10Coin(){
    var Cash = this.Cash
    var Coin = 10
        Cash = Cash - Coin 
    cc.log ('10 Coin')
    
    
    let Bet = this.guess = {
        bet: 10,
        userBet: '10'
    }
   
    cc.log(Cash)
    cc.log(Bet)
    

    
}
Button_50Coin(){
    var Cash = this.Cash
    var Coin = 50
        Cash = Cash - Coin 
    cc.log ('50 Coin')
    this.CoinData()

    
    let Bet = this.guess = {
        bet: 50,
        userBet: '50'
    }
 
    
    cc.log(Cash)
    cc.log(Bet)
    

    
}
Button_100Coin(){
    var Cash = this.Cash
    var Coin = 100
        Cash = Cash - Coin 
    cc.log ('100 Coin')

    
    let Bet = this.guess = {
        bet: 100,
        userBet: '100'
    }
 
    
    cc.log(Cash)
    cc.log(Bet)
    

    
}
Button_500Coin(){
    var Cash = this.Cash
    var Coin = 500
        Cash = Cash - Coin 
    cc.log ('500 Coin')
    
    
    let Bet = this.guess = {
        bet: 50,
        userBet: '50'
    }
 
    
    cc.log(Cash)
    cc.log(Bet)
    

    
}
// getFlip(){
//     let coinFlip = Math.floor(Math.random()) + 1
//     if (coinFlip == 1) {
//         var flipResult = "heads";
//     } else {
//         var flipResult = "tails";
//     }     cc.log(flipResult)
//     return {
//         move: coinFlip,
//         player: "Computer"
//         }  
// }
getFlip(){
    let move = Math.floor(Math.random() * 3)
    return {
    move: move,
    player: "Computer"
    }
}

Button_Flip (){
    this.roundCounter++
    this.getFlip()
    var move = 0 
    var player = ''
if(this.move == 0){
    cc.log ('heads')
    move = this.move
    player = this.player
    cc.log (move)
    }else if(this.move == 1){
        move = this.move
        player = this.player    
        cc.log ('tails')
    
    }
        cc.log (this.move)
        cc.log (this.player)           
        var computerMove = this.getFlip().move
       

        if(computerMove == 0){
            this.TailCoin.enabled = true
            
        }else if(computerMove == 1){
          this.HeadCoin.enabled = true
        
        }
            
            

// if(computerMove == 0){
//             cc.log('computer win')     
//     }else{
//             cc.log('player win')
//           }
            
// if(computerMove == 1){
//             cc.log('computer win')
//     }else{
//             cc.log('player win')  
// }
//             this.Bet
// }
//     }                         
//      if (this.roundCounter == 5) {
                                
    
//     }


}
}
