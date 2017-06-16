import { OpaqueToken } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import CrmSystemComponent from '../../components/crmsystem/crmsystem.component';
import CustomerViewerComponent from '../../components/customerviewer/customerviewer.component';
import CustomerDetailViewerComponent from '../../components/customerdetailviewer/customerdetailviewer.component';
import CustomerSearchPanelComponent from '../../components/customersearchpanel/customersearchpanel.component';
import PhotoUrlPipe from '../../pipes/photourl/photourl.pipe';
import ContentTrimmerPipe from '../../pipes/contenttrimmer/contenttrimmer.pipe';
import WherePipe from '../../pipes/where/where.pipe';

import { CustomerService, CUSTOMER_SERVICE_BASE_URL } from '../../services/customerservice/customerservice.service';
import crmSystemRouteEntries from '../../routing/crmsystem/crmsystem.routing';

let crmSystemModuleDef: any = {
    imports: [CommonModule, FormsModule, HttpModule, crmSystemRouteEntries],
    declarations: [CrmSystemComponent, CustomerDetailViewerComponent,
        CustomerSearchPanelComponent,
        CustomerViewerComponent, PhotoUrlPipe, WherePipe, ContentTrimmerPipe],
    providers: [
        {
            provide: CUSTOMER_SERVICE_BASE_URL,
            useFactory: () => {
                let serviceUrl = '';

                if (String('<%= BUILD_TYPE %>') === 'prod') {
                    serviceUrl = String('<%= PROD_CUSTOMER_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_CUSTOMER_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        },
        {
            provide: CustomerService,
            useClass: CustomerService,
            deps: [Http, CUSTOMER_SERVICE_BASE_URL, RequestOptions]
        }
    ]
};

export default crmSystemModuleDef;