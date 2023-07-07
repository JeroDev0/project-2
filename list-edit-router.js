const express = require('express');
const router = express.Router();

const tareas = require('./tareas.json');


const validatePostRequest = (req, res, next) => {
  if (req.method === 'POST') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Empty request body' });
    }

    const { descripcion } = req.body;
    if (!descripcion) {
      return res.status(400).json({ error: 'Falta información de la descripcion' });
    }
  }

  next();
};


const validatePutRequest = (req, res, next) => {
  if (req.method === 'PUT') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Empty request body' });
    }

    const { descripcion, completada } = req.body;
    if (!descripcion && !completada) {
      return res.status(400).json({ error: 'Información Invalida' });
    }
  }

  next();
};

router.post('/', validatePostRequest, (req, res) => {
  const { descripcion } = req.body;
  const nuevaTarea = {
    id: tareas.length + 1,
    descripcion,
    completada: false
  };

  tasks.push(nuevaTarea);

  res.status(201).json(nuevaTarea);
});

router.delete('/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex(task => tarea.id === tareaId);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tasks.splice(taskIndex, 1);

  res.json({ message: 'Task deleted' });
});

router.put('/:id', validatePutRequest, (req, res) => {
  const tareaId = parseInt(req.params.id);
  const { descripcion, completada } = req.body;
  const tareIndex = tareas.findIndex(tarea => tarea.id === tareaId);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tareas[tareaIndex].descripcion = descripcion || tareas[tareaIndex].descripcion;
  tareas[tareaIndex].completada = completada || tareas[tareaIndex].completada;

  res.json(tareas[tareaIndex]);
});

module.exports = router;