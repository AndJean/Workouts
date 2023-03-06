import express from 'express';

const router = express.Router();

router.get('/workouts', (req, res) => {
    res.status(200).json('All workouts!');
});
router.post('/workouts', (req, res)=>{
    res.status(200).json('New workout added!');
});
router.put('/workouts', (req, res)=>{
    res.status(200).json('Workout updated!');
});
router.delete('/workouts', (req, res)=>{
    res.status(200).json('Workout deleted!');
});

export default router;