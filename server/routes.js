const controller = require('./controller');
const path = require('path');

module.exports =(app) =>{
    app.get('/api/products', controller.allProducts)
    app.get('/api/products/:id', controller.oneProduct)
    app.post('/api/products', controller.newProduct)
    app.put('/api/products/:id', controller.updateProduct)
    app.delete('/api/products/:id', controller.deleteProduct)
}