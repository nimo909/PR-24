class dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallthickness=20;
        this.angle=0;
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallthickness,{
            isStatic:true
        })
        this.leftwallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{
            isStatic:true
        })
        Matter.Body.setAngle(this.leftwallBody,this.angle)
        this.rightwallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{
            isStatic:true
        })
        Matter.Body.setAngle(this.rightwallBody,-1*this.angle)
        World.add(world,this.bottomBody)
        World.add(world,this.leftwallBody)
        World.add(world,this.rightwallBody)

    }
    display(){
        var posbottom=this.bottomBody.position;
        var posleft=this.leftwallBody.position;
        var posright=this.rightwallBody.position;
         push()
        translate(posleft.x,posleft.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
stroke(255)
rotate(this.angle)
rect(0,0,this.wallthickness,this.dustbinHeight)
pop()


    
    push()
    translate(posright.x,posright.y)
    rectMode(CENTER)
    angleMode(RADIANS)
    fill(255)
stroke(255)
rotate(-1*this.angle)
rect(0,0,this.wallthickness,this.dustbinHeight)
pop()

push()
        translate(posbottom.x,posbottom.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
stroke(255)
rect(0,0,this.dustbinWidth,this.wallthickness)
pop()
    }
    }    
