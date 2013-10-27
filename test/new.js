/*

new.js - new ControlRodAssembly(rod, [rod...]) test

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var ControlRodAssembly = require('../index.js'),
    events = require('events');

var test = module.exports = {};

test['new ControlRodAssembly() has no rods if none given'] = function (test) {
    test.expect(1);
    var assembly = new ControlRodAssembly();
    test.equal(assembly.rods().length, 0);
    test.done();
};

test['new ControlRodAssembly() stores one rod if given'] = function (test) {
    test.expect(2);
    var rod = {};
    var assembly = new ControlRodAssembly(rod);
    test.equal(assembly.rods().length, 1);
    test.strictEqual(assembly.rods()[0], rod);
    test.done();
};

test['new ControlRodAssembly() stores all rods if multiple given'] = function (test) {
    test.expect(4);
    var rod1 = {};
    var rod2 = {};
    var rod3 = {};
    var assembly = new ControlRodAssembly(rod1, rod2, rod3);
    test.equal(assembly.rods().length, 3);
    test.strictEqual(assembly.rods()[0], rod1);
    test.strictEqual(assembly.rods()[1], rod2);
    test.strictEqual(assembly.rods()[2], rod3);
    test.done();
};