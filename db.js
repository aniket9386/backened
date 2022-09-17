const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/inotebook"
const mongoURI = "mongodb+srv://aniket9386:aniket123@cluster0.cesuuvx.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo; 