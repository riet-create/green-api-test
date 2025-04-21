async function fetchGreenAPI(method, body = null) {
  const id = document.getElementById("idInstance").value.trim();
  const token = document.getElementById("apiTokenInstance").value.trim();
  const url = `https://api.green-api.com/waInstance${id}/${method}/${token}`;

  try {
    const response = await fetch(url, {
      method: body ? "POST" : "GET",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });

    const result = await response.json();
    document.getElementById("response").textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById("response").textContent = `Ошибка: ${error.message}`;
  }
}

function getSettings() {
  fetchGreenAPI("getSettings");
}

function getStateInstance() {
  fetchGreenAPI("getStateInstance");
}

function sendMessage() {
  const phone = document.getElementById("phoneNumber").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!phone || !message) {
    alert("Введите номер и сообщение!");
    return;
  }

  fetchGreenAPI("sendMessage", {
    chatId: `${phone}@c.us`,
    message: message,
  });
}

function sendFileByUrl() {
  const phone = document.getElementById("phoneNumber").value.trim();
  const fileUrl = document.getElementById("fileUrl").value.trim();
  if (!phone || !fileUrl) {
    alert("Введите номер и URL файла!");
    return;
  }

  fetchGreenAPI("sendFileByUrl", {
    chatId: `${phone}@c.us`,
    urlFile: fileUrl,
    fileName: fileUrl.split("/").pop(),
    caption: "Файл от GREEN-API",
  });
}

