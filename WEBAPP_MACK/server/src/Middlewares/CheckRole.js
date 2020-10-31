//@params Array_String
role = (roles) => {
    return async (req, res, next) => {
        try {
           
        } catch (e) {
            res.status(400).json(e.message);
            return;
        }
    };
}

module.exports = { role };