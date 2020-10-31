const mongoose = require('mongoose');

const ServiceRequestSchema = new mongoose.Schema({
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    employer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});

const ServiceRequest = mongoose.model('ServiceRequest', ServiceRequestSchema);

module.exports = ServiceRequest;