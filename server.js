/**
 * Bharat Electric Motors - Flagship EV Showroom Static Server
 * Showroom: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj
 * Primary WhatsApp / Mobile: 8009579794, Alt: 9875052329
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, cleanUrl === '/' ? 'index.html' : cleanUrl);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1>404 Not Found - Bharat Electric Motors</h1><p>Return to <a href="/">Home</a></p>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`\n================================================================`);
  console.log(`⚡ Bharat Electric Motors - Flagship EV Brand & Showroom Live!`);
  console.log(`📍 Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj`);
  console.log(`📱 Helpline / WhatsApp: 8009579794, 9875052329`);
  console.log(`🌐 Local URL:  http://localhost:${PORT}`);
  console.log(`🌐 Network:    http://127.0.0.1:${PORT}`);
  console.log(`================================================================\n`);
});
