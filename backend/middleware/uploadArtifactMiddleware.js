const multer = require('multer')
const sharp = require('sharp')
const AppError = require('../utility/appError')
const catchAsync = require('../utility/catchAsync')


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

const uploadArtifactImages = upload.fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 3 }
]);

const resizeArtifactImages = catchAsync(async (req, res, next) => {


    if (req.files.imageCover) {
        // 1) Cover image
        req.body.imageCover = `artifact-${req.params.id}-cover.jpeg`;

        await sharp(req.files.imageCover[0].buffer)
            .resize(500, 300)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`backend/public/img/covers/${req.body.imageCover}`);

        await sharp(req.files.imageCover[0].buffer)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`backend/public/img/src_img/covers/${req.body.imageCover}`);
    }

    if (req.files.images) {
        req.body.images = [];

        // 2) Images
        await Promise.all(
            req.files.images.map(async (file, i) => {
                const filename = `artifact-${req.params.id}-${i + 1}.jpeg`;

                await sharp(file.buffer)
                    .resize(2000, 1333)
                    .toFormat('jpeg')
                    .jpeg({ quality: 90 })
                    .toFile(`backend/public/img/artifacts/${filename}`);


                await sharp(file.buffer)
                    .toFormat('jpeg')
                    .jpeg({ quality: 90 })
                    .toFile(`backend/public/img/src_img/artifacts/${filename}`);

                req.body.images.push(filename);
            })
        );
    }

    next();
});

module.exports = {
    resizeArtifactImages,
    uploadArtifactImages
}

