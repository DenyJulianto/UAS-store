module.exports = (app) => {
    const order = require('../controllers/order.controller')

    let router = require('express').Router()

    // look a cart
    router.get('/user/:id', order.findCart)
    router.post('/user/:id/add', order.addToCart)
    router.delete('/delete/user/:id/product/:code', order.removeFromCart)

    app.use('/api/orders', router)
}