const express = require("express");
const connectDB = require("./database.js");
require('dotenv').config();

const port = process.env.PORT ?? 3008;
const Producto = require("./product.js");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Bienvenido!");
});

//Devuelve todos los productos.
app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();

    if (productos.length == 0) {
      return res.status(404).json({ error: "No se encontraron productos en nuestra base de datos." });
    } 

    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

//Obtener un producto por su ID.
app.get("/productos/:id", async (req, res) => {
  const { id } = req.params;

  try { 
    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ error: `No se ha encontrado el producto en nuestra base de datos.` });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});
  
//Devuelve los productos que coinciden con el nombre especificado (búsqueda parcial).
app.get("/productos/nombre/:nombre", async (req, res) => {
  const { nombre } = req.params;

  try {
    const productos = await Producto.find({
      nombre: { $regex: nombre, $options: "i" },
    });

    if (productos.length === 0) {
      return res.status(404).json({ error: "No se encontraron los productos con el nombre: ", nombre });
    }

    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});
  
//Agregar un nuevo producto.
app.post("/productos", async (req, res) => {
  const producto = new Producto(req.body);

  try {
    if ( !req.body.codigo || !req.body.nombre || !req.body.precio || !req.body.categoria ) {
      return res.status(400).json({ error: "Complete todos los campos para continuar." });
    }

    await producto.save();
    res.status(201).json({ message: "Se creo con exito el producto: ", producto });
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});
  
//Modificar el precio de un producto (parcialmente).
app.patch("/productos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByIdAndUpdate(id, req.body, { new: true });

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({
      message: "Se ha actualizado con exito el producto: ",
      producto,
    });
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});
  
//Borrar un producto.
app.delete("/productos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findByIdAndDelete(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({
      message: "Se ha eliminado con exito el producto: ",
      producto,
    });
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
});

app.get("*", (req, res) => {
  res.json("Error 404. Estas perdido!");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en: http://localhost:${port}`);
});