import { Component } from '@angular/core'
import { Store } from '@ngrx/store';

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
    constructor(private store: Store<any>){

    }

    increase(){
        this.store.dispatch({type: 'INCREASE'});
    }

    decrease(){
        this.store.dispatch({type: 'DECREASE'});
    }

    reset(){
        this.store.dispatch({type: 'RESET'});
    }
}