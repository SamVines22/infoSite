const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {

    res.setHeader('content-type', 'text/html');
    console.log(req.url);
    switch(req.url) {
        case '/':
            console.log("index");
            fs.readFile("./static/index.html",(err,data)=>{
                if (err){console.log(err)}
                res.statusCode = 200;
                res.write(data);
                res.end();
                
                
            })
            break;
        case '/about':
            fs.readFile("./static/about.html", (err,data)=> {
                if(err){console.log(err)}
                res.statusCode = 200;
                res.write(data);
                res.end();
            })
            break;
        case '/contact-me':
            fs.readFile("./static/contact-me.html", (err,data)=> {
                if(err){console.log(err)}
                res.statusCode = 200;
                res.write(data);
                res.end();
            })
            break;
        case '/style.css':
            
            fs.readFile("./static/style.css", (err,data)=> {
                res.writeHead(200, {'content-type':'text/css'});
                res.write(data);
                res.end();
            })    
        default:
            fs.readFile("./static/404.html", (err,data)=> {
                if (err){console.log(err)}
                res.statusCode = 200;
                res.write(data);
                res.end();
            }) 
    }
    


})


server.listen(3000, 'localhost', ()=> {
    console.log("listening on 3000");
})