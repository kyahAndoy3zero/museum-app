const mongoose = require('mongoose')


const DB = "mongodb://127.0.0.1:27017/musuem-app"

mongoose.set('strictQuery', true)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
