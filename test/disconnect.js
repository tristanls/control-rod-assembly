/*

disconnect.js - controlRodAssembly.disconnect() test

The MIT License (MIT)

Copyright (c) 2013-2014 Tristan Slominski

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

var ControlRod = require('control-rod'),
    ControlRodAssembly = require('../index.js'),
    events = require('events');

var test = module.exports = {};

test['disconnect() disconnects all control rods in assembly'] = function (test) {
    test.expect(12);
    var emitter1 = new events.EventEmitter();
    var emitter2 = new events.EventEmitter();
    var handler1 = function () {};
    var handler2 = function () {};
    var handler3 = function () {};
    var rod1 = new ControlRod(emitter1, 'e1h1', handler1);
    var rod2 = new ControlRod(emitter2, 'e2h1', handler1);
    var rod3 = new ControlRod(emitter2, 'e2h2', handler2);
    var rod4 = new ControlRod(emitter1, 'e1h3', handler3);
    test.strictEqual(rod1.connected, false);
    test.strictEqual(rod2.connected, false);
    test.strictEqual(rod3.connected, false);
    test.strictEqual(rod4.connected, false);
    var assembly = new ControlRodAssembly(rod1, rod2, rod3, rod4);
    assembly.connect();
    test.strictEqual(rod1.connected, true);
    test.strictEqual(rod2.connected, true);
    test.strictEqual(rod3.connected, true);
    test.strictEqual(rod4.connected, true);
    assembly.disconnect();
    test.strictEqual(rod1.connected, false);
    test.strictEqual(rod2.connected, false);
    test.strictEqual(rod3.connected, false);
    test.strictEqual(rod4.connected, false);
    test.done();
};

test['disconnect() emits "disconnected" event after disconnecting all rods in assembly'] = function (test) {
    test.expect(4);
    var emitter1 = new events.EventEmitter();
    var handler1 = function () {};
    var rod1 = new ControlRod(emitter1, 'e1h1', handler1);
    test.strictEqual(rod1.connected, false);
    var assembly = new ControlRodAssembly(rod1);
    assembly.connect();
    test.strictEqual(rod1.connected, true);
    assembly.on("disconnected", function () {
        test.ok(true);
    });
    assembly.disconnect();
    test.strictEqual(rod1.connected, false);
    test.done();
};
