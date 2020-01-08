import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'isEven'
})
export class isEvenPipe implements PipeTransform {
    transform(value: any): boolean {
        if (typeof value == "number") {
            let numberValue = Number(value);
            return numberValue % 2 === 0;
        }
        else if(typeof value == "string"){
            let stringValue = new String(value);
            return stringValue.length % 2 === 0;
        }
        return false;
    }
}