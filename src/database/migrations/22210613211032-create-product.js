'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL
      },
      image: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.TEXT
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'brands',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      sizeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sizes',
          key: 'id'
        }
      },
      genderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genders',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};