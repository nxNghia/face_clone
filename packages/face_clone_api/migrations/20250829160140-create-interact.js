'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Interacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      interactId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
    await queryInterface.addColumn('Interacts', 'author', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    })
    await queryInterface.addColumn('Interacts', 'toContent', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Contents',
        key: 'id',
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Interacts')
  },
}
