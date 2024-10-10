const client = require('../dbconnection');

const getAllUser = async (req, res, next) => {
    try{
        const result = await client.query('select * from users');
        res.status(200).json(result.rows);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'Failed to fetch data'})
    }
}

const getUserById = async (req, res, next) => {
        const uid = await req.params.id;
        console.log(uid);
        try {
            const result = await client.query(`SELECT * from users where id = ${uid}`);
            if(result.rows.length === 0)
            {
                return res.status(200).json({result : "no such user found"});
            }
            else{
                return res.status(200).json(result.rows[0])
            }
        } catch (error) {
            res.status(500).json({error: "Failed to fetch"});
        }
};

const createUser = async (req,res,next) => {
    try{
        const name = req.body.name;
        const cls = req.body.cls;
        const rn = req.body.rn;
        const si = req.body.si;
        console.log(name)
        const query = `INSERT INTO Users (student_name, class, roll_no, school_id) 
        VALUES ('${name}', '${cls}' , ${rn}, ${si})`;
        console.log(query);
        const result = await client.query(query);
        res.status(201).json(result.rows[0]);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'Failed to fetch data'})
    }
    // next();
}

const UpdateUserbyId = async (req,res,next) => {
    const uid = await req.parmas.id;
    // const uid = u.id;
    console.log(uid)
    const {name,cls,rn,si} = req.body;
    console.log(name);
    try {
        const result = await client.query(`Update users set student_name = '${name}',class='${cls}',roll_no = ${rn},school_id = ${si} where id = ${uid}`);
        if(result.rows.length === 0)
        {
            return res.status(404).json({error: "user not found"});
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Failed to update the user"});
    }
}

module.exports = {
getUserById,
getAllUser,
createUser,
UpdateUserbyId
};