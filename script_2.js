const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end(`<html><head><title>Error</title></head><body style='position: relative; background-color: black;'><h1 style='position: absolute; left: 430px; top: 200px; color: white; text-align: center;'>The name of the student who coded this page is Nazar</h1></body></html>`);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
