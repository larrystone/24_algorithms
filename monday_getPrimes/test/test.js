'use strict';

let expect  = require('chai').expect;
let getPrimes = require('../app/index.js');

let expected = [];

describe("getPrimes() for invalid inputs", function() {
    it("less than zero", function() {
        expect(getPrimes(-1)).to.equal("invalid number");
    });
    
    it("equal to zero", function() {
        expect(getPrimes(0)).to.equal("invalid number");
    });
 });


describe("getPrimes() for valid inputs", function() {
    it("5", function() {

    expected = [];

    expect(getPrimes(5)).to.equal(expected);
    });
 });