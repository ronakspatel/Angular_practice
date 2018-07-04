import { Component } from "@angular/core";

@Component({
    selector: 'pancard',
    templateUrl: './pancard.component.html'
})
export class Pancard {
    isStatus: boolean = false;
    
    onchange(val:number):void{
        if (val>=50000) {
            this.isStatus=true;
        } else {
            this.isStatus=false;
        }
    }   
           
   

}