// index.js

// Import built-in module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World! Server is running 🚀');
});

// Define port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});