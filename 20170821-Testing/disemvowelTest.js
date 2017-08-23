'use strict';

var expect = require('chai').expect;
var disemvowel = require('./disemvowel');

describe('Disemvowel', function() {
    it('should remove all vowels from lowercase strings', () => {
        expect(disemvowel('this is lowercase')).to.equal('ths s lwrcs');
        expect(disemvowel('this is something special')).to.equal('ths s smthng spcl');
    });

    it('should remove all vowels from mixed strings', () => {
        expect(disemvowel('this IS mixed')).to.equal('ths S mxd');
    });
});