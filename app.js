const http = require('http');
const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use("/add-product",(req , res , next)=>{
    console.log('in the middileware')
    res.send('<form action="/product" method="POST"><input type="text" name="product"></input><input type="text" name="size"></input><button type="submit">submit</button></form>')
    
})
app.use("/product",(req , res , next)=>{
    console.log(req.body)
    res.redirect('/add-product')
})
app.use("/",(req , res , next)=>{
  res.send('<h1>hello there !</h1>')

})

// const server = http.createServer(app)
// server.listen(4000)
app.listen(4000)
