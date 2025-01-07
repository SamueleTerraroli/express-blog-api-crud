const posts = require ('../data/posts');

const index = (req , res) => {
    res.send('visualizzo i post in pagina');
}

const show = (req , res) => {
    res.send("visualizzo il post con id" + req.params.id);
}

const store = (req , res) => {
    res.send('aggiungo un nuovo post');
}

const update = (req , res) => {
    res.send("modifico il post con id"+ req.params.id);
}

const modify = (req , res) => {
    res.send("modifica parziale del post con id" + req.params.id);
}

const destroy = (req , res) => {
    res.send("elimino il post con id" + req.params.id);
}

module.exports ={
    index,
    show,
    store,
    update,
    modify,
    destroy
}