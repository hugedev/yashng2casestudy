import { Http, RequestOptions } from '@angular/http';
import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import InternetCustomer from '../../models/crmsystem/internetcustomer';
import InternetCustomerMap from '../../utilities/internet-customer-map';

const DEFAULT_NO_OF_RECORDS: number = 20;
const CUSTOMER_SERVICE_BASE_URL = new OpaqueToken('customerServiceBaseUrl');

@Injectable()
class CustomerService {
    private customerServiceUrl: string;

    constructor(private httpService: Http,
        @Inject(CUSTOMER_SERVICE_BASE_URL)
        private customerServiceBaseUrl: string) { }

    getCustomers(noOfRecords: number = DEFAULT_NO_OF_RECORDS): Observable<InternetCustomer[]> {
        this.customerServiceUrl = `${this.customerServiceBaseUrl}/api/customers/${noOfRecords}`;

        let observableCustomers: Observable<InternetCustomer[]>;

        if (this.httpService) {
            observableCustomers =
                this.httpService
                    .get(this.customerServiceUrl)
                    .map(response => {
                        let data = response.json();

                        let mappedData = data.map(
                            (item: any) => InternetCustomerMap.transform(item));

                        return mappedData;
                    });
        }

        return observableCustomers;
    }

    saveCustomer(customer: InternetCustomer): Observable<boolean> {
        this.customerServiceUrl = `${this.customerServiceBaseUrl}/api/customers`;

        let result: Observable<boolean>;

        if (this.httpService) {
            result = this.httpService
                .post(this.customerServiceUrl, customer)
                .map(response => {
                    let result = response.json();
                    let status = result && result.customerId;

                    return status;
                });
        }

        return result;
    }
}

export { CUSTOMER_SERVICE_BASE_URL, CustomerService };
