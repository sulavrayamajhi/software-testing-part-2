import chai from 'chai';
import compact from '../src/compact.js';
const expect = chai.expect;

describe("Compact - Removes all the falsey value", () => {
    it('Remove the falsey values from an array by returning the new array without any falsy values.', () => {
        expect(compact([0, 'product1', false,  undefined, 2, '', 'product2'])).to.deep.equal(['product1', 2, 'product2'])
        expect(compact([0, 'product1', false, undefined,  2, '', 'product2'])).to.be.an('array');
    })
   
})
