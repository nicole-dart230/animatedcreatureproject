let x = 0;
let y = 0;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(110, 109, 125);
  
  //ground
  noStroke();
  rect(0, 400, 600, 300);
  fill(255, 255, 255);
  rect(0, 440, 45, 25);
  rect(70, 440, 45, 25);
  rect(140, 440, 45, 25);
  rect(210, 440, 45, 25);
  rect(280, 440, 45, 25);
  rect(350, 440, 45, 25);
  rect(420, 440, 45, 25);
  rect(490, 440, 45, 25);
  rect(560, 440, 45, 25);
  
  //buildings
  fill(0);
  rect(0, 15, 125, 385);
  rect(150, 40, 150, 360);
  rect(325, 65, 125, 335);
  rect(475, 0, 125, 400);
  
  //windows
  strokeWeight(2);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  rect(0, 30, 25, 25);
  rect(45, 30, 25, 25);
  rect(90, 30, 25, 25);
  rect(0, 75, 25, 25);
  rect(45, 75, 25, 25);
  rect(90, 75, 25, 25);
  rect(0, 120, 25, 25);
  rect(45, 120, 25, 25);
  rect(90, 120, 25, 25);
  rect(0, 165, 25, 25);
  rect(45, 165, 25, 25);
  rect(90, 165, 25, 25);
  rect(0, 210, 25, 25);
  rect(45, 210, 25, 25);
  rect(90, 210, 25, 25);
  rect(0, 255, 25, 25);
  rect(45, 255, 25, 25);
  rect(90, 255, 25, 25);
  
  //legs
  strokeWeight(10);
  stroke(16, 13, 191);
  line(x + 225, 350, x + 225, 450);
  line(x + 275, 350, x + 275, 450);
  line(x+ 325, 350, x + 325, 450);
  line(x + 375, 350, x + 375, 450);
  line(x + 425, 350, x + 425, 450);
  x = x - 1.5;
  
  if (x < -500) {
      x = 500
      };
  
  //body
  strokeWeight(5);
  stroke(16, 13, 191);
  fill(0, 0, 8);
  ellipse(x + 420, 350, 100, 100);
  ellipse(x + 370, 350, 100, 100);
  ellipse(x + 320, 350, 100, 100);
  ellipse(x + 270, 350, 100, 100);
  ellipse(x + 220, 350, 100, 100);
  ellipse(x + 200, 300, 100, 100);
  ellipse(x + 200, 250, 100, 100);
  ellipse(x + 200, 200, 100, 100);
  ellipse(x + 200, 150, 100, 100);
  ellipse(x + 200, 75, 125, 125);
  
   //face
  strokeWeight(3);
  stroke(12, 92, 1);
  fill(235, 0, 0);
  ellipse(x + 180, 65, 20);
  ellipse(x + 220, 65, 20);
  fill(0);
  stroke(16, 13, 191);
  ellipse(x + 200, 100, 50, 35);

}