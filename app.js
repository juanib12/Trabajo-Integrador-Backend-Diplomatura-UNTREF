const express = require("express");
const connectDB = require("./database.js");
const port = process.env.PORT ?? 3008;
const Producto = require("./product.js");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Bienvenido");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en: http://localhost:${port}`);
});