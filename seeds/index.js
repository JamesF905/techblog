const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    //sync to database
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    //Seed all the models

    await seedUsers();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    //exit
    process.exit(0);
};

seedAll();