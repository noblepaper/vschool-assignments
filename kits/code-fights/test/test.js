var chai = require("chai");
var assert = chai.assert;

var almostIncreasingSequence = require("../arcade.js");

describe("Can only remove numbers to get strictly increasing sequence", function () {

    it("should tell if you can only remove characters to get a strictly increasing sequence", function () {
        assert.isFalse(almostIncreasingSequence([1, 3, 2, 1]));
        assert.isTrue(almostIncreasingSequence([1, 3, 2]));
        assert.isTrue(almostIncreasingSequence([1, 2, 1, 2]]));
        assert.isFalse(almostIncreasingSequence([1, 1, 2]));
    });
})
