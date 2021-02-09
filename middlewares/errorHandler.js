function errorHandler(err, req, res, next) {
    if (!err) return;

    res.status(500).render('404', {error: err})
}

module.exports = errorHandler;