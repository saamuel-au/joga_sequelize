'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ArticleTags', [{
        articleId: 4,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('ArticleTags', [{
      articleId: 4,
      tagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      }], {})
    await queryInterface.bulkInsert('ArticleTags', [{
      articleId: 5,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('ArticleTags', [{
      articleId: 5,
      tagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('ArticleTags', [{
      articleId: 6,
      tagId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('ArticleTags', [{
      articleId: 6,
      tagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    await queryInterface.bulkInsert('ArticleTags', [{
      articleId: 6,
      tagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags')
  }
};
