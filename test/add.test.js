import chai from 'chai';
import add from '../src/add.js';
const expect = chai.expect;

describe("Add", () => {
    it("adds two positive numbers", () =>{
        expect(add(5,6)).to.equal(11)
    });

    it("add two negative numbers", () => {
        expect(add(-3,-4)).to.equal(-7)
    });

    it("add one positive number with a negative number", () => {
        expect(add(-3,-4)).to.equal(-7)
    });
})
