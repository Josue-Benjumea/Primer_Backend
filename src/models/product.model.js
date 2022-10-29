//#1 importar mongoose
const mongoose  = require("mongoose");
//#2 llamar la clase schema ---> es la coleccion de mongodb
const {Schema} = mongoose
//#3 crear el schema de lo que se necesite
const productSchema = new Schema(
    {
    name:{ type:String, required:true},//llaves de la coleccion
    price:{ type:Number, required:true},
    description:{ type: String, default: " El vendedor no ha anadido una descripcion"},
    image:{ type: String, default:"Sin imagen adjunta"},
    stock:{ type: Number, default:0},
    keyWords:{ type: Array, default:[]}
},
    { //que deseamos capturar para que se inserte en el dato de las llave3s
        versionKey:false,
        timestamps:true
    }
)

//#4 exportar como un modelo
//module.exports = mongoose.model("nombre coleccion",el eschema de la coleccion)
module.exports = mongoose.model("product", productSchema)

