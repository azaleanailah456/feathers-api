'use strict';

const { type } = require('ramda');
const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {

     const table = queryInterface.describeTable("product")

     if (!table.address_id) {
      await queryInterface.addColumn('product', 'address_id', {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
      });
     }

  },

  async down (queryInterface, Sequelize) {
    const table = queryInterface.describeTable("product")

    if (!table.address_id) {
     await queryInterface.removeColumn('product', 'address_id');    }  
  },
};

