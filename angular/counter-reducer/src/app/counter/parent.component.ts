import { Component } from '@angular/core'
import { Store } from '@ngrx/store';
@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Count = {{ count }}</h3>
            <app-child></app-child>
        </div>
    `
})
export class ParentComponent{
    count : number;
    constructor(private store: Store<any>){
        this.store.select('count').subscribe(count => this.count = count);
    }
}