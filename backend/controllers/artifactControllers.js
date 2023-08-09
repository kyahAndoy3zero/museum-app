const Artifact = require('../model/artifactModel')
const APIFeatures = require('../utility/apiFeatures')
const catchAsync = require('../utility/catchAsync')
const AppError = require('./../utility/appError')



//Get All Artifacts
const getAllArtifacts = catchAsync(async (req, res, next) => {


    const page = parseInt(req.query.page)
    const limit = 20

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const pages = {}


    if (endIndex < await Artifact.countDocuments().exec()) {
        pages.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0) {
        pages.previous = {
            page: page - 1,
            limit: limit
        }
    }

    //Create the query
    const artifactQuery = new APIFeatures(Artifact.find().limit(limit).skip(startIndex), req.query).filter().sort().limit()


    //Execute the query
    const preQuery = await artifactQuery.query;
    const artifacts = preQuery;

    res.status(200).json({
        status: 'success',
        nextPage: pages.next,
        previousPage: pages.previous,
        data: {
            artifacts,
        },
    });

})



//Get Artifact 
const getArtifact = catchAsync(async (req, res, next) => {

    const artifacts = await Artifact.findById(req.params.id)

    if (!artifacts) {
        return next(new AppError('No artifact found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            artifacts
        }
    });
})


//Create Artifact
const createArtifact = catchAsync(async (req, res, next) => {

    //if use to formdata this will not work, only json
    const newArtifact = await Artifact.create(req.body);

    res.status(200).json({
        status: 'success',
        data: {
            artifact: newArtifact
        }
    })
})

//Update Artifact
const updateArtifact = catchAsync(async (req, res, next) => {


    const artifacts = await Artifact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })


    if (!artifacts) {
        return next(new AppError('No artifact found with that ID', 404));
    }



    res.status(200).json({
        status: 'success',
        data: {
            artifacts
        }
    });

})

//Delete Artifact
const deleteArtifact = catchAsync(async (req, res, next) => {

    const artifact = await Artifact.findByIdAndDelete(req.params.id);

    if (!artifact) {
        return next(new AppError('No artifact found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });

})

//Get Artifacts Overview
const getArtifactStats = catchAsync(async (req, res, next) => {
    const query = new APIFeatures(Artifact.aggregate([
        {
            $group: {
                _id: "$yearCollected",
                yearAround: { $sum: { $cond: [{ $ifNull: ["$byYearAround", false] }, 1, 0] } },
                century: { $sum: { $cond: [{ $ifNull: ["$byCentury", false] }, 1, 0] } },
                specificYear: { $sum: { $cond: [{ $ifNull: ["$specificYear", false] }, 1, 0] } },
                artifacts: { $sum: 1 }
            },
        },
        {
            $project: {
                _id: 0,
                catalogue_year: "$_id",
                yearAround: 1,
                century: 1,
                specificYear: 1,
                artifacts: 1,
            }
        }
    ]), req.query).sort()

    const overviews = await query.query;

    res.status(200).json({
        status: 'success',
        data: {
            overviews
        }
    });
})

module.exports = {
    getAllArtifacts,
    getArtifact,
    createArtifact,
    updateArtifact,
    deleteArtifact,
    getArtifactStats,
}