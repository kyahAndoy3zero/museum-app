const path = require('path');
const express = require('express');
const morgan = require('morgan')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const AppError = require('./utility/appError');
const globalError = require('./controllers/errorController')



const app = express();

// Implement CORS
app.use(cors());



app.options('*', cors(
    {
        origin: 'https://localhost:3000',
        credentials: true
    }
));

//Limiting same IP to do request greater than 100 in 1 hour
const limiter = rateLimit({
    max: 400,
    windowMs: 60 * 60 * 100,
    message: 'Too many request from this IP, please try again in an hour!'
})

//Server static files
app.use('/public', express.static(path.join(__dirname, 'public')));


// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api', limiter)

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss())

// Prevent parameter pollution

app.use(hpp({
    whitelist: [
        'byYearAround',
        'byCentury',
        'specificYear',
        'yearCollected',
        'objectIdNo'
    ]
}))

app.use(compression());


//Routes
app.use('/api/v1/artifact', require('./routes/artifactRoute'))
app.use('/api/v1/user', require('./routes/userRoute'))



app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalError)

module.exports = app;