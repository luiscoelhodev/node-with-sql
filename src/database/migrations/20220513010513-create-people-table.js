'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('people', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false, 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ssn: {
        type: Sequelize.STRING(9),
        allowNull: false,
        unique: true,
      },
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('people');
  }
};
