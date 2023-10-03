const express = require("express");
const sequelize = require("./src/util/database.js");

const app = express();
app.use(express.json());

app.get("/", function(req, res){
    res.send("Hello World");
});

app.use('/users', require("./src/routes/users.js"));

sequelize.sync().then(result => {
    console.log("Databse connected");
    app.listen(3000, () => console.log("port:3000"));
}).catch(err => console.log(err));
