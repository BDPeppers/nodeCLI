
require = require('esm')(module /*, options*/);
var assert = require('assert')
const cliFunction = require('../src/cli')


var testDictionary00 = {
  foo: ['bar', 'baz', 'zab'],
  faa: ['abc', 'bcd', 'cde']
}
var testDictionary0 = {
    foo: ['bar', 'baz', 'zab'],
    faa: ['abc', 'bcd', 'cde'],
    fbb: ['bbb']
}
var testDictionary1 = {
  foo: ['baz', 'zab'],
  faa: ['abc', 'bcd', 'cde'],
  fbb: ['bbb']
}
var testDictionary2 = {}
var testDictionary3 = { 
  foo: ['test']
}
var testDictionary4 = { 
  foo: ['test', 'test2']
}

//Unit Tests/////////////////////
describe('check if dictionary is empty', function(){
  it('Test: is empty dictionary is empty w/ isDictEmpty ', () => {
      let dict = {}
      assert.equal(cliFunction.isDictEmpty(dict), true);
  });
})

describe('check if emptying dictionary works', function(){
  it('Test: emptying dictionary  w/ emptyDict', () => {
    cliFunction.emptyDict(testDictionary4)
    assert.deepEqual(testDictionary4, testDictionary2);
  });
})

describe('check if member exists', function(){
  it('Test: member check {foo: zzz} (does not exist)  w/ memberCheck', () => {
    assert.equal(cliFunction.memberCheck('foo', 'zzz', testDictionary3), 0);
  });
})

describe('check if key exists', function(){
  it('Test: key check {zzz} (does not exist)  w/ keyCheck', () => {
    assert.equal(cliFunction.keyCheck('zzz', testDictionary3), false);
  });
})

describe('check if deleting a key works', function(){
  it('Test: deleting key {fbb} w/ deleteKey', () =>{
    cliFunction.deleteKey('fbb', testDictionary0);
    assert.deepEqual(testDictionary0, testDictionary00);
  })
})

describe('check if deleting a member works', function(){
  it('Test: deleting member {foo : bar} w/ deleteMember', () =>{
      let testMember = testDictionary1['foo']; //no bar
      cliFunction.deleteMember('foo', 'bar', testDictionary0)//deleting bar
      let testMember2 = testDictionary0['foo']
      assert.deepEqual(testMember, testMember2);
  });
})

describe('check if adding a member works', function(){
  it('Test: adding new member {foo: test} w/ addMember', () =>{
    cliFunction.addMember('foo', 'test', testDictionary2)
    assert.deepEqual(testDictionary2, testDictionary3)
  });
})



