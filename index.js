/* global describe,it */
var a = 1
var b = 2
function sum (a, b) {
  return a + b
}
console.log(sum(a, b))

var assert = require('assert')
describe('check sum function', function () {
  describe('sum()', function () {
    it('should return 3', function () {
      assert.equal(sum(a, b), 3)
    })
  })
})
