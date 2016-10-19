var amqp = require('amqp');
var url  = 'amqp://192.168.11.51:5672'

var payload = {
  deviceId : '8675309'
};

var connection = amqp.createConnection({url: url, login:'admin', password:'admin'},  { defaultExchangeName: 'amq.topic' });

connection.on('ready', function () {
  connection.publish('airasoul', payload);

  setTimeout(function(){
    connection.disconnect();
    process.exit();
  }, 500);
});
