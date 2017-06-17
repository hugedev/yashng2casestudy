import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import securityRouteEntries from '../../routing/security/security.routing';
import SignInComponent from '../../components/signin/signin.component';

import AppConfiguration from '../../utilities/app.configuration';

import { AUTH_SERVICE_BASE_URL, AuthenticationService }
    from '../../services/authenticationservice/authenticationservice.service';
import AuthenticationStorageService
    from '../../services/authenticationstorageservice/authenticationstorageservice.service';
import UserProfileService
    from '../../services/userprofileservice/userprofileservice.service';

let userProfileServiceObject = new UserProfileService(
    new AuthenticationStorageService());

@NgModule({
    imports: [CommonModule, FormsModule, securityRouteEntries],
    declarations: [SignInComponent],
    providers: [
        {
            provide: UserProfileService,
            useValue: userProfileServiceObject
        },
        {
            provide: AUTH_SERVICE_BASE_URL,
            useFactory: () => {
                let serviceUrl = '';

                if (String('<%= BUILD_TYPE %>') === 'prod') {
                    serviceUrl = String('<%= PROD_AUTH_SERVICE_URL %>');
                } else {
                    serviceUrl = String('<%= DEV_AUTH_SERVICE_URL %>');
                }

                return serviceUrl;
            }
        },
        {
            provide: AuthenticationService,
            useClass: AuthenticationService,
            deps: [Http, AUTH_SERVICE_BASE_URL]
        },
        {
            provide: AuthenticationStorageService,
            useClass: AuthenticationStorageService
        }
    ]
})
class SecurityModule {
    constructor() {
        let token = window.localStorage.getItem(AppConfiguration.AUTH_TOKEN_KEY);

        if (token) {
            window.localStorage.removeItem(AppConfiguration.AUTH_TOKEN_KEY);
        }

        console.log('Security Module Initialized!');
    }
}

export default SecurityModule;
