function getSettings() {
    const idInstance = document.getElementById("idInstance").value.trim();
    const apiToken = document.getElementById("apiToken").value.trim();

    fetch(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("response").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("response").textContent = "Ошибка: " + error.message;
        });
}

