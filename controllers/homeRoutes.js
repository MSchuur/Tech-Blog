const  router = require('express').Router();
const { User, Comment, Post} = require('../models');

router.get('/', async (req, res) => {
	try {
		const blogData = await Post.findAll ({
			include: [{
				model: Comment,
				attributes: ['id', 'conmmet_text', 'post_id', 'created_at'],
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