const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  importe: Number,
  categoria: String,
})

const Producto = mongoose.model('Producto', productoSchema)

module.exports = Producto