const express = require('express');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use('/contact-us',(req, res , next)=>{
    res.sendFile(path.join(__dirname , 'views' , 'contact-us.html'))
})
app.use('/success',(req , res , next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','success.html'))
})
app.use((req , res , next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(4000)
