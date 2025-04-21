document.getElementById("getSettings").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;

    fetch(`https://api.green-api.com/waInstance/getSettings/${idInstance}?ApiTokenInstance=${apiToken}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("response").textContent = `Ошибка: ${error}`;
        });
};

document.getElementById("getStateInstance").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;

    fetch(`https://api.green-api.com/waInstance/getStateInstance/${idInstance}?ApiTokenInstance=${apiToken}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("response").textContent = `Ошибка: ${error}`;
        });
};

document.getElementById("sendMessage").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const messageText = document.getElementById("messageText").value;

    fetch(`https://api.green-api.com/waInstance/sendMessage/${idInstance}?ApiTokenInstance=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            textMessage: messageText
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("response").textContent = `Ошибка: ${error}`;
        });
};

document.getElementById("sendFileByUrl").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const fileUrl = document.getElementById("fileUrl").value;

    fetch(`https://api.green-api.com/waInstance/sendFileByUrl/${idInstance}?ApiTokenInstance=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            fileUrl: fileUrl
        })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("response").textContent = `Ошибка: ${error}`;
        });
};

