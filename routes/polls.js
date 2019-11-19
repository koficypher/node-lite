const express = require('express');
const router = express.Router();

//import controller
const Poll = require('../controllers/pollController');



router.get('/', Poll.getPolls);
router.get('/results',Poll.getResults);

module.exports = router;