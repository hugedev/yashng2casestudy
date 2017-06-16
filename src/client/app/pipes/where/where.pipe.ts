import { Pipe, PipeTransform } from '@angular/core';

const INDEX_POS_FOUND: number = 0;

@Pipe({
    name: 'where'
})
class WherePipe implements PipeTransform {
    transform(value: any[], fieldName: string, fieldValue: string) {
        let transformedValues;

        let validation = value && fieldName && fieldValue;

        if (!validation)
            transformedValues = value;
        else {
            transformedValues = value.filter(
                (item: any) => {
                    let status = item &&
                        (<string>item[fieldName]).indexOf(fieldValue) >= INDEX_POS_FOUND

                    return status;
                });
        }

        return transformedValues;
    }
}

export default WherePipe;
