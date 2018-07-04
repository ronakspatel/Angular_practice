import { IEmployee } from "./employee";
import { Injectable } from "@angular/core";
import { Http,Response, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/observable'


import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeService{
    private _url:string='assets/Employeedata';
    

    constructor(private _http:Http){}

    getEmployees():Observable<IEmployee[]>{
        
    
        return this._http.get(this._url)
        .map((response:Response) =><IEmployee[]>response.json());
        
    }
    getEmployeeByCode(empCode:string):Observable<IEmployee>{
        // return this._http.get("assets/Employeedata/" + empCode) 
        // .map((response:Response) =>response.json());
        // console.log(empCode);
        
            return this.getEmployees()
                .map((employee: IEmployee[]) => employee.find(employee => employee.code ===empCode));
        }

    
}