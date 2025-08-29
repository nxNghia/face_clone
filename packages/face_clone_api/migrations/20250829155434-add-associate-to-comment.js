'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Comments', 'belongTo', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Posts',
        key: 'id',
      },
    })
    await queryInterface.addColumn('Comments', 'author', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    })
    await queryInterface.addColumn('Comments', 'post', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Posts',
        key: 'id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Comments', 'belongTo')
    await queryInterface.removeColumn('Comments', 'author')
    await queryInterface.removeColumn('Comments', 'post')
  },
}
