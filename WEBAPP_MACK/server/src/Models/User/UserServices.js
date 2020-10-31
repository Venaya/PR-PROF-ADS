const mongoose = require('mongoose');

const UserServicesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userservices_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserServices',
        required: true
    }]   
}, {
    timestamps: true
});

const Service = mongoose.model('UserServices', UserServicesSchema);

module.exports = Service;