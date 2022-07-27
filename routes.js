const fs = require('fs');

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<p>Hello from Slash23!</p>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button>');
        res.write('</html>');
        return res.end();
    }
    
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<p>Hello from main!</p>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler
}