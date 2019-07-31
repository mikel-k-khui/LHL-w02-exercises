/** 
 * SETUP
 * Our usual client setup code
 * Connect to example.com website's HTTP server using our TCP library
 * HTTP servers typically run on port 80
 */
const net = require('net');
const conn = net.createConnection({ 
  host: 'example.com',
  port: 80
});
conn.setEncoding('UTF8');

conn.on('connect', () => {
  console.log(`Connected to server!`);

  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.com\r\n`);
  conn.write(`\r\n`);
});

/** 
 * HTTP Response
 * After request is made, the HTTP server should send us HTTP data via our TCP connection
 * Print the data to the screen, and end the connection
 */
conn.on('data', (data) => {
  console.log(data);
  conn.end();
});