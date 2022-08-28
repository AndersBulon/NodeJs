const http = require('http');
const fs = require('fs');
const path = require('path');

const favPath = path.join(__dirname, "public", "favicon.ico")
let requestCounter = 0;

//todo=============================================================
//! реализация сервера на чистом nodejs + навигация
//todo=============================================================

const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/favicon.ico':
			res.setHeader('Content-Type', 'image/x-icon');
			fs.createReadStream(favPath).pipe(res);
			// return;
			break;
		case "/":
			requestCounter++;
			res.end("Home page " + requestCounter)
			break;
		case "/users":
			requestCounter++;
			res.end("Users page " + requestCounter)
			break;
		case "/books":
			requestCounter++;
			res.end("Library " + requestCounter)
			break;
		default:
			requestCounter++;
			res.end("Error 404 page is not exist " + requestCounter)
			break;
	}
});

server.listen(4004, () => {
	console.log('Сервер запущен по порту: 4004');
})