const http = require('http');
const fs = require('fs');
const port = 8080;
const dbName = 'usersData.json';

let usersData = [];
if (fs.existsSync(dbName)) {
    usersData = JSON.parse(fs.readFileSync(dbName, 'utf-8'));
    console.log('users data read from file:', usersData);
}

const requestHandler = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if (request.method === 'POST' &&
        request.headers.iknowyoursecret === 'TheOwlsAreNotWhatTheySeem' &&
        request.headers.name) {
        usersData.push({name: request.headers.name, ip: request.connection.remoteAddress});
        fs.writeFile(dbName, JSON.stringify(usersData, null, ' '), error => {
            if (error) {
                throw error;
            }
        });
        response.end();
    } else {
        response.end(`You don't know secret`);
    }
}

const server = http.createServer(requestHandler);

server.listen(port, error => {
    if (error) {
        console.log(`ERROR! ${error}`);
    } else {
        console.log(`Server is listening on ${port}`);
    }
});