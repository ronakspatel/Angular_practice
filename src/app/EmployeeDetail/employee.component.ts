import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";
import { AbstractWebDriver } from "protractor/built/browser";
import { ActivatedRoute,Router } from "@angular/router";

@Component({
    selector: 'my-employee',
    templateUrl: './employee.Component.html',
    styleUrls: ['./employeedetail.Component.css']
})
export class EmployeeComponent implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;

    constructor(private _employeeService: EmployeeService,
        private _activatedRouter: ActivatedRoute,
    private _router:Router) {

    }
    onButtonClick(): void{
        this._router.navigate(['/employees']);
    }
    ngOnInit() {

        let empCode: string = this._activatedRouter.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(
            (employeedata) => this.employee = employeedata);
    }



}