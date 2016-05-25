var http = require('http');

const PORT=8080;

function response(req, res){
	res.end('Hello ' + req.url)
}

var server = http.createServer(response);

server.listen(PORT, function(){
	console.log('Server is litsening', PORT);
});