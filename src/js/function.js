
messages.forEach ((message, index) => {
        setTimeout(() => {
        conversation.innerHTML += `<div class="message message--${message.side}">
        <div class="message__text">
            ${message.text}
        </div>
    </div>`
    ;
    }, 500 *index);
    });
    



