const express = require('express');
const bodyparser = require('body-parser')
const file = require('fs')


const app = express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json());

app.get('/',(req , res , next)=>{
   const messages =  file.readFileSync('messages.txt');
    res.send(`<html><head></head><body><form action='/message' method ='POST' onsubmit='submitHandler(event)'><lable for='input'>start chat</lable><input name='message' id='input'></input><button type='submit'>send</button></form><p>${messages}</p><script>function submitHandler(event){const data = localStorage.getItem('username');const value = document.getElementById('input').value ;const xhr = new XMLHttpRequest();xhr.open('POST', '/message', true);xhr.setRequestHeader('Content-Type', 'application/json');xhr.send(JSON.stringify({data:data , value:value}));}</script></body></html>`)
})

app.post('/message',(req , res , next)=>{
        let username = ''
        let message = ''
        if(req.body.data){
            username = req.body.data ;
            message = req.body.value
            file.appendFile('messages.txt' ,`${username}:${message}` +'\n',(err)=>{
                if (err) {
                    console.error(err);
                  } else {
                    console.log('Response appended to file.');
                  }
            } );
        } 
        res.redirect('/')   
})
 
app.get('/login',(req , res , next)=>{
    res.send("<form action='/' method ='POST'><lable for='input'>Enter username</lable><input name='username' id='input'></input><button>login</button></form>")
})

app.post('/',(req , res , next)=>{
    // console.log(req.body.username)
    const username = req.body.username;
    res.send(`<html><head></head><body><script>localStorage.setItem('username',${JSON.stringify(username)});</script></body></html>`)
})

app.listen(5000)


 