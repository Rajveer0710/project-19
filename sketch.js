var droneImg, drone;
var birdImg, bird, birdsGroup;
var skyImg, sky;
var gameState = "play"


function preload(){
    droneImg = loadImage("drone.png");
    birdImg = loadImage("bird.png");
    skyImg = loadImage("sky.png")
    }

    function setup() {

    createCanvas(460, 325);

    sky = createSprite(230, 162.5);
    sky.addImage("sky",skyImg); 
   sky.scale = 2; 
    sky.velocityX = -2;     
 
    drone = createSprite(75, 200, 50 , 50)
    drone.scale = 0.4;
    drone.addImage(droneImg);

    birdsGroup = new Group();

   

}


function draw() {
    
    spawnBirds();
    
    drawSprites();

        if(sky.x < 200 ){
            sky.x = 300;    
        }
  
    if (keyDown("space")){
        drone.velocityY = -6;
      }
 
  
      drone.velocityY = drone.velocityY+ 0.5;              
  
      if(birdsGroup.isTouching(drone)){
          drone.destroy();
          gameState == "end";
     }

  if(gameState==="end"){
        background("black");
        sky.destroy();
        birdsGroup.destroyEach();
        birdsGroup.velocityX = 0;
          stroke("blue");
          strokeWeight(4);
          fill("green");
          textSize(50);
          text("Game Over", 200, 162.5);
    }
}

function spawnBirds(){
        if(frameCount%100===0){
          var bird = createSprite(700, 300);
          bird.addImage(birdImg);
          
          
          bird.y = Math.round(random(100, 300));
          bird.velocityX = -7;
          bird.scale = 0.3;
          bird.lifetime = 800;

          drone.depth = bird.depth;
          drone.depth = drone.depth + 1;
          birdsGroup.add(bird);
      
    
        }
  }


