'use strict';

let expect  = require('chai').expect;
let getPrimes = require('../app/index.js');

let expected = [];

describe("getPrimes() for invalid inputs", function() {
    it("less than zero", function() {
        expect(getPrimes(-1).toString()).to.equal(expected.toString());
    });
    
    it("equal to zero", function() {
        expect(getPrimes(0).toString()).to.equal(expected.toString());
    });

    it("equal to 1", function() {
        expect(getPrimes(1).toString()).to.equal(expected.toString());
    });
 });


describe("getPrimes() for valid inputs", function() {
    it("5", function() {

        expected = [2, 3, 5];

        expect(getPrimes(5).toString()).to.equal(expected.toString());
    });

    it("19", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19];

        expect(getPrimes(19).toString()).to.equal(expected.toString());
    });


    it("50", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

        expect(getPrimes(50).toString()).to.equal(expected.toString());
    });

    it("15", function() {

        expected = [2, 3, 5, 7, 11, 13];

        expect(getPrimes(15).toString()).to.equal(expected.toString());
    });

    it("14", function() {

        expected = [2, 3, 5, 7, 11, 13];

        expect(getPrimes(14).toString()).to.equal(expected.toString());
    });


    it("89", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89];

        expect(getPrimes(89).toString()).to.equal(expected.toString());
    });


    it("76", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73];

        expect(getPrimes(76).toString()).to.equal(expected.toString());
    });


    it("100", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        expect(getPrimes(100).toString()).to.equal(expected.toString());
    });
 });