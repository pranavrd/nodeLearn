//basics
function prHelo(name){
  console.log('Hello\t'+name);
}
prHelo('wassssa\n');



//module structure
console.log(module);
console.log('\n');



//load a module
//const logger = require('./logger');
//logger.log('Wassssa\n');



//path module (built-in)
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
console.log('\n');



//os module 
const os = require('os');
console.log('Total memory: ' + os.totalmem());
console.log(`Free Memory: ${os.freemem()}`);
console.log('\n');


//fs module
const fs = require('fs');
fs.readdir('./',function(err, files){
	if(err) console.log('Error: '+err);
	else console.log(files);
})



//event module
const EventEmitter = require('events');
const Logger = require('./logger');
const loggr = new Logger();

loggr.on('messageLogged', (eventArg) => {
	console.log('Listener is called\n',eventArg);
});

loggr.log('wassssa');



//http module
const http = require('http');
const server = http.createServer((req,res) => {
	if(req.url === '/'){
		res.write('Wassssa');
		res.end();
	}

	if(req.url === '/abc'){
		res.write(JSON.stringify(['a','b','c']));
		res.end();
	}
});

server.listen(3000);

console.log('Listening on port 3000...')