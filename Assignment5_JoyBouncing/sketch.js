var circY1 = 50*3;
var circY2 = 40*3;
var circY3 = 60*3;
var circY4 = 55*3;
var speed= 6;
var tr = 75;
var r = random([50],[200])

function setup() {
   createCanvas(windowWidth,windowHeight); 
    
}

function draw() {
   background (150);

    
//    PATTERN
          for (var s=6; s <width; s+=40){
      
      for (var t=6; t <width; t+=40){
          strokeWeight(1.2);
          fill(225,215,78,40);
          rect (s,t,60,60);
          
          strokeWeight(1.7);
          stroke(231,0,112);
          fill(1,0,150,);
          ellipse(s,t,90,90);
      }
  }
    
    for (var s=26; s <width; s+=40){
      
      for (var t=26; t <width; t+=40){
      
        fill(231,0,112);
          ellipse(s,t,4,4);   
      }
      }
        //    TEXT
    textSize(42);
    fill(231,0,112);
    stroke (1,0,150);
    text("JOY IS EVERYWHERE",mouseX, mouseY,);
    
//    HAPPY BOUNCING FACE
    
    fill(1,0,150);
    stroke(231,0,112);
    ellipse(50*3,circY1,50*3,50*3);
    
    fill(231,0,112);
    noStroke();
    ellipse(40*3,circY2,15*3,15*3);
    ellipse(60*3,circY2,15*3,15*3);
    ellipse(50*3,circY3,15*3,15*3);
    
    fill(1,0,150);
    noStroke();
    ellipse(50*3,circY4,15*3,15*3);
    
        if (circY1>height || circY1<0 && circY2>height || circY2<0 && circY3>height || circY3<0 && circY4>height || circY4<0 ){
        speed=speed*-1;
    }
    
    else{
        
    }
    circY1=circY1+speed;
    circY2=circY2+speed;
    circY3=circY3+speed;
    circY4=circY4+speed;
    
    
    
    

      
}