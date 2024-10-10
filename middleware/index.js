const client = require('../dbconnection');

const checkAuthentication = async (req, res, next) => {
    const test = await req.headers.authenticated;
    console.log(test)
    next();
}

const userShouldBeExistInDatabase = async (req, res, next) => {
    const uid = await req.params.id;
    // console.log(uid);
    const result = await client.query('select * from users where id = ' + uid);
    if (result.rows.length < 1) {
        return res.send("User is not exist in our db");
    }
    next();
}

const ChangeMakerisOwner = async (req,res,next) => {
    const io = await req.headers.owns;
    console.log(io)
    // const test = await req.headers.authenticated;
    // console.log(test)
    // console.log("hii")
    if(!io)
    {
        return res.send("Change Maker is not an Owner")
    }
    next()
}


module.exports = {
    checkAuthentication,
    userShouldBeExistInDatabase,
    ChangeMakerisOwner
};