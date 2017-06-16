import { Component, Input } from '@angular/core';

import InternetCustomer from '../../models/crmsystem/internetcustomer';

@Component({
    moduleId: module.id,
    templateUrl: 'customerviewer.component.html',
    selector: 'customer-viewer-component'
})
class CustomerViewerComponent {
    @Input()
    public customerInfo: InternetCustomer;

    constructor() {
        console.log('Customer Viewer Component Initialized!');
    }
}

export default CustomerViewerComponent;
