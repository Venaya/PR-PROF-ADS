const Model = require('../Models/User/UserModel');

CREATE = async (req, res, next) => {
    console.log('BODY: ' + JSON.stringify(req.body));
    const model = new Model({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        data: {
            name: req.body.name,
            surname: req.body.surname,
            birthday: req.body.birthday,
            contacts: req.body.contacts,
        },
        address: {
            state: req.body.state,
            city: req.body.city,
            zipcode: req.body.zipcode,
            street: req.body.street,
            number: req.body.number
        }
    });

    return await model.save()
    .then(() => {       
        res.status(200).json({ status: 200, message: 'User Successfully Created'});
        next();
    })
    .catch(error => 
        {
            console.log(error);
            res.status(400).json({message: error.message});
        });
};

READ = async (req, res, next) => {
    const { name } = req.body;

    return await Model.findOne({name})
    .then(result => {
        res.status(200).json({status: 200, data: result, message: 'User Successfully Readed'});
        next();
    })
    .catch(error => res.status(400).json({message: error.message}));
};

READALL = async (req, res, next) => {
    return await Model.find({})
    .then(result => {
        res.status(200).json({status: 200, data: result, message: 'User Successfully Readed'});
        next();
    })
    .catch(error => res.status(400).json({message: error.message}))
};

UPDATE = async (req, res, next) => {
    return await Model.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    .then(() => {
        res.status(200).json({status: 200, message: 'User Successfully Updated'});
        next();
    })
    .catch(error => res.status(400).json({message: error.message}));
};

DELETE = async (req, res, next) => {
    return await Model.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).json({status: 200, message: 'User Successfully Deleted'});
        next();
    })
    .catch(error => res.status(400).json({message: error.message}));
};

module.exports = { CREATE, READ, READALL, UPDATE, DELETE };