const  { User } = require('../models');

const userData = [
	{
		username: 'Xandromos',
		password: 'password123'
	},
	{
		username: 'Leanantino'   ,
		password: 'password456'
	}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
