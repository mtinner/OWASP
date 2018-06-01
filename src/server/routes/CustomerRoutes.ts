import * as express from 'express';
import { RequestHandler, Router } from 'express-serve-static-core';
import { IRoutes } from './IRoutes';

export class CustomerRoutes implements IRoutes {
	private router: Router;

	constructor() {
		this.router = express.Router();
	}

	getRoutes(): RequestHandler[] {
		return [
			this.router.get('/', (req, res) => {
				res.status(200).send({});
			}),
			this.router.get('/:id', (req, res) => {
				console.log(req.params['id']);
				res.status(200).send({});
			}),
			this.router.post('/orders/',
				(req, res) => {

					res.status(200).send({ ok: 42 });
				})
		];
	}
}
