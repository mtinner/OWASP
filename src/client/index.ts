import { API } from './Api';

let api = new API();
window['send'] = function send(text) {
	api.addMessage({text})
};