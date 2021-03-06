var chai = require("chai");
var assert = chai.assert;

// var almostIncreasingSequence = require("../arcade.js");
//
// describe("Can only remove numbers to get strictly increasing sequence", function () {
//
//     it("should tell if you can only remove characters to get a strictly increasing sequence", function () {
//         assert.isFalse(almostIncreasingSequence([1, 3, 2, 1]));
//         assert.isTrue(almostIncreasingSequence([1, 3, 2]));
//         assert.isTrue(almostIncreasingSequence([3, 5, 67, 98, 3]));
//         assert.isFalse(almostIncreasingSequence([1, 2, 1, 2]));
//         assert.isTrue(almostIncreasingSequence([1, 1, 2]));
//         assert.isFalse(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
//         assert.isFalse(almostIncreasingSequence([1, 2, 5, 5, 5]));
//     });
// });

const boxBlur = require("../boxBlur");

const tests = {
    one: [[1,1,1],
        [1,7,1],
        [1,1,1]],
    two: [[0,18,9],
        [27,9,0],
        [81,63,45]],
    three: [[36,0,18,9],
         [27,54,9,0],
         [81,63,72,45]],
    four: [[7,4,0,1],
         [5,6,2,2],
         [6,10,7,8],
         [1,4,2,0]],
    five: [[36,0,18,9,9,45,27],
         [27,0,54,9,0,63,90],
         [81,63,72,45,18,27,0],
         [0,0,9,81,27,18,45],
         [45,45,27,27,90,81,72],
         [45,18,9,0,9,18,45],
         [27,81,36,63,63,72,81]]
}

const answers = {
    one: [[1]],
    two: [[28]],
    three: [[40,30]],
    four: [[5,4],
         [4,4]],
    five: [[39,30,26,25,31],
         [34,37,35,32,32],
         [38,41,44,46,42],
         [22,24,31,39,45],
         [37,34,36,47,59]],
}

describe("#blurbox", () => {
    it("Should return correct array", () => {
        assert.deepEqual(boxBlur(tests.one), answers.one);
        assert.deepEqual(boxBlur(tests.two), answers.two);
        assert.deepEqual(boxBlur(tests.three), answers.three);
        assert.deepEqual(boxBlur(tests.four), answers.four);
        assert.deepEqual(boxBlur(tests.five), answers.five);
    });
})
