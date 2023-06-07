const sendMessageId = document.getElementById("sendmessageid");
const textpopup = document.getElementById("text");

if (sendMessageId) {
    sendMessageId.onclick = function() {
        const message = textpopup.value; // get the text from the textarea
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    message: message // pass the message as a property of the object
                },
            );
        });
    };
}