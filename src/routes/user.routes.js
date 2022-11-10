const { query } = require("express");
const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

//crear usuario:
router.post("/create-user", async (req, res) => {
  const userExist = await User.find({}, { email: 1 });
  const newUser = new User(req.body);
  for (let i of userExist) {
    if (newUser.email === i.email) {
      return res.status(401).json("usuario ya existe");
    }
  }

  await newUser.save();
  return res.status(201).json("usuario creado exitosamente");
});

//ver usuarios:
router.get("/get-all-users", async (req, res) => {
  const users = await User.find();
  return res.status(200).json({ data: users });
});

//eliminar usuarios:
router.delete("/delete-user", async (req, res) => {
  await User.findByIdAndDelete(req.query.id);
  return res.status(200).json(`usuario eliminado id: ${req.query.id} `);
});

//Actualizar usuario
router.put("/update-user", async (req, res) => {
  await User.findByIdAndUpdate(req.query.id, { $set: req.body });
  return res.status(200).json("Usuario actualizado");
});

module.exports = router;
