import {Routes , RouterModule} from '@angular/router'


import {CustomerForm} from '../app/CustomerForm/CustomerForm.component'
import {Calculator} from './Calculator/calculator.component'
import {CssBinding} from './Cssbinding/cssbinding.component'
import {OneWayBinding} from './Interpolation/onewaybinding.component'
import {EventBinding} from './EventBinding/eventbinding.component'
import {TwoWayBinding} from './TwoWayBinding/twowaybinding.component'
import {ngFor} from './ngFor/ngfor.component'
import {EmployeesDetail} from './EmployeeDetail/employeedetail.component'
import {ValidationForm} from './ValidationForm/validationform.component'
import {EmployeeComponent} from './EmployeeDetail/employee.component'

 export const routerArray : Routes =[
{ path : '',component : CustomerForm},
{ path : 'calculator',component : Calculator},
{ path : 'onewaybinding',component : OneWayBinding},
{ path : 'cssBinding',component : CssBinding},
{ path : 'eventBinding',component : EventBinding},
{ path : 'twowayBinding',component : TwoWayBinding},
{ path : 'ngfor',component : ngFor},
{ path : 'employees',component : EmployeesDetail},
{ path : 'employees/:code',component : EmployeeComponent},
{ path : 'validationform',component : ValidationForm},


]


export const RoutingModule = RouterModule.forRoot(routerArray);
