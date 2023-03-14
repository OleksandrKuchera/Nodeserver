const http = require('http');
const hostname = 'localhost';
const port = 3000
const fs = require('fs')

//1
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type','text/html')
//     res.end('Hello World')    
// })

//2 
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type','text/html')
//     res.write('<!DOCTYPE html>');
//     res.write('<html>');
//     res.write('<head>');
//     res.write('<title>HTML</title>');
//     res.write('</head>');
//     res.write('<body>');
//     res.write('<h1>Sasha Kuchera</h1>');
//     res.write('<h1>student UKD</h1>');
//     res.write('</body>');
//     res.write('</html>');
//     res.end();
// })


//3
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type','text/html')
//     const data = fs.readFileSync('./index.html','utf-8')
//     res.write(data);
//     res.end();
// })


//пуск
server.listen(port, hostname, ()=>{
    console.log('Сервер запущений')
})

