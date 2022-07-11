import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-animated-clock',
  templateUrl: './animated-clock.component.html',
  styleUrls: ['./animated-clock.component.css']
})
export class AnimatedClockComponent implements OnInit, AfterViewInit {

  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  clockRadius = 100;
  anchorRadius = this.clockRadius - 15;
  anchorWidth = 10;
  anchorHeight = 5;
  hourBar = {
    width: this.anchorRadius - 30,
    height: 6
  }
  minuteBar = {
    width: this.anchorRadius,
    height: 4
  }
  secondBar = {
    width: this.anchorRadius,
    height: 2
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.drawAnimatedBars();
  }

  drawAnchors(){
    this.ctx.globalCompositeOperation = 'destination-over';
    this.ctx.fillStyle = 'green';
    this.ctx.strokeStyle = 'green';
    this.ctx.save();
    this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    this.ctx.arc(0, 0, this.clockRadius, 0, 2 * Math.PI);
    this.ctx.stroke();
    //show hour anchors
    for (let i = 0; i < 12; i++){
      this.ctx.save();
      const radian = i * (2 * Math.PI / 12);
      this.ctx.rotate(radian);
      this.ctx.translate(this.anchorRadius, 0);
      this.ctx.fillRect(0, 0, this.anchorWidth, this.anchorHeight);
      this.ctx.restore();
    }

    //show minute anchors
    this.ctx.fillStyle = 'grey';
    for (let i = 0; i < 60; i++){
      this.ctx.save();
      this.ctx.rotate(i * (2 * Math.PI / 60));
      this.ctx.translate(this.anchorRadius + 2, 0);
      this.ctx.fillRect(0, 0, 5, 2);
      this.ctx.restore();
    }
    this.ctx.restore();
  }

  drawAnimatedBars(){
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.drawAnchors();

    this.ctx.fillStyle = 'green';
    this.ctx.strokeStyle = 'grey';
    this.ctx.save();
    this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    
    //current time
    const time = new Date();
    
    //show hour bar
    const hourRad = ((2 * Math.PI)/12)*time.getHours();
    this.ctx.rotate(hourRad);
    this.ctx.fillRect(-10, -this.hourBar.height/2, this.hourBar.width, this.hourBar.height);

    //show minute bar
    const minuteRad = hourRad + ((2 * Math.PI)/60)*time.getMinutes();
    this.ctx.rotate(minuteRad);
    this.ctx.fillRect(-10, -this.minuteBar.height/2, this.minuteBar.width, this.minuteBar.height);
    
    //show second bar
    this.ctx.fillStyle = 'grey';
    const secondRad = minuteRad + ((2 * Math.PI)/60)*time.getSeconds();
    this.ctx.rotate(secondRad);
    this.ctx.fillRect(-10, -this.secondBar.height/2, this.secondBar.width, this.secondBar.height);

    this.ctx.restore();
    window.requestAnimationFrame(() => this.drawAnimatedBars());
  }
}
