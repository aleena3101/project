var generator = require('random-password-generator');
 
var password = generator.generate({
    length: 10,
    numbers: true
});
 
// 'uEyMTw32v9'
console.log(password);

