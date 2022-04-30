class playerData{
    constructor(playername,settings){
        this.name=playername,
        this.locX=Math.floor(settings.worldWidth*Math.random()+10)
        this.locY=Math.floor(settings.worldHeight*Math.random()+10)
        this.radius=settings.defaultSize,
        this.color=getRandomColor(),
        this.score=0

    }
}

function getRandomColor(){
    const r=Math.floor((Math.random() * 200)+50)
    const g=Math.floor((Math.random() * 200)+50)
    const b=Math.floor((Math.random() * 200)+50)
    return `rgb(${r},${g},${b})`
  }

  module.exports=playerData