require('dotenv').config();

const express = require('express');
const os = require('os');

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

app.get('/ping', (req, res) => {
  res.json('pong');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// test coverage (+ in github pipeline)
// docker run -e PORT=3000 -p 3000:3000 aws-esc-sample
