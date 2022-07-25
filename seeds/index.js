const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');

const seedAll = async () => {
    //sync to database
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    //Seed all the models

    await seedUsers();
    console.log('\n----- Users SEEDED -----\n');

    await seedBlogs();
    console.log('\n----- Blogs SEEDED -----\n');

    //exit
    process.exit(0);
};

seedAll();