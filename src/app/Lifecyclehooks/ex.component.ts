import { Component } from '@angular/core';
import {SimpleComponent} from './simple.component'


@Component({
  selector: 'simpleex',
  template:`Your text:<input type='text'[(ngModel)]='userText'/>
  <br/><br/>
  <simple [simpleInput]='userText'></simple>
  
  `
})
export class simpleex {
  
  userText:string='ronak';
}
