const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  conn.on('connect',() => {
    console.log('Connected')
  });
  conn.on('connect',() => {
    conn.write('"Name: SSK')
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = {connect}