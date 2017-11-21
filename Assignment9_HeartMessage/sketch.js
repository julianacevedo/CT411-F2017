var colorCall = ["Reason", "Is", "Powerless", "In", "The", "Expression", "Of", "Love"];

var circX = 394;
var speed = 9;

var fire = 0;

var red1 = [209, 30, 30];
var green1 = [58,292,4];
var blue1 = [153,224,228];

var red2 = [228,30,216];
var green2 = [95,157,25];
var blue2 = [88,205,100];


function setup() {
   createCanvas(windowWidth,windowHeight); 
    
}

function draw() {

   background (0);
    
    
    fill(red1[fire],green1[fire],blue1[fire]);
    textSize(68);
    textAlign(LEFT);
    text(colorCall[fire],470,570);
    
    noStroke();
    textAlign(LEFT);

    
//    F L A M E
    
    var y = color(244, 217, 83);
            fill(y);  
            noStroke(); 
    
    triangle(296, 160, 348, 367, 386, 230);
    triangle(339, 75, 345, 252, 426, 177);
    triangle(382, 137, 443, 227, 407, 38);
    triangle(318.5, 252.5, 456, 342, 477, 86);
    triangle(466, 205, 456, 342, 507, 163);
    
    var o = color(219, 97, 14);
             fill(red1[fire],green1[fire],blue1[fire]); 
            noStroke(); 
    
    triangle(335, 237, 368, 360, 452, 358);
    triangle(370, 285, 400, 206, 426, 314);
    triangle(379, 295, 437, 358, 456, 237);
    
//    H E A R T
    
    var r = 
            fill(red1);  
            noStroke();  
    
    triangle(259, 405, 523.37, 404.64, 391, 568);
    triangle(426, 320, 361, 379, 466, 379);
    triangle(341.2, 310.78, 332, 423, 426, 372);
    ellipse(466, 372, 132, 132);
    ellipse(316, 372, 132, 132);
    rect(354, 379, 78, 44);
    
//    E Y E
    
    
     var w =
            fill(255, 255, 255);  
            noStroke(); 
    
    triangle(327, 443, 365, 413, 382, 460);
    triangle(423, 413, 455, 443, 413.5, 457.5);
    ellipse(394, 432.5, 80, 57);
         
     
    

     var b = 
             fill(red1[fire],green1[fire],blue1[fire]); 
            noStroke(); 
    
    ellipse(circX, 432.5, 54.5, 45);

    
}

function mousePressed(){
    fire = fire + 1;
    
    if(fire == colorCall.length){
        fire = 0;
    }
}