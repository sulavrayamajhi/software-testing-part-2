import chai from 'chai';
import divide from '../src/divide.js';
const expect = chai.expect;

describe("Divide", () => {
    it("Divide two positive numbers", () =>{
        expect(divide(5,100)).to.equal(20)
    });
    it("Divide positive number by negative number", () => {
        expect(divide(8,-2)).to.equal(-4)
    });
    it("Divide negative number by positive number", () => {
        expect(divide(-9, 3)).to.equal(-3)
    });
    it("Divide two negative numbers", () => {
        expect(divide(-10,-4)).to.equal(2.5)
    });
})
