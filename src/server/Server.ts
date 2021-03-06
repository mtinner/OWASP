import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { constants } from './helper/Constants';
import { ApiRoutes } from './routes/ApiRoutes';

export class Server {
	private app = express();
	private apiRoutes;

	constructor() {
		this.apiRoutes = new ApiRoutes();
	}

	start() {
		this.app.use(function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			next();
		});

		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());

		this.app.use(this.apiRoutes.getRoutes());

		const server = http.createServer(this.app);

		const port = constants.PORT;

		server.listen(port);
		console.log(`Server Port: ${port}`);
	}

}