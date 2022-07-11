class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getDistance(){
        let x2 = this.x*this.x;
        let y2 = this.y*this.y;
        return Math.sqrt(x2+y2);
    }
    toString(){
        return '(' + this.x + ',' + this.y + ')';
    }
}
const pointA = new Point(1,0);
console.log('Distance between (' + pointA.x + ', ' + pointA.y + ') and (0,0) = ' + pointA.getDistance());

class Line{
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }

    static compareLines(l1,l2){
        console.log(this);
        return l1.getLength() > l2.getLength();
    }

    getLength(){
        console.log(this);
        let deltaX = this.pointB.x - this.pointA.x;
        let deltaY = this.pointB.y - this.pointA.y;
        return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    }
}

const p1 = new Point(0,0);
const p2 = new Point(1,0);
const p3 = new Point(2,0);

const l1 = new Line(p1, p2);
const l2 = new Line(p1, p3);

console.log(Line.compareLines(l1,l2));