import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import UserProfileService
    from '../../services/userprofileservice/userprofileservice.service';

import AuthenticationStorageService
    from '../../services/authenticationstorageservice/authenticationstorageservice.service';

let navigationComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'navigation.component.html',
    selector: 'navigation-component'
};

@Component(navigationComponentDef)
class NavigationComponent implements OnInit, OnDestroy {
    @Input()
    public isAuthenticated: boolean = false;

    constructor(private userProfileService: UserProfileService,
        private authenticationStorageService: AuthenticationStorageService) {
        console.log('Navigation Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');

        this.userProfileService.UserProfileEvent.subscribe(
            result => this.isAuthenticated = result,
            error => this.isAuthenticated = false);
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }

    signout() {
        this.authenticationStorageService.unsetAuthToken();
        this.isAuthenticated = false;
    }
}

export default NavigationComponent;
