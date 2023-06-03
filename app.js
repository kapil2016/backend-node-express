const http = require('http')

const server = http.createServer((req , res)=>{
    // console.log('kapil kumar')
    res.setHeader('Content-Type','text/html')
    if(req.url === '/home'){
        res.write('<html><head></head><body><h1>Welcome Home</h1></body></html>')
    }else if(req.url === '/about'){
        res.write('<html><head></head><body><h1>Welcome to about us Page</h1></body></html>')

    }else if(req.url ==='/node'){
        res.write('<html><head></head><body><h1>This is my node project</h1></body></html>')
    }else{
        res.write('<html><head></head><body><h1>Hello world</h1></body></html>')
    }
    res.end()
})

server.listen(4000)