import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'student',
    inputs: ['name'],
    outputs:['studentSelected'],
    template:`
        <p (click)="onClicker()">{{name}}</p>
    `
})
export class Student{
    name: string;
    studentSelected: EventEmitter<string>;

    constructor(){
        this.studentSelected = new EventEmitter();
    }
    onClicker(){
        this.studentSelected.emit(this.name);
    }
}