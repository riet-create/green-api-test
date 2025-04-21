const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());  // Для парсинга JSON-запросов

// Прокси для получения настроек
app.get('/api/getSettings', async (req, res) => {
  const { idInstance, apiTokenInstance } = req.query;
  const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка запроса' });
  }
});

// Прокси для получения состояния инстанса
app.get('/api/getStateInstance', async (req, res) => {
  const { idInstance, apiTokenInstance } = req.query;
  const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка запроса' });
  }
});

// Прокси для отправки сообщения
app.post('/api/sendMessage', async (req, res) => {
  const { idInstance, apiTokenInstance, phone, message } = req.body;
  const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatId: `${phone}@c.us`, message })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка запроса' });
  }
});

// Прокси для отправки файла по URL
app.post('/api/sendFileByUrl', async (req, res) => {
  const { idInstance, apiTokenInstance, phone, urlToSend } = req.body;
  const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatId: `${phone}@c.us`, urlFile: urlToSend, fileName: "file" })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка запроса' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

