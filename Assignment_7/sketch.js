var bg1 = 208;
var bg2 = 90;

var counter=0;
var counter2=0;
var counter3=0
var speed=1;
var speed2=2;

var buttonClicked = false;
var rectLeft = 300;
var rectRight = 300;
var rectTop = 300;
var rectBottom = 300;


function preload(){
    pinecone=loadImage("Pinecone.png");
    
}

function setup (){
    
    createCanvas(1000,1000);
    
    imageMode(CENTER);

}


function draw (){
    background(bg2,bg1,60);
    image(pinecone,mouseX,mouseY,100,100);
    
//   BIG PINECONE 
    push();
        translate(500,500);
        rotate(radians(counter));
        image(pinecone,0,0,400,400);

     pop();
    
        push();
    
//   RESIZABLE
            translate(200,200);
          scale(.9);
            scale(mouseX/50);
            rotate(radians(counter2));
        image(pinecone,50,50,200,200);
        pop();
    
//MEDIUM PINECONE
    push();
        translate(200,800);
//        scale(-1,1);
        rotate(radians(counter2));
        image(pinecone,50,50,200,200);
    pop();
    
    push();
        translate(700,800);
        scale(-1,1);
        rotate(radians(counter2));
        image(pinecone,50,50,200,200);
    pop();
    
    
//    SMALL PINECONES
    push();
        translate(150,600);
        scale(-1,1);
        rotate(radians(counter3));
        image(pinecone,50,50,100,100);
    pop();
    
    push();
        translate(150,400);
//        scale(-1,1);
        rotate(radians(counter3));
        image(pinecone,50,50,100,100);
    pop();
    
    push();
        translate(850,600);
//        scale(-1,1);
        rotate(radians(counter3));
        image(pinecone,50,50,100,100);
    pop();
    
    push();
        translate(850,400);
        scale(-1,1);
        rotate(radians(counter3));
        image(pinecone,50,50,100,100);
    pop();
    
    counter+=speed;
    counter2-=speed2;
    counter3+=speed2;
    

}

function mousePressed(){


// if (mouseX>rectLeft && mouseX<rectRight && mouseY> rectTop && mouseY< rectBottom && buttonClicked==false){
//        bg1=120;
//        buttonClicked = !buttonClicked;
//    }
//    
//    else if (mouseX>rectLeft && mouseX<rectRight && mouseY> rectTop && mouseY< rectBottom && buttonClicked==true){
//        bg2=208;
//        buttonClicked = !buttonClicked;
//    }


    
    
}