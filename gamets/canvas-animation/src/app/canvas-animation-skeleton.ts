export class CanvasAnimationSkeleton {
    private readonly context : CanvasRenderingContext2D;

    constructor(private readonly canvas: HTMLCanvasElement){
        this.context = this.canvas.getContext('2d');        
    }

    draw(){
        window.requestAnimationFrame(() => this.draw());
        //do stuff here
    }
}

const canvas = document.getElementById('canvasId') as HTMLCanvasElement;
const anim = new CanvasAnimationSkeleton(canvas);
anim.draw();

