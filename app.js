const http = require('http');
const routes = require('./routes')

const server = http.createServer((req , res)=>{
    routes(req,res);
})


server.listen(4000)