import { Component ,OnInit} from "@angular/core";
import {IEmployee} from './employee'
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'employeedetail',
    templateUrl: './employeedetail.Component.html',
    styleUrls: ['./employeedetail.Component.css'],
    
    
})
export class EmployeesDetail implements OnInit {
  private  employees:IEmployee[]=[];
  

    selectedEmpCountRadioButton: string='all';
    constructor(private _employeeService:EmployeeService) {
        
    }
    ngOnInit(){
        this._employeeService.getEmployees()
        .subscribe((employeedata) =>this.employees =employeedata);
        
     }
     
    getTotalEmpCount(): number {
        
        return this.employees.length;
    }
    getTotalMaleEmpCount(): number {
        return this.employees.filter(e => e.gender === 'male').length;
    }
    getTotalFemaleEmpCount(): number {
        return this.employees.filter(e => e.gender === 'female').length;
    }
    onEmpCountRadioButtonChange(selectedRadioButtonValue:string):void{
        this.selectedEmpCountRadioButton=selectedRadioButtonValue;
    }
    

}