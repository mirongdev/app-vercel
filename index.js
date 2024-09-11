// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Selamat kode Node.js berhasil dijalankan di server Vercel!, perubahan menunggu proses build selesai yah');
});
app.get('/cek', (req, res) => {
    res.send('perubahan menunggu proses build selesai yah');
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
