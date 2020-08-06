var fixedrect
var movingrect
var g1
var g2
var g3




function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80)
  fixedrect.shapeColor = "green"
  fixedrect.debug = true
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green"
  movingrect.debug = true
  g1 = createSprite (100,100,20,50)
  g1.shapeColor = "blue"
  g2 = createSprite (200,100,20,50)
  g2.shapeColor = "pink"
  g3 = createSprite (300,100,20,50)
  g3.shapeColor = "yellow"
}

function draw() {
  background(0,0,0)
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
 isTouching()

  drawSprites();
}
function isTouching (){
  if(movingrect.x - fixedrect.x < fixedrect.width/ 2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width / 2
    &&movingrect.y - fixedrect.y < fixedrect.height/ 2 + movingrect.height/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height / 2){
    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"
  }
  else {
    fixedrect.shapeColor = "green"
    movingrect.shapeColor = "green"
  }
}