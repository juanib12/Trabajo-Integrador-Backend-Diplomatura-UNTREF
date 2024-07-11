const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB_URLSTRING)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log('Error al conectarse : ', err))
}

module.exports = connectDB