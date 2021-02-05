module.exports = (req, res, next) => {
    if (req.user) {
        return res.redirect('/products');
    }

    next();
}