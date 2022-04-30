const io=require("../server").io
const PlayerData=require("../classes/playerdata")
const Player=require("../classes/players")
const PlayerConfig=require("../classes/playerconfig")
var orbs=[]

var players=[]

var settings={
  defaultOrbs:500,
  defaultSpeed:6,
  defaultSize:6,
  defaultZoom:1.5,
  worldWidth:500,
  worldHeight:500
}

function getRandomColor(){
    const r=Math.floor((Math.random() * 200)+50)
    const g=Math.floor((Math.random() * 200)+50)
    const b=Math.floor((Math.random() * 200)+50)
    return `rgb(${r},${g},${b})`
  }
  
  function addorbs(){
  
    for(var i=0;i<500;i++){
      var Orb={
        color:getRandomColor(),
        locX:Math.floor(Math.random() * settings.worldWidth),
        locY:Math.floor(Math.random() * settings.worldHeight),
        radius:5
    }
    
      orbs.push(Orb)
    }

  }

  addorbs()

  setInterval(()=>{
    io.to("game").emit("tock",players)
      },33)
 

io.on("connection",(socket)=>{
socket.join("game")
socket.on("init",(data)=>{
console.log(data)
let playerdata=new PlayerData(data.playername,settings);
let playerconfig=new PlayerConfig(settings);
let player=new Player(socket.id,playerdata,playerconfig)
players.push(playerdata)
socket.emit("initReturn",orbs)

socket.on("tick",(data)=>{
  
})
})
    
})



module.exports=io