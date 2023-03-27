import mongoose from 'mongoose';

const WorkoutsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    set: {
        type: Number,
        default: 0,
    },
    reps: {
        type: Number,
        default: 0,
    },
    day: {
        type: Date,
        default: Monday,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Workouts = mongoose.model('Workouts', WorkoutsSchema);