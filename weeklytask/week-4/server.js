const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 4090
const server = http.createServer((req, res) => {
console.log(req.url, req.method);
res.setHeader('Content-Type', 'text/html');
fs.readFile('C:/Users/Omodeko/Documents/ICT-YEP/backend-weekly-task-main/week-4/index.html', (err, data) => {
if (err) {
console.log(err)
res.end()
} else {
res.end(data);
}
})
})
server.listen(port, hostname, () => {
console.log('listening for request on port 4090');
})