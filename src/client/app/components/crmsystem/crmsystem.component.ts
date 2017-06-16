import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customerservice/customerservice.service';
import InternetCustomer from '../../models/crmsystem/internetcustomer';

@Component({
    moduleId: module.id,
    selector: 'crm-system-component',
    templateUrl: 'crmsystem.component.html'
})
class CrmSystemComponent implements OnInit {
    public customers: InternetCustomer[] = [];
    public isLoading: boolean = false;
    public errorMessage: string = '';

    constructor(private customerService: CustomerService) {
        console.log('Customer Component Initialized!');
    }

    ngOnInit() {
        if (this.customerService) {
            this.isLoading = true;

            this.customerService
                .getCustomers()
                .subscribe(
                result => this.customers = result,
                error => this.errorMessage = `Error Occurred, Details ${JSON.stringify(error)}`,
                () => this.isLoading = false)
        }
    }
}

export default CrmSystemComponent;
