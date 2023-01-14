//bot token
var telegram_bot_id = "5690572138:AAH-GKVGax-QbyryNQtls0zZgJcbagPz1aA";
//chat id
var chat_id = 1396019648;
var u_name, thema, tel, email, message;
var ready = function() {
    u_name = document.getElementById("fname").value;
    thema = document.getElementById("thema").value;
    tel = document.getElementById("tel").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nIsh: " + thema + "\nTelefon: " + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("fname").value = "";
    document.getElementById("thema").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};