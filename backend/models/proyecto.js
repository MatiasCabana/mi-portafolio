const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  enlace: String
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
