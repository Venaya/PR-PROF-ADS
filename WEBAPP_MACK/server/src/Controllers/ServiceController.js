const Model = require('../Models/Service/ServiceModel');

CREATE = async (req, res, next) => {
    const model = new Model({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    });

    return await model.save()
    .then(() => {
        res.status(200).json({ status: 200, message: 'User Successfully Created'});
        next();
    })
    .catch(error => res.status(400).json({message: error.message}));
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

READALLAUTHORIZED = async (req, res, next) => {
    return await Model.find({status: "AUTHORIZED"})
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

module.exports = { CREATE, READ, READALL, READALLAUTHORIZED, UPDATE, DELETE };