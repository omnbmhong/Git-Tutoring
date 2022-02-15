const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
     switch(req.url){
            case '/':
              res.end('HanHan Lion Loves Rabbit Baby.');
              break;
            case '/about':
                res.end('hello About Page.');
                break;

            case '/home':
                  res.end('welcom to my Homepage.');
                  break;

            default:
                    res.end('Not Found!');  
                  

       }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


 

