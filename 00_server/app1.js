const express = require('express');
const app = express();
const port = 5000;

const dataJson = require("./dataJson");

app.get('/students', (req, res) => {
  console.log("请求了students接口");
  res.send(dataJson.studentData);
})

app.listen(port, () => {
  console.log(`App is running at ${port}`);
})