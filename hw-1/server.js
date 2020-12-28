const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
    console.log('Accepted request ', request);
    response.end('Hello, Mary!');
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) {
        return console.log('Something happened', error);
    }

    console.log(`Server is listening on ${port}`);
})