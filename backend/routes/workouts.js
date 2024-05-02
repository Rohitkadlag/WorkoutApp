const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
    
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id',getWorkout) 
//post
router.post('/', createWorkout)

//delete
router.delete('/:id', deleteWorkout)

//update

router.patch('/:id', updateWorkout)





module.exports = router