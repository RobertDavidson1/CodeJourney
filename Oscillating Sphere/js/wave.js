// Define the Wave class
class Wave {
    constructor(shift) {
      this.shift = shift; // Offset for the wave pattern
      this.angle = 0; // Initial angle for wave movement
      this.movement = 0; // Movement modifier for the wave
    }
  
    // Method to display the wave on the canvas
    display() {
      // Apply glow effect using canvas context
      let ctx = drawingContext; // Get the drawing context
      ctx.shadowBlur = 25; // Set the blur level for the glow
  
      // Set the glow color with reduced opacity (alpha)
      // Here, 100 is the alpha value for RGBA where 255 is fully opaque and 0 is fully transparent.
      ctx.shadowColor = color(255, 255, 255, 170); // Set the glow color with desired opacity
  
      noFill();
      beginShape();
      for (let i = 0; i < 360; i++) {
        let x = map(i, 0, 360, -r, r);
        let amplitude = r * sqrt(1 - pow((x / r), 2));
        let y = amplitude * sin(i + this.angle + this.shift * this.movement);
        vertex(x, y);
      }
      endShape();
  
  }
  
  
    // Method to update the wave's movement
    move() {
      this.angle += 1; // Increment the angle for movement
      this.movement = cos(this.angle) + 2; // Update the movement modifier
    }
  }