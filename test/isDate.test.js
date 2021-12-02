import chai from 'chai';
import isDate from '../src/isDate.js';
const expect = chai.expect;

describe("isDate", () => {
    it("Returns true if date object is passed", () =>{
        expect(isDate(new Date)).to.be.true
    });
    it("Returns false if date string is passed", () =>{
        expect(isDate('2021-11-12')).to.be.false
    });
    it("Returns false if null is passed", () =>{
        expect(isDate(null)).to.be.false
    });
    it("Returns false if number is passed", () =>{
        expect(isDate(20)).to.be.false
    });
    it("Returns false if undefined is passed", () =>{
        expect(isDate(undefined)).to.be.false
    });
    it("Returns false if undefined is passed", () =>{
        expect(isDate(false)).to.be.false
    });
})
