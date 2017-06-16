import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_LENGTH: number = 100;

@Pipe({
    name: 'contentTrim'
})
class ContentTrimmerPipe implements PipeTransform {
    transform(value: any, noOfCharacters: number = DEFAULT_LENGTH): string {
        let transformedValue: string;

        if (value) {
            if (value.length >= noOfCharacters) {
                transformedValue = (<string>value).substr(0, noOfCharacters) + ' ... ';
            } else {
                transformedValue = value;
            }
        }

        return transformedValue;
    }
}

export default ContentTrimmerPipe;
