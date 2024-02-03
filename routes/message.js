const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) =>{
    fs.readFile('username.txt',(err, data)=> {
        if(err){
            console.log('Error occurs while reading the file',err);
            data = "No chat Exists"
        } 
        res.send(`<h4>User chats: </h4> ${data} <br><br><form action="/ " method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type="text" name="message" placeholder="type message here.." id="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Send</button>
         </form>`)  
    })
 
    
})

router.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}    `, {flag:'a'},(err) =>{
      err ? console.log(err) : res.redirect('/');
    })
})



module.exports = router;