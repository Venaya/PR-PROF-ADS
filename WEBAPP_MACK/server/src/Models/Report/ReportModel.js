const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    employee_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    employer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employer',
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: [2000, 'Maximun length is 2000 characters']
    }
});

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;