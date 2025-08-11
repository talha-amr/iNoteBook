const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((e) => console.log("❌ Connection error:", e.message));
};
module.exports = connectToMongo;