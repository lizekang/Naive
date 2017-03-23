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
    var button1 = $('#button');
    var led = $('#led');
    led.turnOff();
    console.log('ready');

    mod.main(led);
    //文件系统测试
    // fo.fileopre(error);
    //测试跨文件调用
    //    console.log('test the span-files test');
    //    testmod.test();
    //    console.log('over');
    //json写入测试
    jsop.writejson();
    
			/**
    //继电器打开，控制相应的灯泡打开
    led.setRGB([0x80, 0x80, 0x80])

    //若10秒钟内没有声音，则关闭继电器
    setTimeout( function () {
    }, 10000);**/
});

$.end(function () {
    console.log('function end')
    $('#led').turnOff();
});
