import { Component } from "@angular/core";

@Component({
    selector: 'calculator',
    templateUrl: './Calculator.Component.html',
    styleUrls: ['./calculator.component.css']
})
export class Calculator {
    input: string = "";
    currentoperation: string = "";
    inputPrev: string = "";


    onclick(number: string): void {
        this.input = this.input + number;

    }
    onOperation(operation: string): void {
        if (this.currentoperation != "" && this.input != "" && this.inputPrev != "")
            this.performOperation();
        else {
            this.currentoperation = operation;
            this.inputPrev = this.input;
            this.input = "";
        }

    }


    performOperation(): void {

        if (this.input != "" && this.inputPrev != "" && this.currentoperation != "") {
            let val1: number = parseInt(this.input, 0);
            let val2: number = parseInt(this.inputPrev, 0);
            let var3: number = 0;
            switch (this.currentoperation) {
                case '+':
                    var3 = val1 + val2;
                    break;

                case '-':
                    var3 = val1 + val2;
                    break;

                default: var3 = val1 + val2;
                    break;
            }
            this.input = var3.toString();
            this.currentoperation = "";
            this.inputPrev = "";
        }

    }

}
