const dotenv = require('dotenv')
const colors = require('colors')

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' })


const app = require('./backend/app')
const db = require('./backend/config/db')

db();

const port = process.env.PORT || 8000;


const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`.magenta.underline);
})


process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});


