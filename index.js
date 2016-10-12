var Gun = require('gun');
var gun = Gun({file: false});
var port = process.env.PORT || process.argv[2] || 8080;
var ip = '0.0.0.0';
var http = require('http');
var server = http.createServer();
gun.wsp(server);
server.listen(port, '0.0.0.0');
console.log("Server running on " + ip + ":" + port);