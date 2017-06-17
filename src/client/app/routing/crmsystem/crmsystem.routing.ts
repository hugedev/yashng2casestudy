import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import CrmSystemComponent from '../../components/crmsystem/crmsystem.component';
import NewCustomerComponent from '../../components/newcustomer/newcustomer.component';

let crmSystemRoutingEntries = [
    { path: 'crm-system', component: CrmSystemComponent },
    { path: 'new-customer', component: NewCustomerComponent }
];

let crmSystemRouteEntries: ModuleWithProviders = RouterModule.forRoot(crmSystemRoutingEntries, {
    useHash: false
});

export default crmSystemRouteEntries;
