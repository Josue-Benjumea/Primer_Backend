//#1 importar mongoose
const mongoose = require("mongoose");
//#2 llamar la clase schema ---> es la coleccion de mongodb
const { Schema } = mongoose;
//#3 crear el schema de lo que se necesite
const userSchema = new Schema(
  {
    firtsName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
//#4 exportar como un modelo
//module.exports = mongoose.model("nombre coleccion",el eschema de la coleccion)
module.exports = mongoose.model("user", userSchema);
