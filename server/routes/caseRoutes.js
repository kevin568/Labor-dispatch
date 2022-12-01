const express = require('express');
const caseController = require('../controllers/caseController');

const router = express.Router();

router.route('/').get(caseController.getAllPost).post(caseController.createPost);

router.route('/:id').get(caseController.getPost);

module.exports = router;