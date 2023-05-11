const  { User } = require('../models');

const userData = [
	{
		username: 'Xandromos',
		password: 'password123'
	},
	{
		usename: 'Leanantino'   ,
		password: 'password456'
	}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
