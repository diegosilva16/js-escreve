function setup() {
    createCanvas(400, 400);
      background("black");
  }
  
  function draw() {
    fill("white");
    stroke("yellow");
    if(mouseIsPressed){rect(mouseX, mouseY, 25, 35);
  }
  }
  