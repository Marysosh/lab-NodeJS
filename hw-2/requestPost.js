const http = require('http');

const optionsPOST = {
    hostname: 'localhost',
    port: '8080',
    method: 'POST',
    headers: {
        'name': 'Mary',
        'IKnowYourSecret': 'TheOwlsAreNotWhatTheySeem'
    }
}

const requestPOST = http.request(optionsPOST, result => {
    console.log(`You know that ${options.headers.IKnowYourSecret}`);
});

requestPOST.on('error', error => {
    console.error(error);
});

requestPOST.end();