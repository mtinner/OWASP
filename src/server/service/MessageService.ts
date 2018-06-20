import {BaseService} from './BaseService';
import {Repository} from '../db/Repository';


export class MessageService extends BaseService<any> {

	constructor() {
		super(new Repository('message'));
	}
}