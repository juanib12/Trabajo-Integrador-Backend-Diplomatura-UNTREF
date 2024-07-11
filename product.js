const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
  codigo: Number,
  nombre: String,
  precio: Number,
  categoria: String,
})

const Producto = mongoose.model('productos', ProductoSchema)

module.exports = Producto