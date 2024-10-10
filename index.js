const express = require('express');
const app = express();
require('dotenv').config();
const client = require('./dbconnection')
const userService = require("./services/UserService");
const middleware = require("./middleware/index");
// const {Client} = require('pg')
const PORT = process.env.PORT || 3000;
// Define routes and middleware here
// ...

app.use(express.json())


app.get("/user", middleware.checkAuthentication, userService.getAllUser)


app.post("/create-user",middleware.ChangeMakerisOwner,userService.createUser)


app.get("/user/:id", middleware.userShouldBeExistInDatabase, userService.getUserById)


app.put("/updateuser/:id", middleware.ChangeMakerisOwner,userService.UpdateUserbyId);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post("/test", (req, res, next) => {
    res.send("OK");
})
