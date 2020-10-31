const Model = require('../Models/Menu/MenuModel');

CREATE = async (req, res, next) => {
    const menu = new Model({
        name: req.body.name,
        
    });

    try{
        return await menu.save();
    }catch(e){

    }
}