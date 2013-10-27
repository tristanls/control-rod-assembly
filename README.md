# control-rod-assembly

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

[![NPM version](https://badge.fury.io/js/control-rod-assembly.png)](http://npmjs.org/package/control-rod-assembly)

Control structure for connecting and disconnecting multiple [ControlRods](https://github.com/tristanls/control-rod) at once.

## Usage

```javascript
var ControlRod = require('control-rod'),
    ControlRodAssembly = require('control-rod-assembly'),
    events = require('events');

var emitter1 = new events.EventEmitter();
var emitter2 = new events.EventEmitter();
var emitter3 = new events.EventEmitter();

var rod1 = new ControlRod(emitter1, 'foo', function () { /* ... */ });
var rod2 = new ControlRod(emitter1, 'bar', function () { /* ... */ });
var rod3 = new ControlRod(emitter2, 'foo', function () { /* ... */ });
var rod4 = new ControlRod(emitter2, 'bar', function () { /* ... */ });
var rod5 = new ControlRod(emitter3, 'foo', function () { /* ... */ });
var rod6 = new ControlRod(emitter3, 'bar', function () { /* ... */ });
var rod7 = new ControlRod(emitter3, 'baz', function () { /* ... */ });

var rodAssembly = new ControlRodAssembly(rod1, rod2, rod3, rod4, rod5);
rodAssembly.add(rod6, rod7);

rodAssembly.connect();
// all rods are connected
rodAssembly.disconnect();
// all rods are disconnected

rodAssembly.rods();
// [rod1, rod2, rod3, rod4, rod5, rod6, rod7] array of rods in assembly 
```

## Test

    npm test

## Overview

ControlRodAssembly is an abstraction over a collection of [ControlRods](https://github.com/tristanls/control-rod) in order to connect and disconnect them together.

## Documentation

### ControlRodAssembly

**Public API**

  * [new ControlRodAssembly(rod, \[rod, ...\])](#new-controlrodassemblyrod-rod-)
  * [controlRodAssembly.add(rod, \[rod, ...\])](#controlrodassemblyaddrod-rod-)
  * [controlRodAssembly.connect()](#controlrodassemblyconnect)
  * [controlRodAssembly.disconnect()](#controlrodassemblydisconnect)
  * [controlRodAssembly.remove(rod, \[rod, ...\])](#controlrodassemblyremoverod-rod-)
  * [controlRodAssembly.rods()](#controlrodassemblyrods)

### new ControlRodAssembly(rod, [rod, ...])

  * `rod, [rod, ...]`: _ControlRod_ Zero, one, or more control rods to initialize with.

Creates a new instance of ControlRodAssembly.

### controlRodAssembly.add(rod, [rod, ...])

  * `rod, [rod, ...]`: _ControlRod_ Zero, one, or more control rods to add.

Adds specified ControlRods to assembly.

### controlRodAssembly.connect()

Connects all ControlRods in the assembly.

### controlRodAssembly.disconnect()

Disconnects all ControlRods in the assembly.

### controlRodAssembly.remove(rod, [rod, ...])

  * `rod, [rod, ...]`: _ControlRod_ Zero, one, or more control rods to remove.

Removes specified ControlRods from assembly.

### controlRodAssembly.rods()

  * Return: _Array_ An array of `ControlRod`s in this assembly.