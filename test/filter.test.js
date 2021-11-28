import chai from 'chai';
import filter from '../src/filter.js';
const expect = chai.expect;

describe("Filter - returning an array of all elements  predicate returns truthy for", () => {
    it('Fetch the only element that passes the condition defined in the predicate function(callback function) in the array. ', () => {
        const users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': false }
        ]

        const expectedOutput = [{ 'user': 'barney', 'active': true }]
        expect(filter(users,({active}) => active)).to.deep.equal(expectedOutput)

    }) 
})
