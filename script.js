// Функция для отображения ответа
function displayResponse(data) {
    document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}

// Функция для отображения ошибки
function displayError(error) {
    document.getElementById("response").textContent = `Ошибка: ${error.message}`;
    console.error(error);
}

// Обработчик кнопки getSettings
document.getElementById("getSettings").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;

    if (!idInstance || !apiToken) {
        displayError(new Error("Заполните поля idInstance и ApiTokenInstance"));
        return;
    }

    fetch(`https://api.green-api.com/waInstance/getSettings/${idInstance}?ApiTokenInstance=${apiToken}`)
        .then(response => response.json())
        .then(displayResponse)
        .catch(displayError);
};

// Обработчик кнопки getStateInstance
document.getElementById("getStateInstance").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;

    if (!idInstance || !apiToken) {
        displayError(new Error("Заполните поля idInstance и ApiTokenInstance"));
        return;
    }

    fetch(`https://api.green-api.com/waInstance/getStateInstance/${idInstance}?ApiTokenInstance=${apiToken}`)
        .then(response => response.json())
        .then(displayResponse)
        .catch(displayError);
};

// Обработчик кнопки sendMessage
document.getElementById("sendMessage").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!idInstance || !apiToken || !phone || !message) {
        displayError(new Error("Заполните все поля"));
        return;
    }

    const body = {
        chatId: phone,
        message: message
    };

    fetch(`https://api.green-api.com/waInstance/sendMessage/${idInstance}?ApiTokenInstance=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(displayResponse)
    .catch(displayError);
};

// Обработчик кнопки sendFileByUrl
document.getElementById("sendFileByUrl").onclick = function() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;
    const phone = document.getElementById("phone").value;
    const fileUrl = document.getElementById("fileUrl").value;

    if (!idInstance || !apiToken || !phone || !fileUrl) {
        displayError(new Error("Заполните все поля"));
        return;
    }

    const body = {
        chatId: phone,
        fileUrl: fileUrl
    };

    fetch(`https://api.green-api.com/waInstance/sendFileByUrl/${idInstance}?ApiTokenInstance=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(displayResponse)
    .catch(displayError);
};

