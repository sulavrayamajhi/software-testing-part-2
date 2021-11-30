import chai from 'chai';
import ceil from '../src/ceil.js';
const expect = chai.expect;

describe("Ceil - Round up number to precision", () => {
    it('Convert the non-integer to number with 2 digit decimal accuracy', () => {
        expect(ceil(2.4569, 2)).to.equal(2.46)
        expect(ceil(2.62, 2)).to.equal(2.62)
    })
    
    it('Converting the integer to number with 2 digit decimal accuracy', () => {
        expect(ceil(2, 2)).to.equal(2.00)
    })  
})
