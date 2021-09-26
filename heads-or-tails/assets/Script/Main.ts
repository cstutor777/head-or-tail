
const {ccclass, property} = cc._decorator
@ccclass
export default class NewClass extends cc.Component {
  @property(cc.EditBox)   editbox:cc.EditBox = null;
  @property(cc.Node)      popup:cc.Node = null;
  @property(cc.Label)     usernameDisplay: cc.Label = null;
  @property(cc.Label)     winDisplay : cc.Label = null ; 
  @property(cc.Label)     loseDisplay : cc.Label = null ;
  // @property(cc.Label)     CoinDisplay: cc.Label = null;
  // @property(cc.Label)     playerBetDisplay: cc.Label = null;
  // @property(cc.Label)     Bet_Tail: cc.Label = null;
  @property(cc.Node)      Head:cc.Node = null;
  @property(cc.Node)      Tail:cc.Node = null;
  @property(cc.Node)      OR:cc.Node = null;
  

////////////////////////////////////////////////////////////////////////// Scene01
Show_Window (){
    var format = /^[a-zA-Z0-9]{1,16}$/
    if(this.editbox.string.match(format)){
      this.Next_Scene()
      
    }else{
      cc.log(this.editbox)
      this.popup.active = true
      this.popup.opacity = 0
      this.popup.setScale(1)
      cc.tween(this.popup)
      .to(0.8, { scale:1, opacity:255},{easing: "quartInout"})
      .start()
    }
}
hide_Window(){
  cc.tween(this.popup)
  .to(0.5, { scale:0.2, opacity:0},{easing: "quartInout"})
  .call(()=>{ this.popup.active = false;})
  .start()  
}
Button_OK(){
  this.hide_Window()
} 
Next_Scene(){
    cc.director.loadScene("Scene02")
  }
userData (){
    var playerName = this.editbox.string 
    localStorage.setItem('playerName', JSON.stringify(playerName))
    
}
readData(){
    var playerName = JSON.parse(localStorage.getItem('playerName'))
    this.usernameDisplay.string = playerName
    cc.log (playerName)
    
   
}
onLoad(){
  
  this.readData()
  this.Head_or_tail()
 
}
start(){
  
  this.Head_or_tail()
}

//////////////////////////////////////////////////////////////////////////Scene02
Head_or_tail(){
  this.OR.active = true
  this.OR.opacity = 0
  this.OR.setScale(1)
  cc.tween(this.OR)
  .to(0.8, { scale:1, opacity:255},{easing: "quartInout"})
  .start()
  cc.log('Choice Head or Tail')
}
hide_Head_or_tail(){
  cc.tween(this.OR)
  .to(0.5, { scale:0.2, opacity:0},{easing: "quartInout"})
  .call(()=>{ this.OR.active = false;})
  .start()  

}
hide_Head(){
  cc.tween(this.Head)
  .to(0.5, { scale:0.2, opacity:0},{easing: "quartInout"})
  .call(()=>{ this.OR.active = false;})
  .start()  
}
hide_tail(){
  cc.tween(this.Tail)
  .to(0.5, { scale:0.2, opacity:0},{easing: "quartInout"})
  .call(()=>{ this.OR.active = false;})
  .start()  
}

///////////////////////////////////////////////////////////////////////////////
Button_Cancel(){
  this.Head_or_tail()
 }

Button_Head(){
  
  this.Head.active = true
  this.Head.opacity = 0
  this.Head.setScale(1)
  cc.tween(this.Head)
  .to(0.8, { scale:1, opacity:255},{easing: "HeadInout"})
  .start()
  cc.log('Head')
  this.hide_Head_or_tail()
  this.hide_tail()
}
Button_Tail(){
  
  this.Tail.active = true
  this.Tail.opacity = 0
  this.Tail.setScale(1)
  cc.tween(this.Tail)
  .to(0.8, { scale:1, opacity:255},{easing: "TailInout"})
  .start()
  cc.log('Tail')
  this.hide_Head_or_tail()
  this.hide_Head()
}
 

}