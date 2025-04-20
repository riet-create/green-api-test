function getValues() {
  return {
    id: document.getElementById("idInstance").value,
    token: document.getElementById("apiToken").value,
    phone: document.getElementById("phoneNumber").value,
    text: document.getElementById("messageText").value,
    fileUrl: document.getElementById("fileUrl").value
  };
}

function showResponse(data) {
  document.getElementById("response").textContent = JSON.stringify(data, null, 2);
}

async function getSettings() {
  const { id, token } = getValues();
  const res = await fetch(`https://api.green-api.com/waInstance${id}/getSettings/${token}`);
  const data = await res.json();
  showResponse(data);
}

async function getState() {
  const { id, token } = getValues();
  const res = await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`);
  const data = await res.json();
  showResponse(data);
}

async function sendMessage() {
  const { id, token, phone, text } = getValues();
  const res = await fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId: `${phone}@c.us`,
      message: text
    })
  });
  const data = await res.json();
  showResponse(data);
}

async function sendFile() {
  const { id, token, phone, fileUrl } = getValues();
  const res = await fetch(`https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId: `${phone}@c.us`,
      urlFile: fileUrl,
      fileName: "file"
    })
  });
  const data = await res.json();
  showResponse(data);
}
