import { BrowserModule } from '@angular/platform-browser';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import CommonModule from '../common/common.module';
import CrmSystemModule from '../crmsystem/crmsystem.module';
import SecurityModule from '../security/security.module';

import InterceptedHttp from '../../extensibility/intercepted-http';

import BootComponent from '../../components/boot/boot.component';

let bootModuleDef: any = {
    imports: [BrowserModule, CommonModule, SecurityModule, CrmSystemModule],
    declarations: [BootComponent],
    bootstrap: [BootComponent],
    providers: [
        {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
                return new InterceptedHttp(backend, defaultOptions);
            },
            deps: [XHRBackend, RequestOptions]
        }
    ]
};

export default bootModuleDef;