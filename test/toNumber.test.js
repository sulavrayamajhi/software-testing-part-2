import chai from 'chai';
import toNumber from '../src/toNumber.js';
const expect = chai.expect;

describe("toNumber", () => {
    it("Returns number if string is passed", () =>{
        expect(toNumber('2.8')).to.equal(2.8)
    });
    it("Returns NaN  if symbol is passed", () =>{
        expect(toNumber('2021-11-12')).to.be.NaN
    });
    it("Returns number if number is passed", () => {
        expect(toNumber(4)).to.equal(4)
    });
    it("Returns infinite if infinity is passed", () => {
        expect(toNumber(Infinity)).to.equal(Infinity)
    });
})
