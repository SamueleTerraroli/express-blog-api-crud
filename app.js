const express = require('express');
const postsRouter = require('./router/posts');
const notFoundEndpoint = require('./middlewares/notFoundEndpoint');
const errorsHandler = require('./middlewares/errorsHandler');
const app = express();

app.use(express.json());

const port = 3000;

// Rotte
app.get('/', (req, res) => {
    res.send('server dei post');
});

app.use('/posts', postsRouter);

// Middleware di gestione degli errori
app.use(notFoundEndpoint);
app.use(errorsHandler);

app.listen(port, () => {
    console.log('sono in ascolto alla porta 3000');
});
