import { conversation as messages } from "./chat";
// import RemoteMessage from "./classes/RemoteMessage";
// import Messages from "./chat";
// import LocalMessage from "./classes/LocalMessage";
import Conversation1 from "./classes/Conversation";

const convo=document.querySelector('.conversation');
const Conversation=new Conversation1(convo);
// console.log(convo)
// display (messages, convo)

messages.forEach ((message, index) => {
    setTimeout(() => {
    Conversation.addMessage(message);
;
}, 500 *index);
});

// Messages.forEach ((message, index) => {
//     const messageInstance = message.side ==="remote"
//     ? new RemoteMessage (message.name, message.text)
//     : new LocalMessage (message.name, message.text)
//     setTimeout(() => {
//     Conversation.addMessage(messageInstance);
// ;
// }, 500 *index);
// });

