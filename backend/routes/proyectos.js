const express = require('express');
const router = express.Router();
const Proyecto = require('../models/proyecto');


router.get('/', async (req, res) => {
  const proyectos = await Proyecto.find();
  res.json(proyectos);
});

router.post('/', async (req, res) => {
  const nuevo = new Proyecto(req.body);
  await nuevo.save();
  res.json(nuevo);
});

module.exports = router;
