import { Component, Input } from '@angular/core';

import InternetCustomer from '../../models/crmsystem/internetcustomer';

@Component({
    moduleId: module.id,
    templateUrl: 'customerdetailviewer.component.html',
    selector: 'customer-detail-viewer'
})
class CustomerDetailViewerComponent {
    @Input()
    public customerDetail: InternetCustomer;

    constructor() {
        console.log('Customer Detail Viewer Component Initialized!');
    }
}

export default CustomerDetailViewerComponent;
