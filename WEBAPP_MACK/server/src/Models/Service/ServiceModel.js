const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        maxlength: [30, 'Maximun length is 30 characters']
    },
    details: [{
        field: {
            type: String,
            required: true,
            unique: true,
            maxlength: [30, 'Maximun length is 30 characters']
        },
        value: {
            type: String,
            required: true,
            maxlength: [10, 'Maximun length is 10 characters']
        },
    }]
}, {
    timestamps: true
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;