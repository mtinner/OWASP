import { CustomerService } from '../service/CustomerService';
import { ICustomer } from '../helper/ISession';

export class CustomerManager {
    private customerService = new CustomerService();


    get(customer: ICustomer) {
        return this.customerService.get({name: customer.name});
    }

    add(customer: ICustomer) {
        return this.customerService.add(customer);
    }

    update(customer: ICustomer) {
        return this.customerService.update({name: customer.name}, customer);
    }
}