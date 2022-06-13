const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Iniciando lógica');
    if (req.url === '/') {
        res.end('Welcome to our home page')
        console.log('home')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
        console.log('about')
    }
    else {
        res.end(`
        <h1>Oops!</h1>

        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
        console.log('resto')
    }

})

server.listen(5000)