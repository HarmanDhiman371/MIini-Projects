const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authroutes = require('./routes/authroute.js')
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authroutes);
app.use('/api/auth', authroutes);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongo db connected");
    app.listen(process.env.PORT , ()=>{
        console.log(`Server running on ${process.env.PORT}`)
    });
})