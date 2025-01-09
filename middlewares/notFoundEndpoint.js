function notFoundEndpoint(req, res, next){
    res.status(404);
    res.json({
        message: 'L\'endpoint richiesto non esiste',
        status: 404,
        error: 'not found endpoint'
    })
}

module.exports = notFoundEndpoint;