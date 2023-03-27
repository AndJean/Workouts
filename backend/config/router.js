import express from 'express';


const router = express.Router();

router.get('/workouts', (req, res) => {
  
    res.status(200).json(workouts);
});
router.post('/workouts', (req, res) => {

    res.status(200).json(workouts);
});
router.put('/workouts', ({ body, query }, res) => {
  
});
router.delete('/workouts', ({query}, res) => {
   
    res.status(200).json('Workout deleted succesfuly!');
});

export default router;