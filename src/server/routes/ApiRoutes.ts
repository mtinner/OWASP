import * as express from 'express';
import { Router } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import { IRoutes } from './IRoutes';
import { CustomerRoutes } from './CustomerRoutes';

export class ApiRoutes implements IRoutes {
	private router: Router;
	private orderRoutes: CustomerRoutes;

	constructor() {
		this.router = express.Router();
		this.orderRoutes = new CustomerRoutes();
	}

	getRoutes(): RequestHandler[] {
		return [
			this.router.use('/services/customer', this.orderRoutes.getRoutes()),
		];
	}
}
