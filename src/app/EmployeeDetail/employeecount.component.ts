import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'employee-count',
    templateUrl: './employeecount.Component.html',
    styleUrls: ['./employeecount.Component.css']
})
export class EmployeeCount {
    selectedRadioButtonValue: string = 'all';
    @Output()
    countRadioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);

    }
}