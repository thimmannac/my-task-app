const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI;

exports.connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MONGODB CONNECTED');
    } catch (error) {
        console.log(error);
    }
}
