const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Catalogue = require('../../model/artifactModel');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//     '<PASSWORD>',
//     process.env.DATABASE_PASSWORD
// );

const DB = process.env.LOCAL_DATABASE


mongoose.set("strictQuery", false)
mongoose
    .connect(DB)
    .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const catalogue = JSON.parse(
    fs.readFileSync(`${__dirname}/artifacts-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Catalogue.create(catalogue);
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
        await Catalogue.deleteMany();
        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
