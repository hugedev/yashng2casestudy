import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerService }
    from '../../services/customerservice/customerservice.service';

import internetCustomerFormGroup from './newcustomer.model';

const REDIRECT_TO_HOME: string = 'home';

@Component({
    moduleId: module.id,
    templateUrl: 'newcustomer.component.html',
    selector: 'new-customer-component'
})
class NewCustomerComponent {
    public newCustomerFormGroup: FormGroup;

    constructor(private customerService: CustomerService,
        private router: Router) {
        console.log('New Customer Component Initialized!');

        this.newCustomerFormGroup = internetCustomerFormGroup;
    }

    saveData() {
        let validation = this.newCustomerFormGroup &&
            this.newCustomerFormGroup.valid;

        if (validation) {
            this.customerService.saveCustomer(this.newCustomerFormGroup.value)
                .subscribe(
                result => {
                    console.log('Form Data Saved Successfully!');
                    console.log('Result : ' + result);

                    if (this.router) {
                        this.router.navigate([REDIRECT_TO_HOME]);
                    }
                },
                error => { },
                () => { });
        }
    }
}

export default NewCustomerComponent;
