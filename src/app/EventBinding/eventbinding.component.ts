import { Component } from "@angular/core";

@Component({
    selector: 'eventbinding',
    templateUrl: './eventbinding.Component.html',
    styleUrls: ['./eventbinding.Component.css']
})
export class EventBinding {
    f1name: string = 'Ronak';
    l1name: string = 'Patel';
    g1ender: string = 'male';
    a1ge: number = 26;
    showDetails: boolean = false;
     


    toggleDetails(): void{
        this.showDetails=!this.showDetails;
    }

}