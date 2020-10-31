const mongoose = require('mongoose');
const scrypt = require('../../Security/Scrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,        
        required: true,
        trim: true,
        lowercase: true,       
        minlength: [3, 'Minimun length is 3 characters'],
        maxlength: [20, 'Maximun length is 3 characters']
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        minlength: [10, 'Minimun length is 10 characters'],
        maxlength: [40, 'Maximun length is 40 characters']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        //select: false,
        minlength: [6, 'Minimun length is 6 characters']
    },
    role: {
        type: String,
        enum: ['EMPLOYER', 'EMPLOYEE', 'ADMIN'],
        required: true
    },
    status: {
        type: String,
        enum: ['AWAITING', 'AUTHORIZED'],
        required: true,
        default: "AWAITING"
    },
    data: {
        name: {
            type: String,
            unique: true,        
            required: true,
            uppercase: true,
            minlength: [3, 'Minimun length is 3 characters'],
            maxlength: [20, 'Maximun length is 20 characters']
        },
        surname: {
            type: String,
            unique: true,
            required: true,
            uppercase: true,
            maxlength: [40, 'Maximun length is 40 characters']
        },
        birthday:{
            type: Date,
            min: '1900-01-01',
            max: Date.now()
        },
        contacts: [{
            type: String,
            minlength: [12, 'Minimun length is 12 characters'],
            maxlength: [20, 'Maximun length is 20 characters']
        }],
    }
},{
    timestamps: true,
});

UserSchema.pre('save', async function(next)
{
    //hash password
    if(!this.isModified("password")){
        next();  
    }

    await scrypt.hash(this.password)
        .then(hashed => {
            this.password = hashed;
            next();
        })
        .catch(error => next(error));
});

const User = mongoose.model('User', UserSchema);

module.exports = User;