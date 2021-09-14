const router = require('express').Router();
const { Post, User, Comments } = require('../../models');
const sequelize = require('../../config/connection');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'date_created',
            'user_id'
        ],
      order: [['date_created', 'DESC']],
      include: [
        {
          model: Comments,
          attributes: ['id', 'content', 'date_created', 'user_id', 'post_id'],
          include: {
            model: User,
            attributes: ['name', 'email']
          }
        },
        {
          model: User,
          attributes: ['name', 'email']
        },
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'content',
        'date_created',
        'user_id'
      ],
      include: [
        {
          model: User,
          attributes: ['name', 'email']
        },
        {
          model: Comments,
          attributes: ['id', 'content', 'date_created', 'user_id', 'post_id'],
          include: {
            model: User,
            attributes: ['name', 'email']
          }
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
  console.log(req.body)
    Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
    Post.update({
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
