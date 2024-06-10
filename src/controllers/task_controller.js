const {
    AccionMejora,
    Responsable,
    Usuario,
    Tarea
} = require('../models/associations_model')

const createTask = async (req, res) => {
    const {
        tareNombre,
        tareDescripcion,
        tarePeso,
        tareMeta,
        tareLineaBase,
        tareDocumentoLineaBase,
        acmeId,
        tareFechaInicio,
        tareFechaFin,
        usuaId,
        respId,
        tareRecursos,
        tareOrden
    } = req.body;
    try {
        const newTask = await Tarea.create({
            tareNombre,
            tareDescripcion,
            tarePeso,
            tareMeta,
            tareLineaBase,
            tareDocumentoLineaBase,
            acmeId,
            tareFechaInicio,
            tareFechaFin,
            usuaId,
            respId,
            tareRecursos,
            tareOrden
        });
        res.status(201).json(newTask);
    } catch (error) {
        console.log("errrpr ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to get a todo by ID
const taskById = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await Tarea.findByPk(id, {
            include: [
                AccionMejora,
                Responsable,
                Usuario
            ]
        });
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({error: 'Task not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};


const getTaskAll = async (req, res) => {
    try {
        const tasks = await Tarea.findAll({
            include: [
                AccionMejora,
                Responsable,
                Usuario
            ]
        });
        if (tasks) {
            res.json(tasks);
        } else {
            res.status(404).json({error: 'Task not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getTaskByAcmeId = async (req, res) => {
    const id = req.params.id;
    try {
        const tasks = await Tarea.findAll({
            where: {acmeId: id},
            include: [
                AccionMejora,
                Responsable,
                Usuario
            ]
        });
        if (tasks) {
            res.json(tasks);
        } else {
            res.status(404).json({error: 'Task not found'});
        }
    } catch (error) {
        console.log("que sucede ? ", error)
        res.status(500).json({error: 'Internal Server Error'});
    }
};
// Controller method to update a todo by ID
const updateTask = async (req, res) => {
    const id = req.params.id;
    const {
        tareNombre,
        tareDescripcion,
        tarePeso,
        tareMeta,
        tareLineaBase,
        tareDocumentoLineaBase,
        acmeId,
        tareFechaInicio,
        tareFechaFin,
        usuaId,
        respId,
        tareRecursos,
        tareOrden
    } = req.body;
    try {
        const task = await Tarea.findByPk(id);
        if (task) {
            task.tareNombre = tareNombre;
            task.tareDescripcion = tareDescripcion;
            task.tarePeso = tarePeso;
            task.tareMeta = tareMeta;
            task.tareLineaBase = tareLineaBase;
            task.tareDocumentoLineaBase = tareDocumentoLineaBase;
            task.acmeId = acmeId;
            task.tareFechaInicio = tareFechaInicio;
            task.tareFechaFin = tareFechaFin;
            task.usuaId = usuaId;
            task.respId = respId;
            task.tareRecursos = tareRecursos;
            task.tareOrden = tareOrden;
            await task.save();
            res.json(task);
        } else {
            res.status(404).json({error: 'Factor not found'});
        }
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

module.exports = {
    createTask,
    taskById,
    getTaskAll,
    getTaskByAcmeId,
    updateTask
}