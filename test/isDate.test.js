import chai from 'chai';
import isDate from '../src/isDate.js';
const expect = chai.expect;

describe("isDate", () => {
    it("Returns true if date object is passed", () =>{
        expect(isDate(new Date)).to.equal(true)
    });
    it("Returns false if date object is not passed", () =>{
        expect(isDate('2021-11-12')).to.equal(false)
    });

})
