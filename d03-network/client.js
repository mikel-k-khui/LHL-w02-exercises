const net = require('net');

const conn = net.createConnection({ 
  host: "192.168.15.193", // change to IP address
  port: 3000
});

conn.setEncoding('utf8'); // interpret data as textno

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});