const express = require('express');
const postsRouter = require ('./router/posts');

const app = express();
const port = 3000;

app.get('/',(req , res) => {
    res.send('server dei post');
})
app.use(express.json());

app.use('/posts' , postsRouter);


app.listen(port, () => {
    console.log('sono in ascolto alla porta 3000');
    
})