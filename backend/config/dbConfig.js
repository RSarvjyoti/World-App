const mongoose = require("mongoose");

require("dotenv").config();

const dburl = process.env.mongodb;

async function connectionToDb(){
    try {
        await mongoose.connect(dburl);
        console.log("connect to DB");
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    connectionToDb
}