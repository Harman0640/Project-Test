// index.js (Improved version)

const http = require('http');

// Create server with basic routing
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page 🏠');
    } 
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page 📄');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found ❌');
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});