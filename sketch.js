var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dog1 = loadImage('images/dogImg.png');
	hdog = loadImage('images/dogImg1.png');
}

function setup() {
  createCanvas(500,500);

  dog = createSprite(250,250);
  dog.addImage(dog1);
  dog.scale = 0.08;

  database = firebase.database();

  foodStock= database.ref('FOOD');
  foodStock.on ("value",readStock);
  
}


function draw() {  

  background(rgb(46, 139, 87));

  if (keyDown (UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hdog)
  }

  drawSprites();

  fill("red");
  textSize(20);
  stroke("yellow");
  strokeWeight(4);
  text("Milk Remaining : " + foodS,100,50);

}

function readStock(data){
     foodS =  data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{
    x = x-1;
  }
  database.ref('/').update({FOOD:x})
  
}


