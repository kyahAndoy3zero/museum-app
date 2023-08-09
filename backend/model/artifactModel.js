const mongoose = require('mongoose')
const slugify = require('slugify')


const artifactsSchema = new mongoose.Schema({

    objectIdNo: {
        type: String,
        required: [true, 'An object must have an Object ID No.'],
        trim: true,
        unique: true,
    },
    objectName: {
        type: String,
        required: [true, 'An object must have a name.'],
        trim: true
    },
    location: {
        type: String,
        required: [true, 'An object must have a location'],
    },
    month: {
        type: String
    },
    day: {
        type: Number
    },

    byYearAround: {
        type: Number,
        validate: {
            validator: function (el) {
                return /^\d{4}$/.test(el);
            },
            message: 'Value must be a four-digit number!'
        }
    },

    byCentury: {
        type: Number,
        validate: {
            validator: function (el) {
                return /^\d{2}$/.test(el);
            },
            message: 'Value must be a two-digit number!'
        }
    },

    specificYear: {
        type: Number,
        validate: {
            validator: function (el) {
                return /^\d{4}$/.test(el);
            },
            message: 'Value must be a four-digit number!'
        }
    },
    images: [String],
    imageCover: {
        type: String,
    },

    yearCollected: {
        type: Number,
    },
    additionalDetails: {
        type: String,
        trim: true
    },
    slug: String
});



artifactsSchema.pre('save', function (next) {
    this.slug = slugify(this.objectName, { lower: true })
    next();
});

artifactsSchema.pre('save', function (next) {
    const year = this.objectIdNo.substring(0, 4);
    this.yearCollected = parseInt(year);
    next();
});


const Artifact = mongoose.model('Artifact', artifactsSchema)
module.exports = Artifact;