function setup() {
   createCanvas(600,600); 
    
}

function draw() {
   background (10, 80, 125);
//    Stroke(); NOT WORKING
      fill(20,100,49);
   rect (202, 150, 200, 20);
    fill(20,100,49);
    noStroke();
  ellipse(300,200,100,250);
    fill(30,50,60);
   arc(305, 600, 300, 420, 500, 100, HALF_PI,PI);
//    noFill(); NOT WORKING
//  arc(50, 55, 50, 50, 0, HALF_PI); NOT WORKING
    triangle(300, 75, 58, 20, 86, 75);
//    noSroke(); NOT WORKING
      triangle(500, 75, 550, 20, 290, 75);
       fill(100, 102, 153);
    text("UGH", 50, 500);
    textSize(100);
//    textLeading(200); NOT WORKING
//    nofill(); NOT WORKING WHERE I WANT

    
   
    

   

    
}