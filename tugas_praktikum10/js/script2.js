let chats = [];
function send(){
    let chatbox = document.getElementById("chat");
    let message = document.getElementById("message");
    chats.push("<p class=\"chat\">"+message.value+"</p>");
    chatbox.innerHTML = chats.join("");
    chatbox.scrollTop = chatbox.scrollHeight;
    message.value = "";
}

function checkKey(event){
    let key = event.keyCode
    if (key == 13){
        send()
    }
}