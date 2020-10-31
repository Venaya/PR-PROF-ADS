const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    service_details: {
        type: String,
        required: true,
        max: [2000, 'Maximun length is 2000 characters']        
    },
    value: {
        type: String,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget;