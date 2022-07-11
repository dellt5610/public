import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h3>Count = {{ count }}
        <app-child 
            (onChange)="onChange($event);"    
            (onIncrease)="onIncrease();"
            (onDecrease)="onDecrease();"
            (onReset)="onReset();"
        >
        </app-child>
    `
})
export class ParentComponent{
    count: number = 0;
    
    onIncrease(){
        this.count++;
    }

    onDecrease(){
        this.count--;
    }

    onReset(){
        this.count = 0;
    }

    onChange(isIncrease: boolean){
        isIncrease ? this.count++ : this.count--;
    }
}