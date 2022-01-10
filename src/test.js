
import { expect, jest } from '@jest/globals'
import { test } from 'jest-circus'
import * as cliFunction from './cli'

var testDictionary = {
    foo: ['bar', 'baz', 'zab'],
    faa: ['abc', 'bcd', 'cde'],
    fbb: ['bbb']
}
var testDictionary2 = {}
var testDictionary3 = { foo: 'test'}


//Unit test
//check if dictionary is empty
test('Test: is empty dictionary is empty w/ isDictEmpty ', () => {
    expect(cliFunction.isDictEmpty(testDictionary2)).toBe(true)
})

//empty the dictionary
test('Test: emptying dictionary  w/ emptyDict', () => {
    let dict = testDictionary;
    expect(cliFunction.isDictEmpty(dict)).toBe(0)
})

//check if member exists
test('Test: member check {foo: zzz} (does not exist)  w/ memberCheck', () => {
    let dict = testDictionary;
    expect(cliFunction.isDictEmpty(dict)).toBe(0)
})

//check if key exists


//delete a key


//delete member


//add a member


//
