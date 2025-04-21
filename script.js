function getCredentials() {
  const id = document.getElementById('idInstance').value.trim();
  const token = document.getElementById('apiTokenInstance').value.trim();
  return { id, token };
}

function showResponse(data) {
  document.getElementById('responseOutput').textContent = JSON.stringify(data, null, 2);
}

document.getElementById('getSettingsBtn').addEventListener('click', async () => {
  const { id, token } = getCredentials();
  const res = await fetch(`https://api.green-api.com/waInstance${id}/getSettings/${token}`);
  const data = await res.json();
  showResponse(data);
});

document.getElementById('getStateBtn').addEventListener('click', async () => {
  const { id, token } = getCredentials();
  const res = await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`);
  const data = await res.json();
  showResponse(data);
});

document.getElementById('sendMessageBtn').addEventListener('click', async () => {
  const { id, token } = getCredentials();
  const chatId = prompt("Введите номер получателя в формате 79991112233@c.us");
  const message = prompt("Введите текст сообщения");

  const res = await fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId,
      message
    })
  });

  const data = await res.json();
  showResponse(data);
});

document.getElementById('sendFileBtn').addEventListener('click', async () => {
  const { id, token } = getCredentials();
  const chatId = prompt("Введите номер получателя в формате 79991112233@c.us");
  const url = prompt("Введите URL файла");
  const filename = prompt("Введите имя файла (например, photo.jpg)");

  const res = await fetch(`https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId,
      urlFile: url,
      fileName: filename
    })
  });

  const data = await res.json();
  showResponse(data);
});

