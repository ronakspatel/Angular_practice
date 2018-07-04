import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {EmployeeService} from './EmployeeDetail/employee.service'

import { AppComponent } from './app.component';
import { CustomerForm } from './CustomerForm/CustomerForm.component';
import { CustAng } from './CustAng/CustAng.component';
import { LogIn } from './LogIn/LogIn.component';
import { Fullname } from './binding/fullname.component';
import {Calculator} from './Calculator/calculator.component';
import{CssBinding} from'./Cssbinding/cssbinding.component'
import {EventBinding} from './EventBinding/eventbinding.component'
import {TwoWayBinding} from './TwoWayBinding/twowaybinding.component'
import {ngFor} from './ngFor/ngfor.component'
import {CustomPipe} from './ngFor/Custompipe.pipe'
import{EmployeesDetail} from './EmployeeDetail/employeedetail.component'

import {EmployeeCount} from './EmployeeDetail/employeecount.component'
import {OneWayBinding} from './Interpolation/onewaybinding.component'
import {ValidationForm} from './ValidationForm/validationform.component'
import {SimpleComponent} from './Lifecyclehooks/simple.component'
import {simpleex} from './Lifecyclehooks/ex.component'
import {EmployeeComponent} from './EmployeeDetail/employee.component'

import {AppBoostrapModule} from './app-boostrap/app-boostrap.module'

 import {RoutingModule} from './app.routing'





@NgModule({
  declarations: [
    AppComponent,
    CustomerForm,
    CustAng,
    LogIn,
    Fullname,
    Calculator,
    OneWayBinding,
    CssBinding,
    EventBinding,
    TwoWayBinding,
    ngFor,CustomPipe,EmployeesDetail,EmployeeCount,
    ValidationForm,
    SimpleComponent,simpleex,EmployeeComponent
  ],
  imports: [
    BrowserModule , FormsModule , RoutingModule,HttpModule,AppBoostrapModule
  ],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
