const express = require('express');
const router = express.Router();

const { create,read,readall } = require('../controllers/CRUD');

router.post('/create',create);
router.post('/reademail',read);
router.get('/readall',readall);

module.exports = router;