const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.write("I am ibenegbu Ekpereamaka, and I am in backend development TRACK");
    res.end()
});

server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});