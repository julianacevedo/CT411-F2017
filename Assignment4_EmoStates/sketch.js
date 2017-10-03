var img1;
var img2;
var img3;
var neutraFont;
var circX;
var circY;
var circDiameter = 60;
var circRadius = circDiameter/2;
var d;
var isClicked =false;
var col1 = 30;
var col2 = 200;

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
    text("Oooh lala",width/3,570);
    ellipse(circX,circY,circDiameter,circDiameter);
    d =dist(circX, circY, mouseX, mouseY);  
    
        if (d < circRadius && isClicked ==false){
        imageMode(CENTER);
        image (img2,width/2, height/2, 500, 500);
        col1=30;
        col2=200;
        fill(0);
    ellipse(circX,circY,circDiameter,circDiameter);
    d =dist(circX, circY, mouseX, mouseY);  

        fill(40,10,215);
        text("What is that?",width/3,570);
        isClicked = !isClicked;
    }
    else if (d < circRadius && isClicked ==true){
        imageMode(CENTER);
        image (img3,width/2, height/2, 500, 500);
        col1=220;
        col2=30;
        fill(240,00,215);
        text("very funny!",width/3,570);
        isClicked = !isClicked;
        ellipse(circX,circY,circDiameter,circDiameter);
    d =dist(circX, circY, mouseX, mouseY);
    }
    
}

function mousePressed(){
    if (d < circRadius && isClicked == true){
//        imageMode(CENTER);
//        image (img1,width/2, height/2, 500, 500);
//        col1=30;
//        col2=200;
//        fill(40,10,215);
//        text("Very funny",width/3,570);
        isClicked = !isClicked;
    }else if (d < circRadius && isClicked ==false){
//        imageMode(CENTER);
//        image (img2,width/2, height/2, 500, 500);
//        col1=220;
//        col2=30;
//        fill(240,00,215);
//        text("funny still?",width/3,570);
        isClicked = !isClicked;
    }
    
}