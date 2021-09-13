// start routing
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');

router.use('/', homeRoutes);

module.exports = router;
