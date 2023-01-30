import { Messages} from "./chat";

class RemoteMessage extends Messages {
    constructor (name, text){
        super (name, text);
        this.side = 'remote'
    }
}


export default RemoteMessage;