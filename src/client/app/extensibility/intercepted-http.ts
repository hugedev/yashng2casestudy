import {
    Http, RequestOptions, Request, Response,
    RequestOptionsArgs, XHRBackend, XHRConnection
} from '@angular/http';

import { Observable } from 'rxjs';
import AppConfiguration from '../utilities/app.configuration';

const JSON_CONTENT_TYPE: string = 'application/json';
const CONTENT_TYPE: string = 'Content-Type';
const ACCEPT: string = 'Accept';
const AUTHORIZATION: string = 'Authorization';
const BEARER: string = 'Bearer';
const AUTHORIZATION_DELIMITER = ' ';

class InterceptedHttp extends Http {
    constructor(backEnd: XHRBackend, private defaultOptions: RequestOptions) {
        super(backEnd, defaultOptions);
    }

    request(url: any,
        options?: RequestOptionsArgs): Observable<Response> {
        let processedOptions = this.processHttpRequestHeaders(url);

        return super.request(url, options);
    }

    private processHttpRequestHeaders(url: any) {
        if (url) {
            (<any>url).headers = url.headers || new Headers();

            if (url.headers) {
                (<any>url.headers).append(CONTENT_TYPE, JSON_CONTENT_TYPE);
                (<any>url.headers).append(ACCEPT, JSON_CONTENT_TYPE);
            }

            let token = window.localStorage.getItem(AppConfiguration.AUTH_TOKEN_KEY);

            if (token) {
                let authorizationToken =
                    `${BEARER}${AUTHORIZATION_DELIMITER}${token}`;

                (<any>url).headers.append(AUTHORIZATION, authorizationToken);
            }
        }

        return url;
    }
}

export default InterceptedHttp;
