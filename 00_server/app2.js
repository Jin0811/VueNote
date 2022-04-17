const express = require('express');
const app = express();
const port = 5001;

const dataJson = require("./dataJson");

app.get('/cars', (req, res) => {
  console.log("请求了cars接口");
  res.send(dataJson.carData);
})

app.listen(port, () => {
  console.log(`App is running at ${port}`);
})