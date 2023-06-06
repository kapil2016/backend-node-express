const express = require('express')
const router = express.Router();

router.get("/add-product",(req , res , next)=>{
    console.log('in the middileware')
    res.send('<form action="/admin/product" method="POST"><input type="text" name="product"></input><input type="text" name="size"></input><button type="submit">submit</button></form>')
    
})
router.post("/product",(req , res , next)=>{
    console.log(req.body)
    res.redirect('/admin/add-product')
})

module.exports = router ;