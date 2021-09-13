const router = require('express').Router();

const userRoutes = require('./usercontrollers');
const postRoutes = require('./postcontrollers');
const commentRoutes = require('./commentscontroller');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;