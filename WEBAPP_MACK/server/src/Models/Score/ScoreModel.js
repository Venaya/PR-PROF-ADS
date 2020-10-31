const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
    value: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;