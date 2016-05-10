const static = require('node-static');
const file = new static.Server(process.env.DOCJS_DIR || '.');

require('http').createServer((req, res) => {
	req.addListener('end', () => file.serve(req, res)).resume();
}).listen(process.env.PORT || 8080);
