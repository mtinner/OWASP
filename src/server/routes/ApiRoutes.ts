import * as express from 'express';
import { Router } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import { IRoutes } from './IRoutes';
import { MessageRoutes } from './MessageRoutes';

export class ApiRoutes implements IRoutes {
	private router: Router;
	private messageRoutes: MessageRoutes;

	constructor() {
		this.router = express.Router();
		this.messageRoutes = new MessageRoutes();
	}

	getRoutes(): RequestHandler[] {
		return [
			this.router.use('/services/messages', this.messageRoutes.getRoutes()),
		];
	}
}
