import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'customPipe'
})
export class CustomPipe implements PipeTransform {
    transform(value: string, gender: string): string {
        if (gender.toLowerCase() == 'male') {
            return "Mr." + value;
        } else {

            return "Miss." + value;
        }
    }

}