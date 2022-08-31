//import {StringCleaner} from '../src/StringCleaner.tsx';
const StringCleaner = require('../src/StringCleaner');
var assert = require('assert');
describe('String Test', function () {
  describe('hello world', function () {
    // it('Should be: hello world', function () {
    //     let result = StringCleaner("hello*world");
    //     assert.equal(result, "hello world");
    // });
    it('Should be: hello world', function () {
        var result = StringCleaner("hello%world");
        assert.equal(result, "hello world");
    });
    it('Should be: hello world', function () {
        var result = StringCleaner("“!hello world");
        assert.equal(result, "hello world");
    });
    it('Should be: hello world', function () {
        var result = StringCleaner(";hello?world!");
        assert.equal(result, "hello world");
    });
    it('Should be: hello world', function () {
        var result = StringCleaner("hello;world");
        assert.equal(result, "hello world");
    });
    it('Should be: hello world', function () {
        var result = StringCleaner("hello world?");
        assert.equal(result, "hello world");
    });
  });
});