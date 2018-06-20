import * as express from 'express';
import { RequestHandler, Router } from 'express-serve-static-core';
import { IRoutes } from './IRoutes';
import { MessageService } from '../service/MessageService';

export class MessageRoutes implements IRoutes {
	private router: Router;
	private messageService: MessageService;

	constructor() {
		this.router = express.Router();
		this.messageService = new MessageService();
	}

	getRoutes(): RequestHandler[] {
		return [
			this.router.post('/', (req, res) => {
				return this.messageService.add(req.body)
					.then((data) => res.status(201).send(data));
			})
		];
	}
}
