import { Http, RequestOptions } from '@angular/http';
import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import InternetCustomer from '../../models/crmsystem/internetcustomer';
import InternetCustomerMap from '../../utilities/internet-customer-map';

const DEFAULT_NO_OF_RECORDS: number = 20;
const CUSTOMER_SERVICE_BASE_URL = new OpaqueToken('customerServiceBaseUrl');
const CONTENT_TYPE: string = 'Content-Type';
const ACCEPT: string = 'Accept';
const JSON_TYPE: string = 'application/json';

@Injectable()
class CustomerService {
    private customeServiceUrl: string;

    constructor(private httpService: Http,
        @Inject(CUSTOMER_SERVICE_BASE_URL)
        private customerServiceBaseUrl: string,
        private requestOptions: RequestOptions) {

        if (this.requestOptions) {
            (<any>this.requestOptions).headers = this.requestOptions.headers || {};
            this.requestOptions.headers.append(CONTENT_TYPE, JSON_TYPE);
            this.requestOptions.headers.append(ACCEPT, JSON_TYPE);
        }

    }

    getCustomers(noOfRecords: number = DEFAULT_NO_OF_RECORDS): Observable<InternetCustomer[]> {
        this.customeServiceUrl = `${this.customerServiceBaseUrl}/api/customers/${noOfRecords}`;

        let observableCustomers: Observable<InternetCustomer[]>;

        if (this.httpService) {
            observableCustomers =
                this.httpService
                    .get(this.customeServiceUrl, this.requestOptions)
                    .map(response => {
                        let data = response.json();

                        let mappedData = data.map(
                            (item: any) => InternetCustomerMap.transform(item));

                        return mappedData;
                    });
        }

        return observableCustomers;
    }
}

export { CUSTOMER_SERVICE_BASE_URL, CustomerService };
