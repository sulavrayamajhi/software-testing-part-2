import chai from 'chai';
import countyBy from '../src/countBy.js';
const expect = chai.expect;

describe("CountBy", () => {
    it("Counts the number of objects with given attribute in an array of objects", () =>{
        expect(countyBy([
            {'product': 'shoes', 'available': true},
            {'product': 'shirt', 'available': false},
            {'product': 'pant', 'available': false}], 
            value => value.available))
            .to.deep.equal({true: 1, false: 2})
    });
})
