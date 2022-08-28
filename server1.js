const http = require('http');
const favicon = require('serve-favicon');
const finalhandler = require('finalhandler');
const path = require('path');

//todo=============================================================
//! реализация сервера на nodejs + модуль serve-favicon + навигация
//todo=============================================================

let _favicon = favicon(path.join(__dirname, 'public', 'favicon.ico'));
let requestCounter = 0;
let server = http.createServer((req, res) => {
	let done = finalhandler(req, res);
	
	_favicon(req, res, (err) => {
		if (err) {
			res.end('ooops')
			return done(err)
		}
		switch (req.url) {
			case "/":
				requestCounter++;
				res.write("Home page " + requestCounter)
				break;
			case "/users":
				requestCounter++;
				res.write("Users page " + requestCounter)
				break;
			case "/books":
				requestCounter++;
				res.write("Library " + requestCounter)
				break;
			default:
				requestCounter++;
				res.write("Error 404 page is not exist " + requestCounter)
				break;
		}
		res.end()
	})
})

server.listen(5000)