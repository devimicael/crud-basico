const User = require("../models/user.model.js");

exports.getUsers = (req, res) => {
    User.findAll().then(users => {
        res.status(200).json({users:users});
    }).catch(err => console.log(err));
};

exports.getUser =(req, res) =>{
    const userID = req.params.userId;
    User.findByPk(userID).then(user => {
        if(!user) return res.status(404).json({message:"User not found!!"});

        res.status(200).json({user:user});
    }).catch(err => console.log(err));
};


exports.createUser = (req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    User.create({name: name, email: email}).then(result => {
        console.log("Created User");
        res.status(200).json({
            message: "User created successfully!",
            user:result
        });
    }).catch(err => console.log(err));
};

exports.updateUser = (req, res) => {
    const userID = req.params.userId;
    const updateName = req.body.name;
    const updateEmail = req.body.email;
    User.findByPk(userID).then(user => {
        if(!user) return res.status(404).json({message:"user not found!"});

        user.name = updateName;
        user.email = updateEmail;
        return user.save();
    }).then(result => {
        res.status(200).json({message:"User updated!", user:result});
    }).catch(err => console.log(err));
};

exports.deleteUser = (req, res) => {
    const userID = req.params.userId;
    User.findByPk(userID).then(user => {
        if(!user) return res.status(404).json({message:"User not found!"});

        return User.destroy({
            where: {
                id:userID
            }
        });
    }).then(result => {
        res.status(200).json({message:"User deleted!"});
    }).catch(err => console.log(err));
};