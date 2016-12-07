'use strict';

console.log('Loading function');

const https = require('https');

exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    });

    if (event.httpMethod !== 'POST') {
        done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
    
    const eventBody = JSON.parse(event.body);
    
    const payload = {
        'client_id': process.env.CLIENT_ID,
        'client_secret': process.env.CLIENT_SECRET,
        'code': eventBody.authorizationCode
    };
    if (eventBody.state) {
        payload.state = eventBody.state;
    }
    
    const data = JSON.stringify(payload);
    
    const options = {
        hostname: 'github.com',
        port: 443,
        path: '/login/oauth/access_token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
            'Accept': 'application/json',
            'User-Agent': process.env.USER_AGENT
        }
    };

    const req = https.request(options, (res) => {
        let body = '';
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            if (res.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            console.log(`Successful response: ${body}`);
            done(null, body);
        });
    });
    req.on('error', callback);
    req.write(data);
    req.end();
};
