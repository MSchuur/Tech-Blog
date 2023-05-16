const  router = require('express').Router();
const { User, Comment, Post} = require('../models');

router.get('/', async (req, res) => {
	try {
		const blogData = await Post.findAll ({
			attributes: [
				'id',
				'title',
				'content'
			],
			include: [{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id',],
				include: {
					model: User,
					attributes: ['username']
				}
			},
			{
				model: User,
				attributes: ['username']
			}],
		});

		const posts = blogData.map(post => post.get({ plain: true }));
		res.render('homepage', { posts, loggedIn: req.session.loggedIn });
        
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;