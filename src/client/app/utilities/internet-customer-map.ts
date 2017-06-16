import InternetCustomer from '../models/crmsystem/internetcustomer';

class InternetCustomerMap {
    static transform(object: any): InternetCustomer {
        let customerObject = new InternetCustomer(
            object.customerId,
            object.name,
            object.addres,
            object.email, object.phone,
            object.credit, object.status,
            object.remarks, object.blogUrl);

        return customerObject;
    }
}

export default InternetCustomerMap;
