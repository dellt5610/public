const mocha = require('mocha');
const request = require('supertest');
const assert = require('assert');
const { app } = require('../../../../../src/main/js/app');
const { Story } = require('../../../../../src/main/js/model/story.model');

mocha.describe.only('Test POST /story', () => {
    console.log('assert: ' + assert);
    console.log('request: ' + request);
    console.log('Story: ' + Story);
    mocha.it('Can create new story', async () => {
        const response = await request(app).post('/story').send({"content":"Sofia"});
        const {success, story} = response.body;
        assert.equal(success, true);
        assert.equal(story.content, "Sofia");
        const storyDb = await Story.findById(story._id);
        assert.equal(storyDb.content, 'Sofia');
        assert.equal(storyDb._id, story._id);
    });
});