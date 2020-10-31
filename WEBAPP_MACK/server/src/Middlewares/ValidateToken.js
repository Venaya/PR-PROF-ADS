const jwt = require('../Security/Token');

validateToken = (req, res, next) => {
    let token = req.cookies.token || '';

    try {
        if (!token) {
            res.cleanCookie('token');
            res.status(401).json({ status: 401, message: 'Not Authorized - Token' });           
        }

        return jwt.verifyToken(token)
        .then(result => {
            if(!result) return res.status(400).json({status: 400, message: 'Token Invalid'});

            res.locals.user = {
                id: result.userID
            };

            next();
        })
        .catch(error => 
            {
                res.status(400).json({message: error.message});
                res.cleanCookie('token');
            });       
    } catch (e) {
        return res.status(500).json(e.message);
    }
};

module.exports = { validateToken };