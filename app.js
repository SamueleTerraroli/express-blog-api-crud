const express = require('express');
const postsRouter = require ('./router/posts');
const notFoundEndpoint = require ('./middlewares/notFoundEndpoint');
const errorsHandler = require ('./middlewares/errorsHandler')
const app = express();

app.use(express.json());
app.use(notFoundEndpoint);
app.use(errorsHandler);
const port = 3000;

app.get('/',(req , res) => {
    res.send('server dei post');
})

app.use('/posts' , postsRouter);


app.listen(port, () => {
    console.log('sono in ascolto alla porta 3000');
    
})