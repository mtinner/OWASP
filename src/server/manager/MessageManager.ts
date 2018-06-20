import { MessageService } from '../service/MessageService';
import { IMessage } from '../helper/IMessage';

export class MessageManager {
    private messageService = new MessageService();


    get(message: IMessage) {
        return this.messageService.get({_id: message._id});
    }

    add(message: IMessage) {
        return this.messageService.add(message);
    }

    update(message: IMessage) {
        return this.messageService.update({_id: message._id}, message);
    }
}