//basics
function prHelo(name){
  console.log('Hello\t'+name);
}
prHelo('wassssa\n');



//module structure
console.log(module);
console.log('\n');



//load a module
const logger = require('./logger');
logger.log('Wassssa\n');



//path module (built-in)
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
console.log('\n');



