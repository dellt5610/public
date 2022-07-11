const mocha = require('mocha');
process.env.NODE_ENV = 'test';
require('../../../src/main/js/helpers/dbConnection');
const { Story } = require('../../../src/main/js/model/story.model');

mocha.beforeEach('Remove database for test', async () => {
    await Story.remove({});
});