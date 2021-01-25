var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var wall1,wall2,wall3,wall4;
var innerwall1,innerwall2,innerwall3,innerwall4,innerwall5,innerwall6;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
function setup() {
  createCanvas(500, 500);

wall1 = createSprite(230, 50, 350, 10);
wall1.shapeColor = "#0AEFE9";
wall2 = createSprite(230, 350, 350, 10);
wall2.shapeColor = "#0AEFE9";
wall3 = createSprite(400, 200, 10, 300);
wall3.shapeColor = "#0AEFE9";
wall4 = createSprite(60, 200, 10, 300);
wall4.shapeColor = "#0AEFE9";

innerwall1 = createSprite(150, 200, 50, 7);
innerwall1.shapeColor = "#EBE912";
innerwall2 = createSprite(298, 200, 50, 7);
innerwall2.shapeColor = "#EBE912";
innerwall3 = createSprite(120, 166, 7, 70);
innerwall3.shapeColor = "#EBE912";
innerwall4 = createSprite(175, 166, 7, 70);
innerwall4.shapeColor = "#EBE912";
innerwall5 = createSprite(269, 166, 7, 70);
innerwall5.shapeColor = "#EBE912";
innerwall6 = createSprite(321, 166, 7, 70);
innerwall6.shapeColor = "#EBE912";


box1 = createSprite(200, 195, 15, 15);
box1.shapeColor = "orange";
box2 = createSprite(200, 197, 15, 15);
box2.shapeColor = "blue";
box3 = createSprite(200, 200, 15, 15);
box3.shapeColor = "orange";
box4 = createSprite(200, 205, 15, 15);
box4.shapeColor = "blue";
box5 = createSprite(200, 215, 15, 15);
box5.shapeColor = "#BE112E";
box6 = createSprite(200, 225, 15, 15);
box6.shapeColor = "#1C9A75";
box7 = createSprite(200, 235, 15, 15);
box7.shapeColor = "#BE112E";
box8 = createSprite(200, 245, 15, 15);
box8.shapeColor = "#1C9A75";
box9 = createSprite(297, 167, 20, 20);
box9.shapeColor = "#80E380";
box10 = createSprite(150, 167, 20, 20);
box10.shapeColor ="#80E380";

box1.velocityX = 1;
box1.velocityY = 1;
box2.velocityX = 4;
box2.velocityY = 4;
box3.velocityX =-6;
box3.velocityY = 1;
box4.velocityX =-2;
box4.velocityY =-1;
box5.velocityX = 1;
box5.velocityY = 4;
box6.velocityX =-4;
box6.velocityY =-2;
box7.velocityX =-3;
box7.velocityY = 5;
box8.velocityX = 3;
box8.velocityY =-1;

}

function draw() {
  background("#CA9AE1");
    textSize(22);
    fill("#4D2D40");
    text("Put all boxes in the big boxes to Win!!!",12,20);
    text("Use keybord arrow keys to move the boxes ", 47,380);
  if (keyDown("UP_ARROW")) {
      box1.velocityX = 0;
      box2.velocityX = 0;
      box3.velocityX = 0;
      box4.velocityX = 0;
      box5.velocityX = 0;
      box6.velocityX = 0;
      box7.velocityX = 0;
      box8.velocityX = 0;
      box1.velocityY = -1;
      box2.velocityY = -2;
      box3.velocityY = -3;
      box4.velocityY = -4;
      box5.velocityY = -5;
      box6.velocityY = -6;
      box7.velocityY = -7;
      box8.velocityY = -8;
    }
    if (keyDown("DOWN_ARROW")) {
      box1.velocityX = 0;
      box2.velocityX = 0;
      box3.velocityX = 0;
      box4.velocityX = 0;
      box5.velocityX = 0;
      box6.velocityX = 0;
      box7.velocityX = 0;
      box8.velocityX = 0;
      box1.velocityY = 8;
      box2.velocityY = 7;
      box3.velocityY = 6;
      box4.velocityY = 5;
      box5.velocityY = 4;
      box6.velocityY = 3;
      box7.velocityY = 2;
      box8.velocityY = 1;
    }
    if (keyDown("LEFT_ARROW")) {
      box1.velocityX = -1;
      box2.velocityX = -3;
      box3.velocityX = -3;
      box4.velocityX = -4;
      box5.velocityX = -8;
      box6.velocityX = -7;
      box7.velocityX = -6;
      box8.velocityX = -5;
      box1.velocityY = 0;
      box2.velocityY = 0;
      box3.velocityY = 0;
      box4.velocityY = 0;
      box5.velocityY = 0;
      box6.velocityY = 0;
      box7.velocityY = 0;
      box8.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      box1.velocityX = 5;
      box2.velocityX = 6;
      box3.velocityX = 7;
      box4.velocityX = 8;
      box5.velocityX = 1;
      box6.velocityX = 2;
      box7.velocityX = 3;
      box8.velocityX = 5;
      box1.velocityY = 0;
      box2.velocityY = 0;
      box3.velocityY = 0;
      box4.velocityY = 0;
      box5.velocityY = 0;
      box6.velocityY = 0;
      box7.velocityY = 0;
      box8.velocityY = 0;
    }
    
    box1.bounceOff(wall1);
    box1.bounceOff(wall2);
    box1.bounceOff(wall3);
    box1.bounceOff(wall4);
    box2.bounceOff(wall1);
    box2.bounceOff(wall2);
    box2.bounceOff(wall3);
    box2.bounceOff(wall4);
    box3.bounceOff(wall1);
    box3.bounceOff(wall2);
    box3.bounceOff(wall3);
    box3.bounceOff(wall4);
    box4.bounceOff(wall1);
    box4.bounceOff(wall2);
    box4.bounceOff(wall3);
    box4.bounceOff(wall4);
    box5.bounceOff(wall1);
    box5.bounceOff(wall2);
    box5.bounceOff(wall3);
    box5.bounceOff(wall4);
    box6.bounceOff(wall1);
    box6.bounceOff(wall2);
    box6.bounceOff(wall3);
    box6.bounceOff(wall4);
    box7.bounceOff(wall1);
    box7.bounceOff(wall2);
    box7.bounceOff(wall3);
    box7.bounceOff(wall4);
    box8.bounceOff(wall1);
    box8.bounceOff(wall2);
    box8.bounceOff(wall3);
    box8.bounceOff(wall4);
    
    box1.bounceOff(innerwall1);
    box1.bounceOff(innerwall2);
    box1.bounceOff(innerwall3);
    box1.bounceOff(innerwall4);
    box1.bounceOff(innerwall5);
    box1.bounceOff(innerwall6);
    box2.bounceOff(innerwall1);
    box2.bounceOff(innerwall2);
    box2.bounceOff(innerwall3);
    box2.bounceOff(innerwall4);
    box2.bounceOff(innerwall5);
    box2.bounceOff(innerwall6);
    box3.bounceOff(innerwall1);
    box3.bounceOff(innerwall2);
    box3.bounceOff(innerwall3);
    box3.bounceOff(innerwall4);
    box3.bounceOff(innerwall5);
    box3.bounceOff(innerwall6);
    box4.bounceOff(innerwall1);
    box4.bounceOff(innerwall2);
    box4.bounceOff(innerwall3);
    box4.bounceOff(innerwall4);
    box4.bounceOff(innerwall5);
    box4.bounceOff(innerwall6);
    box4.bounceOff(innerwall1);
    box5.bounceOff(innerwall2);
    box5.bounceOff(innerwall3);
    box5.bounceOff(innerwall4);
    box5.bounceOff(innerwall5);
    box5.bounceOff(innerwall6);
    box6.bounceOff(innerwall1);
    box6.bounceOff(innerwall2);
    box6.bounceOff(innerwall3);
    box6.bounceOff(innerwall4);
    box6.bounceOff(innerwall5);
    box6.bounceOff(innerwall6);
    box7.bounceOff(innerwall1);
    box7.bounceOff(innerwall2);
    box7.bounceOff(innerwall3);
    box7.bounceOff(innerwall4);
    box7.bounceOff(innerwall5);
    box7.bounceOff(innerwall6);
    box8.bounceOff(innerwall1);
    box8.bounceOff(innerwall2);
    box8.bounceOff(innerwall3);
    box8.bounceOff(innerwall4);
    box8.bounceOff(innerwall5);
    box8.bounceOff(innerwall6);

   if(box1.isTouching(box9) || box1.isTouching(box10)){
      box1.velocityX = 0;
      box1.velocityY = 0;
      num1 = 1;
    } 
    if(box2.isTouching(box9) || box2.isTouching(box10)){
      box2.velocityX = 0;
      box2.velocityY = 0;
      num2 = 1;
    } 
    if(box3.isTouching(box9) || box3.isTouching(box10)){
      box3.velocityX = 0;
      box3.velocityY = 0;
      num3 = 1;;
    } 
    
    if(box4.isTouching(box9)|| box4.isTouching(box10)){
      box4.velocityX = 0;
      box4.velocityY = 0;
      num4 = 1;
    } 
    
    if(box5.isTouching(box9) || box5.isTouching(box10)){
      box5.velocityX = 0;
      box5.velocityY = 0;
      num5 = 1;
    } 
    
    if(box6.isTouching(box9) || box6.isTouching(box10)){
      box6.velocityX = 0;
      box6.velocityY = 0;
      num6 = 1;
    } 
    
    if(box7.isTouching(box9) || box7.isTouching(box10)){
      box7.velocityX = 0;
      box7.velocityY = 0;
      num7 = 1;
    } 
    
    if(box8.isTouching(box9) || box8.isTouching(box10)){
      box8.velocityX = 0;
      box8.velocityY = 0;
      num8 = 1;
    } 
    
    if(num1 === 1 && num2 === 1 && num3 === 1 && num4 === 1 && num5 === 1 && num6 === 1 && num7 === 1 && num8 === 1) {
      text("!!!YOU WON THE GAME!!!", 125, 235);
      
    }
  drawSprites();
}