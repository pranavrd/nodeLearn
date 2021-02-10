console.log(__filename);
console.log(__dirname);
var url = 'http://qwerlog.io./log';

function log(message){
	console.log(message);
}

module.exports.log = log;