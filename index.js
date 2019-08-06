const fs = require('fs');
const http = require('http');
const port = 8000;
const hello =require('./hello-world.js');  
const helloWorld=hello();
console.log(helloWorld);

const requestHandler = (request, response) => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
    console.log('Success')
  });
    response.end(`Handling a request on port ${port}`)
  };
  
const server = http.createServer(requestHandler);
  
server.listen(port, (err) => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }
  
    console.log(`Server is listening on ${port}`);

  });



