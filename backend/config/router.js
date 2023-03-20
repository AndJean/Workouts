import express from 'express';
import workouts from '../db/workout.js';


const router = express.Router();

router.get('/workouts', (req, res) => {
    console.log(workouts.find(workout => workout._id === req.query._id))
    res.status(200).json(workouts);
});
router.post('/workouts', (req, res) => {
    const { body } = req;
    console.log(body);
    workouts.push(body);
    res.status(200).json(workouts);
});
router.put('/workouts', ({ body, query }, res) => {
    console.log(body);
    console.log(query);
    let updated_workout = workouts.find(workout => workout._id === query._id);//find the item with the id
    console.log(updated_workout);
    updated_workout = body;//update the item with the new data

    const updated_workouts = workouts.filter(workout => workout._id !== query._id);//filter out the old item
    res.status(200).json([...updated_workouts, workouts]);//return the updated item and the whole list
});
router.delete('/workouts', ({query}, res) => {
    console.log({query});
    res.status(200).json('Workout deleted succesfuly!');
});

export default router;