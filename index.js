require('dotenv').config();

const express = require('express');
const os = require('os');
const module = require('assert');
const app = express();
const port = process.env.PORT;

const getIp = () => {
  const networkInterfaces = os.networkInterfaces();

  const ipv4Address = Object.values(networkInterfaces)
    .flat()
    .find((iface) => !iface.internal && iface.family === 'IPv4');

  return ipv4Address;
};

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    ip: getIp().address,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
