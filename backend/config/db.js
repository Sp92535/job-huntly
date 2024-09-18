const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () =>{
    try {

        console.log(`CONNECTING TO DATABASE....`);
        await mongoose.connect(process.env.DB_LOCAL);
        console.log(`CONNECTED SUCCESSFULLY 👺`);
    
    } catch (err) {
    
        console.log(`CONNECTION FAILED 💀 ${err}`);
        process.exit(1);
    }
}
module.exports  = connectDB;