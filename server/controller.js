const Products = require('./models');

module.exports = {
    allProducts: (req, res) => {
        Products.find()
            .then(data => res.json({all_products: data, message:"Success all products"}))
            .catch(err => res.json({errorAllProducts: err}))
    },

    oneProduct: (req, res) => {
        Products.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json({oneProduct: err}))
    },

    newProduct: (req, res) => {
        Products.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    updateProduct: (req, res) => {
        Products.findByIdAndUpdate(req.params.id, {name: req.body.name, quantity: req.body.quantity, price: req.body.price}, { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    deleteProduct: (req, res) => {
        Products.findByIdAndDelete(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}