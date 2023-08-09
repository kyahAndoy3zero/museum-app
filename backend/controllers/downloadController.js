const Artifact = require('../model/artifactModel');
const catchAsync = require('../utility/catchAsync');
const AppError = require('./../utility/appError');
const fs = require('fs');
const path = require('path');
const excel = require('exceljs');
const { Transform } = require('stream');

const downloadArtifact = catchAsync(async (req, res, next) => {
    const file = req.params.file;
    const yearCollected = file.split('.')[0];
    const folderPath = path.resolve(__dirname, '..', 'downloads');
    const filePath = path.join(folderPath, `${yearCollected}.xlsx`);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Artifacts');

    // Set page layout to landscape
    worksheet.pageSetup.orientation = 'landscape';

    worksheet.columns = [
        { header: 'objectIdNo', key: 'objectIdNo', width: 15 },
        { header: 'objectName', key: 'objectName', width: 20 },
        { header: 'Location', key: 'location', width: 15 },
        { header: 'Description', key: 'description', width: 30 },
        { header: 'Date', key: 'date', width: 15 },
        { header: 'Dimensions', key: 'dimensions', width: 15 },
    ];

    // Set cell alignment and wrap text
    worksheet.columns.forEach((column) => {
        column.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        column.headerFont = { bold: true };
        column.headerPadding = { top: 5, bottom: 5 };
    });

    // Add borders to headers
    const headerBorder = {
        style: 'thin',
        color: { argb: 'FF000000' },
    };
    worksheet.getRow(1).eachCell((cell) => {
        cell.border = {
            top: headerBorder,
            left: headerBorder,
            bottom: headerBorder,
            right: headerBorder,
        };
    });

    // Add data and borders to cells
    const dataBorder = {
        style: 'thin',
        color: { argb: 'FF000000' },
    };

    const artifacts = await Artifact.find(
        { yearCollected },
        { _id: 0, __v: 0, slug: 0, images: 0 }
    );

    const imagePromises = artifacts.map((artifact) => {
        return new Promise((resolve) => {
            const row = worksheet.addRow({
                objectIdNo: artifact.objectIdNo,
                objectName: artifact.objectName,
                location: artifact.location,
                date: artifact.byYearAround || artifact.byCentury || artifact.specificYear,
                dimensions: artifact.additionalDetails,
            });

            if (artifact.imageCover) {
                const currentDir = __dirname;
                const srcDir = path.join(currentDir, '..', `public/img/src_img/covers/${artifact.imageCover}`);

                const image = workbook.addImage({
                    filename: srcDir,
                    extension: 'jpeg',
                });

                const column = worksheet.getColumn(4);

                const desiredImageWidth = 200;
                const desiredImageHeight = 200;

                const aspectRatio = image.width / image.height;
                const calculatedImageWidth = desiredImageHeight * aspectRatio;

                if (calculatedImageWidth > column.width) {
                    column.width = calculatedImageWidth;
                }

                worksheet.addImage(image, {
                    tl: { col: 3, row: row.number - 1 },
                    ext: { width: desiredImageWidth, height: desiredImageHeight },
                });
            }

            row.eachCell((cell) => {
                cell.border = {
                    top: dataBorder,
                    left: dataBorder,
                    bottom: dataBorder,
                    right: dataBorder,
                };
            });

            resolve();
        });
    });

    await Promise.all(imagePromises);

    const tempFilePath = path.join(folderPath, `${yearCollected}.xlsx`);

    await workbook.xlsx.writeFile(tempFilePath);
    const fileStream = fs.createReadStream(tempFilePath);

    const transformer = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk);
            callback();
        }
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${file}"`);
    res.flushHeaders();

    fileStream.pipe(transformer).pipe(res);

    fileStream.on('end', () => {
        // Clean up the temporary file after it is downloaded
        fs.unlinkSync(tempFilePath);
    });
});

module.exports = {
    downloadArtifact,
};