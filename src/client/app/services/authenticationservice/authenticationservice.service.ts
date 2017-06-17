import { Http } from '@angular/http';
import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_SERVICE_BASE_URL: OpaqueToken =
    new OpaqueToken('authenticationServiceBaseUrl');
const INVALID_TOKEN_REPSONSE: string = 'Invalid Token Response Received';

@Injectable()
class AuthenticationService {
    constructor(public httpService: Http,
        @Inject(AUTH_SERVICE_BASE_URL)
        public authenticationServiceBaseUrl: string) {
    }

    authenticate(userId: number, password: string): Observable<string> {
        let authenticationServiceUrl = `${this.authenticationServiceBaseUrl}/authenticate`;
        let requestPayload = {
            userId: userId,
            password: password
        };

        let result: Observable<string> = this.httpService
            .post(authenticationServiceUrl, requestPayload)
            .map(response => {
                let processedResponse = response.json();
                let token = processedResponse.token;

                if (!token)
                    throw new Error(INVALID_TOKEN_REPSONSE);

                return token;
            })
            .catch(error => {
                console.log('Error Occurred (Authentication Service) ' + JSON.stringify(error));

                throw new Error(INVALID_TOKEN_REPSONSE)
            });

        return result;
    }
}

export { AUTH_SERVICE_BASE_URL, AuthenticationService };
