const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Get Path Variable
const envPath = path.resolve(__dirname,"../.env");
dotenv.config({ path:envPath });

// Load Environment Variable
require("dotenv").config();

const connectDB = async () => {
    try{
        const uri = process.env.MONGODB_URI;
        
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            dbName: "CRUD",
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected");
    } catch(error){
        console.error('Mongodb Connection Error:', error.message);
        ProcessingInstruction.exit(1); // Exit Process with failure
    }
}

module.exports = connectDB;