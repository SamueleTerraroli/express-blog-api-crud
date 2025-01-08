const posts = require ('../data/posts');

const index = (req , res) => {
    console.log(req.query);

    let filteredPost = posts;
    if(req.query.tags){
        filteredPost = post.filter(post => post.tags.includes(req.query.tags));
    }
    
    res.json(filteredPosts);
}

const show = (req , res) => {
    const post = posts.find(post => post.id == req.params.id)
    if(!post){
        res.status(404);
        return res.json({
            message: 'post non trovato',
            status: 404,
            error: 'not found'
        })
    }
    res.json(post);
}

const store = (req , res) => {
    const id = posts.at(-1).id +1;
    newPost ={
        id,
        ...req.body
    }
    posts.push(newPost);

    res.status(201);
    res.json(newPost);
    console.log(posts);
    
}

const update = (req , res) => {
    res.send("modifico il post con id"+ req.params.id);
}

const modify = (req , res) => {
    res.send("modifica parziale del post con id" + req.params.id);
}

const destroy = (req , res) => {
    const post = posts.find(post => post.id == req.params.id)
    if(!post){
        res.status(404);
        return res.json({
            message: 'post non trovato',
            status: 404,
            error: 'not found'
        })
    }
    posts.splice(posts.indexOf(post), 1)
    console.log(posts);
    
    res.sendStatus(204);
    
    
}

module.exports ={
    index,
    show,
    store,
    update,
    modify,
    destroy
}