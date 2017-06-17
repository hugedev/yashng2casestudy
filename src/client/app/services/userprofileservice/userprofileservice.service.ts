import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import AuthenticationStorageService
    from '../authenticationstorageservice/authenticationstorageservice.service';

const MIN_TOKEN_LENGTH: number = 10;

class UserProfileService {
    private userProfileChanged: Subject<boolean>;

    constructor(private authenticationStorageService: AuthenticationStorageService) {
        this.userProfileChanged = new Subject<boolean>();
    }

    public get UserProfileEvent() {
        return this.userProfileChanged;
    }

    public broadcast() {
        let token = this.authenticationStorageService.getAuthToken();

        if (token) {
            let status = token && token.length >= MIN_TOKEN_LENGTH;

            this.userProfileChanged.next(status);
        }
    }
}

export default UserProfileService;
