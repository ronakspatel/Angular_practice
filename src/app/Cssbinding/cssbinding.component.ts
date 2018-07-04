import { Component } from "@angular/core";

@Component({
    selector:'cssBinding',
    templateUrl:'./cssbinding.Component.html',
    styleUrls:['./cssbinding.Component.css']
})
export class CssBinding{
    classesToApply: string="italicsClass BoldClass";
    applyBoldClass:boolean=true;
    applyItalicsClass:boolean=true;

    addClasses(){
        let classes={
            boldClass:this.applyBoldClass,
            italicsClass:this.applyItalicsClass

        };
        return classes;
    }
    isBold:boolean=true;
    fontSize:number=30;
    isItalic:boolean=true;
    addStyles(){
        let styles={
            'font-size.px':this.fontSize,
            'font-style':this.isItalic?'italic':'normal',
            'font-weight':this.isBold?'bold':'normal'
        };
        return styles;
    }
}