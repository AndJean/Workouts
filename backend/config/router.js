import express from 'express';

const router = express.Router();

router.get('/workouts', (req, res) => {
    res.status(200).json('All workouts!');
});

export default router;