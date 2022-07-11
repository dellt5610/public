const {app} = require('../../../src/main/js/add_via_http');
const request = require('supertest');
const assert = require('assert');

describe("test GET /add/:a/:b",() => {
    it("can add 02 numbers",(done) => {
        request(app).get('/add/1/2')
        .then(response => {
            const {success, result} = response.body;
            assert.equal(success, true);
            assert.equal(result, 3);
            done();
        });
    });

    it("can add 02 numbers with async/await", async () => {
        const response = await request(app).get('/add/1/2');
        const {success, result} = response.body;
        assert.equal(success, true);
        assert.equal(result, 3);
    });
});