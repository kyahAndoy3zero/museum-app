const express = require('express')
const { login, signup } = require('../controllers/authController');


const router = express.Router()

router.route('/login').post(login)
router.route('/sign-up').post(signup)


module.exports = router;