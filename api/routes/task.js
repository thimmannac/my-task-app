const express = require('express');
const router = express.Router()
const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/task')

router.post('/create', createTask)
router.get('/', getAllTasks)
router.get('/:id', getTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router;