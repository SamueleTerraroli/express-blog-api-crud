const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req , res) => {
    res.send('server dei post');
})

app.listen(port, () => {
    console.log('sono in ascolto alla porta 3000');
    
})