const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.get('/', (req, res, next) => {
    res.render('home/login');
});

router.get('/signup', (req, res, next) => {
    res.render('home/signup');
});




module.exports = router;