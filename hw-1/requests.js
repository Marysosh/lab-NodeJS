const http = require('http');
// 1. GET запрос
const optionsGET = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'GET'
}

const requestGET = http.request( optionsGET, (result) => {
    console.log(`Method: ${optionsGET.method}`);
    console.log(`Request finished with code: ${result.statusCode}`);
});

requestGET.on('error', error => {
    console.log(error)
});

requestGET.end();

//2. POST запрос
const optionsPOST = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST'
}

const requestPOST = http.request( optionsPOST, (result) => {
    console.log(`Method: ${optionsPOST.method}`);
    console.log(`Request finished with code: ${result.statusCode}`);
});

requestPOST.on( 'error', error => {
    console.log(error)
});

requestPOST.end();

//3. POST запрос с заголовком 'WhatWillSaveWorld': 'love'
const optionsPostHeader = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST',
    headers: {
        'WhatWillSaveWorld': 'Love'
    }
}
const requestWithHeader = http.request( optionsPostHeader, (result) => {
    console.log(`Method: ${optionsPostHeader.method}, Header: ${optionsPostHeader.headers}`);
    console.log(`Request finished with code: ${result.statusCode}`);
});

requestWithHeader.on( 'error', error => {
    console.log(error)
});

requestWithHeader.end();