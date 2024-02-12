const User = require('../models/user');
const crypto = require('crypto');

const create = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success:false,
                responsemessage:"User Already Existing",
            })
        }

        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return res.status(200).json({
            success: true,
            responsemessage: "Creation Successful",
        });
    } catch (error) {
        console.error('Error Creating User: ', error);
        return res.status(500).json({
            success: false,
            responsemessage: "Internal Server Error due to some changes",
        });
    }
};

const read = async (req, res) => {
    const { email } = req.body;
    try {

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            res.status(400).json({
                "success": false,
                "responsemessage": "User Not Found"
            });
        }

        return res.status(200).json({
            "success": true,
            "responsemesage": "Read Successful",
            "responsedata": existingUser,
        });
    } catch (error) {
        console.error('Error Reading User:', error);
        return res.status(500).json({
            success: false,
            responsemessage: "Error Reading User"
        })
    }
};

const readall = async (req, res) => {
    try {
        const existingUser = await User.find();

        if (!existingUser) {
            res.status(400).json({
                "success": false,
                "responsemessage": "User Not Found"
            });
        }

        return res.status(200).json({
            "success": true,
            "responsemesage": "Read Successful",
            "responsedata": existingUser,
        });
    } catch (error) {
        console.error('Error Reading User:', error);
        return res.status(500).json({
            success: false,
            responsemessge: "Error REading User",
        });
    }
};

module.exports = {
    create,
    read,
    readall,
};