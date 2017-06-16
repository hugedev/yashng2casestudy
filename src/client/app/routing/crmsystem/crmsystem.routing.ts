import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import CrmSystemComponent from '../../components/crmsystem/crmsystem.component';

let crmSystemRoutingEntries = [
    { path: 'crm-system', component: CrmSystemComponent }
];

let crmSystemRouteEntries: ModuleWithProviders = RouterModule.forRoot(crmSystemRoutingEntries, {
    useHash: false
});

export default crmSystemRouteEntries;
