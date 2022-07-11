import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="increase();">Increase</button>
            <button class="btn btn-warning" (click)="decrease();">Decrease</button>
            <button class="btn btn-danger" (click)="reset();">Reset</button>            
        </div>
    `
})
export class ChildComponent{
    @Output() onIncrease = new EventEmitter();
    @Output() onDecrease = new EventEmitter();
    @Output() onReset = new EventEmitter();
    @Output() onChange = new EventEmitter();

    increase(){
        //this.onIncrease.emit();
        this.onChange.emit(true);
    }

    decrease(){
        //this.onDecrease.emit();
        this.onChange.emit(false);
    }

    reset(){
        this.onReset.emit();
    }
}