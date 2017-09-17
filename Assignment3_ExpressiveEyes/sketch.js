var isWhite = false;
var isBlack = false;
var GreenBg = false;

function setup() {
   createCanvas(800,600); 
    
}

function draw() {
    if(GreenBg == false){
   background (68, 194, 141);
    }
    else{
        background (0);
    }
    
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
fill(o);  
noStroke(); 
    
    triangle(335, 237, 368, 360, 452, 358);
    triangle(370, 285, 400, 206, 426, 314);
    triangle(379, 295, 437, 358, 456, 237);
    
//    H E A R T
    
    var r = color(209, 30, 30);
fill(r);  
noStroke();  
    
    triangle(259, 405, 523.37, 404.64, 391, 568);
    triangle(426, 320, 361, 379, 466, 379);
    triangle(341.2, 310.78, 332, 423, 426, 372);
    ellipse(466, 372, 132, 132);
    ellipse(316, 372, 132, 132);
    rect(354, 379, 78, 44);
    
//    E Y E
    
    
     if(isWhite == false){
    
     var w = color(255, 255, 255);
fill(w);  
noStroke(); 
    
    triangle(327, 443, 365, 413, 382, 460);
    triangle(423, 413, 455, 443, 413.5, 457.5);
    ellipse(394, 432.5, 80, 57);
         
     }
    
    else {
        var r = color(209, 30, 30)
fill(r);  
noStroke(); 
    
    triangle(327, 443, 365, 413, 382, 460);
    triangle(423, 413, 455, 443, 413.5, 457.5);
    ellipse(394, 432.5, 80, 57);
    }
    
    
    if(isBlack == false){
     var b = color(0);
fill(b);  
noStroke(); 
    
    ellipse(394, 432.5, 54.5, 45);
    }
    
    else{
        var r = color(209, 30, 30)
fill(r);  
noStroke(); 
    
    ellipse(394, 432.5, 54.5, 45);
    }
   
    
}

function mousePressed(){
    isWhite = !isWhite;
    isBlack = !isBlack;
    GreenBg = !GreenBg;
}