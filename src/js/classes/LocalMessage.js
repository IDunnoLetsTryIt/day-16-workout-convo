import { Messages} from "./chat";

class LocalMessage extends Messages {
    constructor (name, text){
        super (name, text);
        this.side = 'local'
    }
}


export default LocalMessage;