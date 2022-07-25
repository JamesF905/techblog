const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const seedUsers = require('./user-seeds.json');
const seedBlogs = require('./blog-seeds.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });  
    const users = await User.bulkCreate(seedUsers, {
      individualHooks: true,
      returning: true,
    });
  
    for (const blog of seedBlogs) {
      await Blog.create({
        ...blog,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedAll();