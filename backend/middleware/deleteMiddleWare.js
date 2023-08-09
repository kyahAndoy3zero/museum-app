const catchAsync = require("../utility/catchAsync");
const Artifact = require('../model/artifactModel')
const fs = require('fs')

const deleteImages = catchAsync(async (req, res, next) => {


    const artifact = await Artifact.findById(req.params.id)

    artifact.images.map((img) => {
        fs.unlink(`backend/public/img/artifacts/${img}`, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    })

    next();
})


const deleteImageCover = catchAsync(async (req, res, next) => {

    const artifact = await Artifact.findById(req.params.id)

    if (artifact.imageCover) {
        fs.unlink(`backend/public/img/covers/${artifact.imageCover}`, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    }

    next();
})


const deleteSrcImg = catchAsync(async (req, res, next) => {

    const artifact = await Artifact.findById(req.params.id)

    artifact.images.map((img) => {
        fs.unlink(`backend/public/img/src_img/artifacts/${img}`, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    })

    if (artifact.imageCover) {
        fs.unlink(`backend/public/img/src_img/covers/${artifact.imageCover}`, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    }

    next();
})


module.exports = {
    deleteImages,
    deleteImageCover,
    deleteSrcImg
}

