const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

var healthzHandler = function(request, response) {
  console.log("Health check request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("OK\n");
};

var readinessHandler = function(request, response) {
  console.log("Readiness check request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("OK\n");
}

var www = http.createServer(handler);
www.on('/healthz', healthzHandler); // Add /healthz endpoint
www.on('/readiness', readinessHandler); // Add /readiness endpoint
www.listen(8080);