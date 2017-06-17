import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService }
    from '../../services/authenticationservice/authenticationservice.service';
import AuthenticationStorageService
    from '../../services/authenticationstorageservice/authenticationstorageservice.service';
import UserProfileService
    from '../../services/userprofileservice/userprofileservice.service';

const REDIRECT_TO_HOME_PATH: string = 'home';

@Component({
    moduleId: module.id,
    templateUrl: 'signin.component.html',
    selector: 'signin-component'
})
class SignInComponent {
    @Input() public userId: number;
    @Input() public password: string;

    public errorMessage: string = '';

    constructor(private authenticationService: AuthenticationService,
        private authenticationStorageService: AuthenticationStorageService,
        private userProfileService: UserProfileService,
        private routerService: Router) {
    }

    login() {
        let validation = this.authenticationService &&
            this.authenticationStorageService && this.routerService;

        if (validation) {
            this.authenticationService.authenticate(this.userId, this.password)
                .subscribe(
                result => {
                    if (result) {
                        this.authenticationStorageService.setAuthToken(result);
                        this.userProfileService.broadcast();
                        this.routerService.navigate([REDIRECT_TO_HOME_PATH]);
                    }
                },
                error => { this.errorMessage = `Login Failed, Message: ${error}` });
        }
    }
}

export default SignInComponent;
