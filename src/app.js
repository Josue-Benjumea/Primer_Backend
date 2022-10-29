const express = require("express") //constante para usar express
const cors = require("cors") //constante para usar cors

const app = express() //denominamos express como app
const port = 5000 //constante que nos dice el puerto
//middelwares
require('./database') //conectamos con la base de datos dentro de las comillas ira el archivo que contiene el archivo que se conecta con mongodb atlas
app.use(cors())
app.use(express.json())

//rutas
app.get("/api", (req,res) => {
    res.status(200).json({msg: "Bit-shop API v1.0.0"})


})
//app.use(/activadorderutas, importacion de las rutas que se pueden usar con esta ruta)
app.use("/users", require("./routes/user.routes"))
app.use("/product",require("./routes/product.routes"))





app.listen(port,()=>{console.log("Api corriendo en el puerto", port)})