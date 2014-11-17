# control-rod-assembly

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

[![NPM version](https://badge.fury.io/js/control-rod-assembly.png)](http://npmjs.org/package/control-rod-assembly)

Control structure for connecting and disconnecting multiple [ControlRods](https://github.com/tristanls/control-rod) at once.

## Usage

```javascript
var ControlRod = require('control-rod'),
    ControlRodAssembly = require('control-rod-assembly'),
    events = require('events');

var storage = new events.EventEmitter();
var publicserver = new events.EventEmitter();
var peerServer = new events.EventEmitter();

var rod1 = new ControlRod(storage, 'foo', function () { /* ... */ });
var rod2 = new ControlRod(storage, 'bar', function () { /* ... */ });
var rod3 = new ControlRod(publicserver, 'foo', function () { /* ... */ });
var rod4 = new ControlRod(publicserver, 'bar', function () { /* ... */ });
var rod5 = new ControlRod(peerServer, 'foo', function () { /* ... */ });
var rod6 = new ControlRod(peerServer, 'bar', function () { /* ... */ });
var rod7 = new ControlRod(peerServer, 'baz', function () { /* ... */ });

var rodAssembly = new ControlRodAssembly(rod1, rod2, rod3, rod4, rod5);
rodAssembly.add(rod6, rod7);

rodAssembly.on('connected', function () {
    console.log("assembly connected");
});
rodAssembly.on('disconnected', function () {
    console.log("assembly disconnected");
});

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
  * [Event 'connected'](#event-connected)
  * [Event 'disconnected'](#event-disconnected)

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

### Event `connected`

  * `function () {}`

Emitted once all the control rods in the assembly are connected.

### Event `disconnected`

  * `function () {}`

Emitted once all the control rods in the assembly are disconnected.
