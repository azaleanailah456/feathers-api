'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('Address', {
      jalan: {
        type:Sequelize.DataTypes.STRING
      },
      rt:{
        type:Sequelize.DataTypes.STRING
      },
      rw:{
        type:Sequelize.DataTypes.STRING
      },
      kota:{
        type:Sequelize.DataTypes.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Address');
  }
};
