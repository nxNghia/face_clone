'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupMembers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      groupMembers: {
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
    await queryInterface.addColumn('GroupMembers', 'groupId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'GroupChats',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
    await queryInterface.addColumn('GroupMembers', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupMembers')
    await queryInterface.removeColumn('GroupMembers', 'groupId')
    await queryInterface.removeColumn('GroupMembers', 'userId')
  },
}
