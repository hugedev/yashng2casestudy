import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_FORMAT: string = 'JPG';

@Pipe({
    name: 'photoUrl'
})
class PhotoUrlPipe implements PipeTransform {
    transform(value: any, format: string = DEFAULT_FORMAT): string {
        let transformedValue: string;

        if (value) {
            transformedValue = `/images/people/Customer${value.toString()}.${format}`;
        }

        return transformedValue;
    }
} 

export default PhotoUrlPipe;
