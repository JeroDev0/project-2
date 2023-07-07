const express = require('express');
const router = express.Router();


const tareas = require('./tareas.json');

const parametrosDeValidez = (req, res, next) => {
  const { param1, param2 } = req.params;
  if (!param1 || !param2) {
    return res.status(400).json({ error: 'Parametros Invalidos' });
  }

  next();
};


router.get('/completadas', (req, res) => {
  const tareasCompletadas = tareas.filter(task => tarea.completada);

  res.json(tareasCompletadas);
});


router.get('/incompletas', parametrosDeValidez,(req, res) => {
  const tareasIncompletas = tareas.filter(task => !tarea.completada);

  res.json(tareasIncompletas);
});

module.exports = router;