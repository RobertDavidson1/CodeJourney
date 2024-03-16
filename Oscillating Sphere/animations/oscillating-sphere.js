// The function that sets up the sketch
function waveSketch(p) {
  // Encapsulate all variables within the function
  let r = 150;
  let waves = [];
  let num = 10;
  let step = 10;

  // The setup function becomes a property of p
  p.setup = function () {
    let canvas = p.createCanvas(500, 500);
    canvas.parent("p5-canvas");
    p.angleMode(p.DEGREES);
    p.stroke(255);

    // Create Wave objects and add to the waves array
    for (let i = 0; i < num; i++) {
      waves[i] = new Wave(i * step);
    }
  };

  // The draw function also becomes a property of p
  p.draw = function () {
    p.clear();
    p.noFill();
    p.translate(p.width / 2, p.height / 2);

    // Display and move each wave
    for (let wave of waves) {
      wave.display();
      wave.move();
    }
  };

  // The Wave class is defined within the scope of waveSketch
  class Wave {
    constructor(shift) {
      this.shift = shift;
      this.angle = 0;
      this.movement = 0;
    }

    display() {
      let ctx = p.drawingContext;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color(255, 255, 255, 70);
      p.noFill();
      p.beginShape();
      for (let i = 0; i < 360; i++) {
        let x = p.map(i, 0, 360, -r, r);
        let amplitude = r * Math.sqrt(1 - Math.pow(x / r, 2));
        let y = amplitude * p.sin(i + this.angle + this.shift * this.movement);
        p.vertex(x, y);
      }
      p.endShape();
    }

    move() {
      this.angle += 1;
      this.movement = p.cos(this.angle) + 2;
    }
  }
}

// Assign the new p5 instance to window.myP5 for global access and easy removal
window.myP5 = new p5(waveSketch);

// This ensures that when you call window.myP5.remove() before loading a new animation,
// the current p5 sketch is properly cleaned up from the page.
