const http = require('http');

const server = http.createServer((req, res)=>{
	switch (req.url) {
		case '/':
			res.end('Home page')
			break;
	
		default:
			res.end('Error 500 page not exist')
			break;
	}
})

server.listen(3111)