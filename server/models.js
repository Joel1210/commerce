const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/productsBlack_db");
autoIncrement.initialize(connection);
 

const ProductSchema = new mongoose.Schema({
    
    name: { type: String, required: [true, "Name of product is required"], minlength: [3, "Name must be at least 3 character"] },

    quantity: { type: Number, required: [true, "You must enter a quantity"], min: [0, "You can't input a negative quantity!"] },

    price: { type: Number, required: [true, "You must enter a price!"], min: [0, "You can't pay someone to take it off your hands!"] }

}, { timestamps: true })


ProductSchema.plugin(autoIncrement.plugin, 'Product');

// mongoose.model('Product', ProductSchema);

var Product = connection.model('Product', ProductSchema);

module.exports = Product;

