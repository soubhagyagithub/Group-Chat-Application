const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send(`<form action="/login" method="POST" onSubmit="localStorage.setItem('username)">
    <input type="text" name="username" placeholder="username">
    <br>
    <button type="submit">Login</button>
    </form>`);
});

router.post('/login', (req, res) => {
    const username = req.body.username;
   

    // Send a script to set username in localStorage and redirect to '/'
    const script = `
        <script>
            localStorage.setItem('username', '${username}');
            window.location.href = '/';
        </script>
    `;

    res.send(script);
});



module.exports = router;
