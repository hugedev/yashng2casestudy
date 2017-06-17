import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../services/customerservice/customerservice.service';
import InternetCustomer from '../../models/crmsystem/internetcustomer';
import NotificationService from '../../services/notificationservice/notificationservice.service';

@Component({
    moduleId: module.id,
    selector: 'crm-system-component',
    templateUrl: 'crmsystem.component.html'
})
class CrmSystemComponent implements OnInit {
    @Input()
    public customers: InternetCustomer[] = [];
    public isLoading: boolean = false;
    public errorMessage: string = '';

    constructor(private customerService: CustomerService,
        private notificationService: NotificationService) {
        console.log('Customer Component Initialized!');

        this.initializeNotification();
    }

    initializeNotification() {
        if (this.notificationService) {
            this.notificationService.registerCallback(
                (message: any) => {
                    let customer = new InternetCustomer(
                        message.customerId,
                        message.name, message.address, message.email,
                        message.phone, message.credit, message.status,
                        message.remarks, message.blogUrl);

                    this.customers.push(customer);
                });
        }
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
