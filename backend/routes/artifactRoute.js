const express = require('express');
const router = express.Router();
const { getAllArtifacts, getArtifact, createArtifact, updateArtifact, deleteArtifact, getArtifactStats } = require('../controllers/artifactControllers');
const { protect, restricTo } = require('../controllers/authController');
const { resizeArtifactImages, uploadArtifactImages } = require('../middleware/uploadArtifactMiddleware')
const { deleteImages, deleteImageCover, deleteSrcImg } = require('../middleware/deleteMiddleWare')
const { downloadArtifact } = require('../controllers/downloadController')


router.use(protect);
router.use(restricTo('admin'))

router.route('/artifacts-overview')
    .get(getArtifactStats)

router.route('/')
    .get(getAllArtifacts)
    .post(createArtifact)

router.route('/:id')
    .get(getArtifact)
    .patch(uploadArtifactImages, resizeArtifactImages, updateArtifact)
    .delete(deleteImages, deleteImageCover, deleteSrcImg, deleteArtifact)

router.route('/download/:file(*)').get(downloadArtifact)

module.exports = router