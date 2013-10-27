/*

index.js - "control-rod-assembly": Control structure for connecting and 
                                   disconnecting multiple ControlRods at once

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

/*
  * `rod, [rod, ...]`: _ControlRod_ Zero, one, or more control rods to initialize with.
*/
var ControlRodAssembly = module.exports = function ControlRodAssembly () {
    var self = this;

    self._rods = Array.prototype.slice.call(arguments);
};

/*
  * `rod, [rod, ...]`: _ControlRod_ Zero, one, or more control rods to add.
*/
ControlRodAssembly.prototype.add = function add () {
    var self = this;

    self._rods = self._rods.concat(Array.prototype.slice.call(arguments));
};

ControlRodAssembly.prototype.connect = function connect () {
    var self = this;
    self._rods.forEach(function (rod) {
        if (typeof rod.connect === 'function')
            rod.connect();

    });
};

ControlRodAssembly.prototype.disconnect = function disconnect () {
    var self = this;
    self._rods.forEach(function (rod) {
        if (typeof rod.disconnect === 'function') 
            rod.disconnect();

    });
};

/*
  * `rod, [rod, ...]`: _ControlRod_ Zero, one, or more control rods to remove.
*/
ControlRodAssembly.prototype.remove = function remove () {
    var self = this;
    Array.prototype.slice.call(arguments).forEach(function (rod) {
        var index = self._rods.indexOf(rod);
        if (index >= 0)
            self._rods.splice(index, 1);
        
    });
};

/*
  * Return: _Array_ An array of `ControlRod`s in this assembly.
*/
ControlRodAssembly.prototype.rods = function rods () {
    var self = this;

    return self._rods;
};