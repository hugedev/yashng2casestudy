import { FormGroup, FormControl, Validators } from '@angular/forms';

import CreditLimitValidator from '../../utilities/credit-limit-validator';

const PHONE_PATTERN = /^\d{5}-\d{5}$/;

let internetCustomerFormGroup = new FormGroup({
    customerId: new FormControl(0),
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('',
        [Validators.required, Validators.pattern(PHONE_PATTERN)]),
    credit: new FormControl(0,
        [Validators.required, CreditLimitValidator.validateCreditLimit(1000, 50000)]),
    status: new FormControl(false),
    remarks: new FormControl(''),
    blogUrl: new FormControl('')
});

export default internetCustomerFormGroup;
