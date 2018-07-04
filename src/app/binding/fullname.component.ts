import { Component } from "@angular/core";

@Component({
    selector :'Fullname',
    templateUrl:'./fullname.Component.html'
})
export class Fullname{
    fname: string;
    lname:string;
    fullname :string;
     

    onclick():void{
        this.fullname=this.fname+this.lname;

    }
    onclick1():void{
        this.fname="";
        this.lname="";
        this.fullname="";
    }

}
