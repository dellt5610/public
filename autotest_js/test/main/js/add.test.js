const {add, addCallback, addPromise} = require('../../../src/main/js/add');
const assert = require('assert');

describe("test add function", () => {
    it("can add 02 numbers", ()=> {
        const result = add(1,2);
        assert.equal(result,3);
    });
});

describe('test addCallback function', () => {
    it("can add 02 numbers", (done) => {
        addCallback(1,2, (error, result) => {
            assert.equal(error, null);
            assert.equal(result, 3);
            done();
        });
    });
});

describe("test addPromise function", () => {
    it("can add 02 numbers", (done) => {
        addPromise(1, 2)
        .then(result => assert.equal(result, 3))
        .then(() => done());
    });
});