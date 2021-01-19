var img,imgb; var vscrool = 0; var mz;
var timer =0;
var press =0;

//play sounds on vscrool, voice maybe at some points, microsoft sam, connect the dreams somehow
//have it assembled next time
function preload(){
  img = loadImage('bps.jpg');
  imgb = loadImage('bimg.jpg');
  mz = loadSound('bgs.mp3');  //al dracu voia neaparat sa nu dea autoplay
}
function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(120); 
  //noCursor();
}
function draw() {
  
  
  //this writes intro text
  if (vscrool > -90){
  fill(255);
  textSize(200);
  text('apophemare',35,windowWidth/3);
  textSize(100);
  text('Press any key for sound',35,windowWidth/2.5);
} else{}
  
  
  //end text
  if (vscrool < -1100){
  fill(255);
  textSize(400);
  text('END',windowWidth/3,windowHeight/2);
  }
  
  fill(255);
  text(vscrool,0,0);
  background(0);
  //iterator in draw, daca scroll e activ fa timer 0, daca nu e activ incrementeaza-l, daca ai stat 100 frame 
  
  
  //scrool movement
  if (vscrool >0 ){vscrool=0;}  //&& timer<300
  if (vscrool <-1150){vscrool=-1150;}
  //touch movement
  var ascrool = 0; //works, nice!
  
  if (mouseIsPressed == true && mouseY <250) {
    vscrool = vscrool+0.3; 
    ascrool =1;
  }
  if (mouseIsPressed == true && mouseY >250) {
    vscrool = vscrool-0.3; 
    ascrool =1;
  }  

  if (ascrool ==1){
    blendMode(DIFFERENCE);} 
   else {
     
     timer++; //aici poate sa stea si volumul unui sunet initial spooky
     blendMode(OVERLAY);  
     mz.setVolume(0);
  }
    if (timer>random(70,120)) {
      timer=0;
      blendMode(DIFFERENCE);
      
      //aici sound daca sta prea mult si pac spooky, parca ar respira, misto!
  }
  ellipse(mouseX, mouseY, random(10, 20),random(10, 20));
  ellipse(mouseX, mouseY, 20, 20);
  
  image(img, 0,vscrool*50);  //vscrool*50
  image(img,0,vscrool*40);    //vscrool*40
  blendMode(SOFT_LIGHT);
  image(imgb,0,vscrool*30);    //imgb AICI IMPORTANT
  
  
  print(vscrool);
}

function mouseWheel(event) { 
    scrollDelta = event.delta; 
    if (scrollDelta < 0) {vscrool++;}  
    if (scrollDelta > 0) {vscrool--;} 
} 

function keyPressed() {  //aici vin sunetele pornite, pt ca ma forteaza chrome. Pun aici sunet1,2,3 etc...
  mz.play();
  mz.loop();
  return false; // prevent any default behaviour
}
function mousePressed(){  //aici setez volumul sunetului 1 general
  mz.setVolume(0.7);
  var start =1;
}

//blendMode(DIFFERENCE);
  //image(img, 0,vscrool*50);  //vscrool*50
  //image(img,0,vscrool*40);    //vscrool*40
  //blendMode(SOFT_LIGHT);
  //image(imgb,0,vscrool*30);
  //could load movies/sound at some point with vscrool variable

  
