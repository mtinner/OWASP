import {BaseService} from './BaseService';
import {Repository} from '../db/Repository';


export class CustomerService extends BaseService<any> {

    constructor() {
        super(new Repository('customer'));
    }
}