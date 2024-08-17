
const mongoose = require('mongoose');


async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDb;