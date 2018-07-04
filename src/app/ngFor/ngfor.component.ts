import { Component ,OnInit} from "@angular/core";
import { IEmployee } from "./employee";

@Component({
    selector: 'ngfor',
    templateUrl: './ngfor.Component.html',
    styleUrls: ['./ngfor.Component.css']
})
export class ngFor  {
    employees:IEmployee[];
    constructor(){
       this.employees  = [
            { code: 'emp101', name: 'Ronak', gender: 'male', age: 26, annualSalary: 5500, dateOfBirth: '10/09/1991' },
            { code: 'emp102', name: 'Karan', gender: 'male', age: 25, annualSalary: 6500, dateOfBirth: '11/09/1991' },
            { code: 'emp103', name: 'Dhara', gender: 'female', age: 23, annualSalary: 7500, dateOfBirth: '12/08/1991' },
            { code: 'emp104', name: 'Nidhi', gender: 'female', age: 26, annualSalary: 8500, dateOfBirth: '08/08/1991' },
           
        ];
        
    }

    getEmployees():void{
        this.employees  = [
            { code: 'emp101', name: 'Ronak', gender: 'male', age: 26, annualSalary: 5500, dateOfBirth: '10/09/1991' },
            { code: 'emp102', name: 'Karan', gender: 'male', age: 25, annualSalary: 6500, dateOfBirth: '11/09/1991' },
            { code: 'emp103', name: 'Dhara', gender: 'female', age: 23, annualSalary: 7500, dateOfBirth: '12/08/1991' },
            { code: 'emp104', name: 'Nidhi', gender: 'female', age: 26, annualSalary: 8500, dateOfBirth: '08/08/1991' },
            { code: 'emp105', name: 'Jigar', gender: 'male', age: 24, annualSalary: 9500, dateOfBirth: '07/23/1991' },
        ];
    }
    trackByEmpCode(index:number,employee:any):string{
        return employee.code; 
    }
}