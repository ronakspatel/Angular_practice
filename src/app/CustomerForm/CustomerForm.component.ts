import { Component } from "@angular/core";

@Component({
    selector: 'CustomerForm',
    templateUrl: './CustomerForm.Component.html',
    styleUrls:['./CustomerForm.Component.css']
})
export class CustomerForm {
    fname: String = "Ronak";
    lname: String = "Patel";
    age: number = 26;
    monumber: number = 47875757577;
    isStatus :boolean = false;


    onChangeGenderRadio( eventValue :string ) : void{
        console.log('clicked 1212334=='+eventValue);
        if(eventValue=='other'){
            this.isStatus = true;
        }
        else
         this.isStatus =false;
        
    }

}