var bg1 = 121;
var bg2 = 200;

var train;
var robot;

var train_rest = {
    loc: 0,
    width: 500,
    height: 250,
    x: 100,
    y: 250,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   
};

var train_play = {
    loc: 0,
    width: 500,
    height: 250,
    x: 103,
    y: 253,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0 
};

    train_rest.top = train_rest.y;
    train_rest.bottom = train_rest.y + train_rest.height;
    train_rest.left = train_rest.x;
    train_rest.right = train_rest.x + train_rest.width;

var robot_rest = {
    loc: 0,
    width: 292,
    height: 500,
    x: 750,
    y: 250,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

var robot_play = {
    loc: 0,
    width: 292,
    height: 500,
    x: 753,
    y: 253,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0 
};

    robot_rest.top = robot_rest.y;
    robot_rest.bottom = robot_rest.y + robot_rest.height;
    robot_rest.left = robot_rest.x;
    robot_rest.right = robot_rest.x + robot_rest.width;

function preload(){
    
    train_rest.loc = loadImage("Train.png");
    train_play.loc = loadImage("TrainDT.png");
    train = loadSound("Train.mp3");
    
    robot_rest.loc = loadImage("robot.png");
    robot_play.loc = loadImage("robotDT.png");
    robot = loadSound("DyingRobot.mp3");
    
}


function setup (){
    createCanvas(windowWidth,windowHeight);

    
}


function draw (){
    background(bg1, bg2, 55);
    
//    IMAGE CHANGE
    if(mouseX > train_rest.left && mouseX < train_rest.right && mouseY > train_rest.top && mouseY < train_rest.bottom) {
        image(train_play.loc,train_play.x,train_play.y,train_play.width,train_play.height);
    }else {
        image(train_rest.loc,train_rest.x,train_rest.y,train_rest.width,train_rest.height);
    }
    
     if(mouseX > robot_rest.left && mouseX < robot_rest.right && mouseY > robot_rest.top && mouseY < robot_rest.bottom) {
        image(robot_play.loc,robot_play.x,robot_play.y,robot_play.width,robot_play.height);
    }else {
        image(robot_rest.loc,robot_rest.x,robot_rest.y,robot_rest.width,robot_rest.height);
    }
    
    
    
//    BG COLOR
    if (mouseX > train_rest.left && mouseX < train_rest.right && mouseY > train_rest.top && mouseY < train_rest.bottom) {
        
        bg1 = 20;
        bg2 = 100;
    }else if (mouseX > robot_rest.left && mouseX < robot_rest.right && mouseY > robot_rest.top && mouseY < robot_rest.bottom){
        
        bg1 = 300;
        bg2 = 0;
        
    }else{
        bg1 = 200;
        bg2 = 170;  
        
        }
    
}

function mousePressed(){

        if(mouseX > train_rest.left && mouseX < train_rest.right && mouseY > train_rest.top && mouseY < train_rest.bottom) {
        train.play();
    }
    
        if(mouseX > robot_rest.left && mouseX < robot_rest.right && mouseY > robot_rest.top && mouseY < robot_rest.bottom) {
        robot.play();
    }
    
    
}