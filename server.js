const express = require('express');
const app = express();
const csv = require('csvtojson');
const request = require('request');
const cors = require('cors');

require('dotenv').config();

app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

const SHEET_ID = process.env.SHEET_ID;

app.get('/download', (req, res) => {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&id=${SHEET_ID}&gid=0`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      csv()
        .fromString(body)
        .then((jsonData) => {
          console.log(jsonData);
          for (let i = 0; i < jsonData.length; i++) {
            jsonData[i].manuallyScheduled = 'true';
          }
          console.log(jsonData);

          jsonData = JSON.parse(
            `{"tasks": {"rows": ${JSON.stringify(jsonData)}}}`
          );
          console.log(jsonData);
          res.json(jsonData);
        });
    } else {
      res.send('Error downloading CSV');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
