import chai from 'chai'
import capitalize from '../src/capitalize.js'
const expect = chai.expect

describe('capitalize.js - Converts the first character of a string to uppercase and the remaining character to lowercase', () => {
    it("Convert the one word input string's first character to uppercase", () => {
        expect(capitalize('hello')).to.equal('Hello');
    })

    it("Convert the first character of first word to uppercase while passing more than one word as a string", () => {
        expect(capitalize('hello world')).to.equal('Hello world');
        expect(capitalize('there are 3 Liters Available')).to.equal('There are 3 liters available')
    })   
}) 

