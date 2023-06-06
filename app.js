const http = require('http');
const express = require('express')
const app = express();

app.use((req , res , next)=>{
    console.log('in the middileware')
    next();
})
app.use((req , res , next)=>{
    console.log('in the secound middileware')
    res.send("<h1>Hello world</h1>")
})

// const server = http.createServer(app)
// server.listen(4000)
app.listen(4000)
