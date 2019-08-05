const http = require('http');
const server = http.createServer((function(request,response) {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end("Hello World\n");
}));
// use port 3000 instead of 7000 on yout vagrant machien
server.listen(3000);