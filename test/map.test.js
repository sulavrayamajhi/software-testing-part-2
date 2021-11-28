import chai from 'chai';
import map from '../src/map.js';
const expect = chai.expect;

describe("Map - Iterates over the elements to create a new array", () => {
    it('Populate the element according to the condition defined on the callback function and create a new array', () => {
        const square = n => n*n;

        const inputArray = [4, 8];
        const expectedArray = [16, 64];
        expect(map(inputArray, square)).to.deep.equal(expectedArray)
        expect(map(inputArray, square)).to.be.an('array');
    })
   
})
