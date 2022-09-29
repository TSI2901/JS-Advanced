function encodeAndDecodeMessages() {
    let messageElement = document.querySelector('textarea');
    let encodeButtonElement = document.querySelector('button');

    let receivedMessageElement = document.querySelectorAll('textarea')[1];
    let decodeButtonElement = document.querySelectorAll('button')[1];

    encodeButtonElement.addEventListener('click', function () {
        let givenMessage = messageElement.value;
        let encodedMessage = '';

        for (let i = 0; i < givenMessage.length; i++) {
            let encodedLetter = String.fromCharCode(givenMessage.charCodeAt(i) + 1);
            encodedMessage += encodedLetter;
        }

        messageElement.value = '';
        receivedMessageElement.value = encodedMessage;
    });
    decodeButtonElement.addEventListener('click', function () {
        let receivedMessage = receivedMessageElement.value;
        let decodedMessage = '';

        for (let i = 0; i < receivedMessage.length; i++) {
            let decodedLetter = String.fromCharCode(receivedMessage.charCodeAt(i) - 1);
            decodedMessage += decodedLetter;
        }

        receivedMessageElement.value = decodedMessage;
    });
}