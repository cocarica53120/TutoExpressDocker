var request = require("request");

var port_req = process.env.PORT_REQ || 80;


var options = { method: 'POST',
  url: `http://127.0.0.1:${port_req}/about?id=12345&name=alain`,
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'tutoexpressdocker-1743.herokuapp.com',
     'Postman-Token': '6aca772f-588f-47ba-9c3c-850a88680521,13e1b9fe-7cab-4321-85de-f2d6a0e66ac4',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.15.2' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
