class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.xPos = 0;
    this.place = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
getFinishedPlayers(){
  var finishedPlayersRef = database.ref('finishedPlayers');
  finshedPlayersRef.on("value", (data)=>{
    finishedPlayers = data.val();
  });
}
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
