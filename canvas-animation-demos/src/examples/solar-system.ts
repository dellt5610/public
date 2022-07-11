export class SolarSystem {
  private readonly sun: HTMLImageElement = new Image();
  private readonly moon: HTMLImageElement = new Image();
  private readonly earth: HTMLImageElement = new Image();
  private readonly earthOrbitRadius = 105;
  private readonly earthRadius = 12;
  private readonly moonOrbitRadius = 28.5;
  private readonly moonRadius = 3.5;

  private readonly ctx: CanvasRenderingContext2D;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.sun.src = `data:image/png;base64,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`;
    this.moon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACoSURBVHjaHIw7DoMwEETXNj8BJRV3QUqXK7jkTjQpKX0P3yNI9BQQLNsS2Bmz0mi0+2aHTdNEeZ6PVVVJxvngrNX3fStozoQQY9M0n77vy7qu6bss799xvGKMlKBs27bsuo4SNMbQse9lCEFyzACRc46u63oclYRP3IXQCaaPdV0fZ4wRRvMYgsLii6Igay2hLgEPqQxV87Zt5LyX5jwHBDQCCnD+CzAANN1cVtHy2w4AAAAASUVORK5CYII=`;
    this.earth.src = `data:image/png;base64,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`;
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    window.requestAnimationFrame(() => this.draw());
  }

  draw() {
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); // clear canvas

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    this.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    this.ctx.save();
    this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);

    // Earth
    const time = new Date();
    const angle =
      ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds();
    this.ctx.rotate(angle);
    this.ctx.translate(this.earthOrbitRadius, 0);
    this.ctx.fillRect(
      0,
      -this.earthRadius,
      this.earthRadius + this.moonOrbitRadius + this.moonRadius,
      2 * this.earthRadius
    ); // Shadow
    this.ctx.drawImage(this.earth, -this.earthRadius, -this.earthRadius);

    // Moon
    this.ctx.save();
    this.ctx.rotate(10 * angle);
    this.ctx.translate(0, this.moonOrbitRadius);
    this.ctx.drawImage(this.moon, -this.moonRadius, -this.moonRadius);
    this.ctx.restore();

    this.ctx.restore();

    this.ctx.beginPath();
    this.ctx.arc(
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.earthOrbitRadius,
      0,
      Math.PI * 2,
      false
    ); // Earth orbit
    this.ctx.stroke();

    this.ctx.drawImage(this.sun, 0, 0, this.canvasWidth, this.canvasHeight);  // Sun

    window.requestAnimationFrame(() => this.draw());
  }
}
