import { CONSTANTS } from './helper/Constants';

export class API {
	readonly base = `http://${CONSTANTS.SERVER_IP}:${CONSTANTS.SERVER_PORT}`;
	readonly defaultOptions = { headers: { 'Content-Type': 'application/json' } };

	private post({ url, data }: { url: string, data: any }) {
		fetch(url, { method: 'POST', body: JSON.stringify(data), ...this.defaultOptions });
	}

	addMessage(data) {
		this.post({ url: `${this.base}/services/messages`, data });
	}
}