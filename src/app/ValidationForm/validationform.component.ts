import { Component } from "@angular/core";

@Component({
    selector:'validation-form',
    templateUrl:'./validationform.Component.html',
    styleUrls:['./validationform.Component.css']
    
})  
export class ValidationForm{
    username:string='Please Enter UserName';
    usernamelength:string='Please Enter Minimum 4 Characters';

    emailid:string=' Please Enter Email';
    emailidpattern:string='Please Enter Correct Email';

    mobileno:string='Please Enter mobile number';
    mobilenolength:string='Please Enter 10 numbers';

    address:string='Please Enter Address';
    addresslength:string='Please Enter Full Address';
}