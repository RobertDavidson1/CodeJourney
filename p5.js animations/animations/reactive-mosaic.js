function blockSketch(p) {
  let size = 10;
  let cols;
  let rows;
  let offset = 4;
  let blocks = [];

  p.setup = function () {
    let canvas = p.createCanvas(420, 420);
    canvas.parent("p5-canvas"); // Ensure you have a div with id="p5-canvas" in your HTML
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    cols = p.width / size;
    rows = p.height / size;

    for (let i = 0; i < cols; i++) {
      blocks[i] = [];
      for (let j = 0; j < rows; j++) {
        blocks[i][j] = new Block(i * size + size / 2, j * size + size / 2);
      }
    }
  };

  p.draw = function () {
    p.clear();

    // Maximum distance from the center to any corner
    const maxDist = p.dist(0, 0, p.width / 2, p.height / 2);

    // Current distance from the mouse to the center
    let currentDist = p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2);

    // Remap the current distance so it's larger towards the center and smaller towards the corners
    let distMouse = p.map(currentDist, 0, maxDist, 60, 5);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        blocks[i][j].move(distMouse); // Now passing the dynamic distMouse based on mouse position
        blocks[i][j].display();
      }
    }
  };

  class Block {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.angle = 0;
      this.c = p.color(255, 255, 255, 20);
    }

    display() {
      p.noFill();
      p.stroke(this.c);
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.angle);

      if (this.angle > 0 && this.angle < 180) {
        this.drawRect();
      } else {
        this.drawX();
      }
      p.pop();
    }

    move(distMouse) {
      let distance = p.dist(p.mouseX, p.mouseY, this.x, this.y);
      if (distance < distMouse) {
        this.angle += 7;
        this.c = p.color(0, 0, 255); // Set color to blue when starting rotation
      }

      if (this.angle > 0 && this.angle < 270) {
        this.angle += 7;
        // Optionally, keep the color blue throughout the rotation
        // If you only want it blue at the start, move this line to the condition above
        this.c = p.color(23, 191, 253);
      } else {
        this.angle = 0;
        this.c = p.color(255, 255, 255, 20); // Reset color once rotation is complete
      }
    }

    drawRect() {
      p.rect(0, 0, size - offset, size - offset);
    }

    drawX() {
      let margin = -size / 2;
      p.line(
        margin + offset / 2,
        margin + offset / 2,
        margin + size - offset / 2,
        margin + size - offset / 2
      );
      p.line(
        margin + size - offset / 2,
        margin + offset / 2,
        margin + offset / 2,
        margin + size - offset / 2
      );
    }
  }
}

window.myP5 = new p5(blockSketch);
