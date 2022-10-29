const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://Josue:Jbang407@cluster0.yhzut0g.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

    module.exports = mongoose
