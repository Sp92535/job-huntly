const app = require('./app'); // Import the app from app.js
const connectDB = require('./config/db')
require('dotenv').config();

connectDB();

const port = process.env.SERVER_PORT || 5000;
app.listen(port,()=>{
    console.log(`APP RUNNIG ON PORT ${port}...`);
})