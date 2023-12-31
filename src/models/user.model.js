const Sequelize = require('sequelize');
const db = require("../util/database.js");

const User = db.define("user", {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;
