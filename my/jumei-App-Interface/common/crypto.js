var crypto = require('crypto')
var secret = 'sfahfodighsdsfsfga'
function getCrypto(arg){
  var hash = crypto.createHmac('sha256' , secret).update(arg).digest('hex')
  return hash
}
module.exports = getCrypto