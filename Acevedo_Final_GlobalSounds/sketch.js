var bgimg;

var buttonClicktest= false;

var vallenato;

//Flowers Loop
    var x = 0;
    var y = 0;
    var size = 0;

//South America
var rectX = 340;
var rectY = 600;
var rectSize = 300;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;

//North America
var naX = 50;
var naY = 120;
var naSize = 440;
var naTop = naY;
var naBottom = naY + naSize;
var naLeft = naX;
var naRight = naX + naSize;

//Africa
var afrX = 550;
var afrY = 500;
var afrSize = 300;
var afrTop = afrY;
var afrBottom = afrY + afrSize;
var afrLeft = afrX;
var afrRight = afrX + afrSize;


function preload(){
    bgimg= loadImage("DottedmMap_1400x1100.png");
    saimg= loadImage("DottedMap_SouthAmerica.jpg");
    naimg= loadImage("DottedMap_North America.jpg");
    afrimg= loadImage("DottedMap_Africa.jpg");
    homeimg= loadImage("homeButton.png");
    
    vallenato = loadSound("RobarteunBeso.mp3");
}


function setup(){
  createCanvas(1400,1100);  
    
    
}

function draw(){
    background(300);
    image(bgimg, width/2, height/2, 0, 0);
    image(homeimg,60,60,50,50);
    southAmerica(); 
    northAmerica();
    africa();
    
    if (buttonClicktest){
//    LOOP
    for (var i=0; i<15; i++){
        flower(i*100, random(680), random(60));
        
    }

////    MODULES OF FLOWERS
//    flower(180,180,50);
//    flower(380,380,80);
//    flower(580,180,50);
//    flower(780,380,80);
        
    }
      
    
    
}
    



function southAmerica(){

    
if (mouseX>rectLeft && mouseX<rectRight && mouseY> rectTop && mouseY< rectBottom){
        imageMode(CENTER);
        image(saimg, width/2, height/2, 0, 0);
   
}
    

}

function northAmerica(){

    
if (mouseX>naLeft && mouseX<naRight && mouseY> naTop && mouseY< naBottom){
            imageMode(CENTER);
            image(naimg, width/2, height/2, 0, 0);
    
}
    

}

function africa(){

    
if (mouseX>afrLeft && mouseX<afrRight && mouseY> afrTop && mouseY< afrBottom){
        imageMode(CENTER);
        image(afrimg, width/2, height/2, 0, 0);
   
}
    

}


function flower(x,y,size){
    strokeWeight(size/5);
    rectMode(CORNERS);
    fill(255,255,0);
    rect(x, y, x-size*2, y-size*2);
    rect(x, y, x+size*2, y-size*2);
    rect(x, y, x+size*2, y+size*2);
    rect(x, y, x-size*2, y+size*2);
    stroke(0, 255, 0);
    strokeWeight(size*.85);
    line(x, y, x, y+size*8);
    line(x, y+size*4, x-size*2, y+size*4);
    line(x, y+size*6, x-size*2, y+size*4);
    line(x, y+size*5, x+size*2, y+size*4);
    line(x, y+size*3, x+size*2, y+size*4);
    stroke(0);
    fill(0);
    strokeWeight(size/5);
    ellipse(x, y, size*2, size*2);
    
}




function mousePressed(){
    
if (mouseX>rectLeft && mouseX<rectRight && mouseY> rectTop && mouseY< rectBottom){
    

    
            buttonClicktest= !buttonClicktest;
    
    if (buttonClicktest){
        vallenato.play();
    }else{
        vallenato.stop();
        }

    } 
       


}
    


