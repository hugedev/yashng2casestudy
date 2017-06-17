import { FormControl } from '@angular/forms';
const MIN_LIMIT: number = 1000;
const MAX_LIMIT: number = 50000;

class CreditLimitValidator {
    static validateCreditLimit(
        minimum: number = MIN_LIMIT, maximum: number = MAX_LIMIT) {
        return function (control: FormControl): any {
            let status = control && control.value;

            if (status) {
                let creditLimitValue = parseInt(control.value);
                let isValid = creditLimitValue >= minimum &&
                    creditLimitValue <= maximum;

                if (!isValid) {
                    return {
                        creditLimitValidation: true
                    };
                }
            }

            return null;
        }
    }
}

export default CreditLimitValidator;
