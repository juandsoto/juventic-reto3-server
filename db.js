const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('juventic', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

async function connection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connection();
module.exports = sequelize;
