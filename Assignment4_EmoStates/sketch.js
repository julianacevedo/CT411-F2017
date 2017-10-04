var img1;
var img2;
var img3;
var neutraFont;
var circX;
var circY;
var circDiameter = 60;
var circRadius = circDiameter/2;
var d;
//var isClicked =false;
var col1 = 30;
var col2 = 200;
var state = 1;
var words =  text("Ooh lala",width/3,570);

function preload(){
    img1 = loadImage("MrBean1.jpg");
    img2 = loadImage("MrBean2.jpg");
    img3 = loadImage("MrBean3.jpg");
    neutraFont = loadFont("NeutraDisp-Bold.otf");
}

function setup() {
   createCanvas(600,600);
    textFont(neutraFont);
    textSize(60);
    circX = 70;
    circY = 70;
}

function draw() {
   background (col1,col2,65);
    imageMode(CENTER);
    image (img1,width/2, height/2, 500, 500);
    fill(40,10,215);
    words = text("Ooh lala",width/3,570);
    ellipse(circX,circY,circDiameter,circDiameter);
    d =dist(circX, circY, mouseX, mouseY);  
    
}

function mousePressed(){
   if(d < circRadius && state == 1){
        img1 = img2;
        col1 = 30;
        col2 = 200;
        state = state +1;
    }else if (d < circRadius && state == 2){
        fill(40,10,115);
        words = text("Ooooh lalala",width/3,570);
        img2 = img3;
        col1 = 100;
        col2 = 30;
        state = state+1;
    }else if (d < circRadius && state == 3){
        fill(40,10,115);
        words = text("Ooooh lalalala",width/3,570);
        img3 = img1;
        col1 = 255;
        col2 = 60;
        state = 1;
    }
    
}