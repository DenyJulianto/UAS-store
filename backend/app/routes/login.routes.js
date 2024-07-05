module.exports = (app) => {
    const loginController = require('../controllers/login.controller');

    let router = require('express').Router();

    // User login
    router.post('/login', loginController.login);

    // User logout (optional, if you handle sessions)
    router.post('/logout', loginController.logout);

    app.use('/api/auth', router);
};