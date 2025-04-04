var jwt = require('jsonwebtoken');
const JWT_SECRET = 'coolminiproject';

const fetchuser = (req, res, next) => {

    //  Get the user from jwt token and add id to req object 
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "please authinticate using valid token" })
    }



    try {
        const data = jwt.verify(token,WT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {

        res.status(401).send({ error: "please authinticate using valid token" })

    }


}

module.exports = fetchuser;
