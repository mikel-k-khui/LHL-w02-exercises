/** 
 * SETUP
 * Our usual client setup code
 * Connect to example.com website's HTTP server using our TCP library
 * HTTP servers typically run on port 80
 */
const net = require('net');
const request = require('request');

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

  let URL = 'https://www.google.com/fdsafsafsa.html. ';
  request(URL, (error, response, body) => {
    if (!error) {
      // console.log('body:', body); // Print the HTML for the Google homepage.
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    }
    console.log('error:', error); // Print the error if one occurred
  });
});

/** 
 * HTTP Response
 * After request is made, the HTTP server should send us HTTP data via our TCP connection
 * Print the data to the screen, and end the connection
 */
conn.on('data', (data) => {
  // console.log(data);
  conn.end();
});