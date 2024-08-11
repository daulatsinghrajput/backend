const User = require("../models/user.models.js");

exports.home = (req, res) => {
    res.send("Hello world");
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Check if name or email is missing
        if (!name || !email) {
            throw new Error("Name and Email are required");
        }

        // Check if user with the given email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("user already exist")
        }

        // Create the new user
        const user = await User.create({
            name,
            email,
        });

        // Send response for successful creation
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getUsers = async(req, res) => {
    try{
        const user = await User.find({})
        res.status(200).json({
            success:true,
            user,
            message: "thankyou"
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.deleteUser = async(req, res) => {
    try{
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "user deleted successfully"
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });

}
}

exports.editUser = async(req, res) => {
    try{
        // kya find kerna hai fir kya update kerna hai req ki body se lelo
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message: "user updated successfully"
        })

    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}
