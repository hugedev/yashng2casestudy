import { Injectable } from '@angular/core';

import AppConfiguration from '../../utilities/app.configuration';

@Injectable()
class AuthenticationStorageService {
    setAuthToken(token: string): void {
        window.localStorage.setItem(AppConfiguration.AUTH_TOKEN_KEY, token);
    }

    unsetAuthToken(): void {
        window.localStorage.removeItem(AppConfiguration.AUTH_TOKEN_KEY)
    }

    getAuthToken(): string {
        return window.localStorage.getItem(AppConfiguration.AUTH_TOKEN_KEY);
    }
}

export default AuthenticationStorageService;
