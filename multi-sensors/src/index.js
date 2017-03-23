'use strict';
var mod = require('./main.js');
var fo = require('./fileoper.js');
var fw = require('./filewrapper.js');
var jsop = require('./jsonop.js');
var testmod = require('/usr/ruff_test/test0.js');

/** 继电器 */
var led;
/** 声音传感器 */
var soundSensor;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
});

$.end(function () {
    console.log('function end')
    $('#led').turnOff();
});
