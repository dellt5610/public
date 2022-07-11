import { SolarSystem } from './examples/solar-system';
import { Clock } from './examples/clock';
import { BouncingBall } from './examples/bouncing-ball';
import { Constellation, Config } from './examples/constellation';
import { CandyText } from './examples/candy-text';

function main() {
  const canvas = <HTMLCanvasElement>document.getElementById('solar-system');
  new SolarSystem(canvas);
  const canvas2 = <HTMLCanvasElement>document.getElementById('clock');
  new Clock(canvas2);
  const canvas3 = <HTMLCanvasElement>document.getElementById('bouncing-ball');
  new BouncingBall(canvas3);

  const canvas4 = <HTMLCanvasElement>document.getElementById('constellation');
  const constellation = new Constellation(canvas4);
  constellation.drawStars(100);

  const canvas5 = <HTMLCanvasElement>document.getElementById('candy-text');
  const candy = new CandyText(canvas5);
  candy.draw();
}

main();
