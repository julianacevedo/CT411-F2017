var tr=75;


function setup() {
   createCanvas(800,700); 
    
}

function draw() {
   background (200);
  
    
  for (var s=6; s <width; s+=40){
      
      for (var t=6; t <width; t+=40){
          strokeWeight(1.2);
          fill(225,215,78,40);
          rect (s,t,60,60);
          
          strokeWeight(1.7);
          stroke(231,0,112);
          fill(129,223,98,35);
          ellipse(s,t,90,90);
          
      }
  }
    
    for (var s=26; s <width; s+=40){
      
      for (var t=26; t <width; t+=40){
      
      fill(231,0,112);
          ellipse(s,t,4,4);
      
      }
      }
    
}