console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events');

var endP = 'http://qwerlog.io./log';

class Logger extends EventEmitter{
	log(message){
	console.log(message);

	this.emit('messageLogged', {id:1, url: endP});
	}
}

module.exports = Logger;