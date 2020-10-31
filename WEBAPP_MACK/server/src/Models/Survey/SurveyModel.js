const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    employee_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    employer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: [2000, 'Maximun length is 2000 characters']
    }
}, {
    timestamps: true
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;