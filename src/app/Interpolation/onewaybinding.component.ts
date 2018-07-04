import { Component } from "@angular/core";

@Component({
    selector:'onewaybinding',
    templateUrl:'./onewaybinding.Component.html',
    styleUrls:['./onewaybinding.Component.css']
})
export class OneWayBinding{
    pageHeader: string = 'Google.com';
    imagePath: string = 'https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

    fName: string = 'Ronak';
    lName: string = 'Patel';
    isDisabled: boolean = false;


    firstName:string='karan';
    lastName:string='patel';
    gender:string='male';
    age:number=26;

    getFullName(): string {
        return this.fName + '  ' + this.lName;
    }

}