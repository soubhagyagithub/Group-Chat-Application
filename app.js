const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('./routes/login');
const messageRouter = require('./routes/message');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRouter);
app.use(messageRouter);



app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
