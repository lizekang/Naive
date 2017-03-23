'use strict';
var fw = require('./filewrapper.js');
var fs = require('fs');
var buffer = require('buffer');

var student = {
    name : 'xiaoming',
    grade : 6,
    birth : 1998,
    getage : function (){
        return 2017 - this.birth;
    }
};

function writejson(){
    var s,raw;
    var ob;
    var flag=false;
    //使用同步写文件 using Buffer or not;
    raw = new Buffer(JSON.stringify(student), 'utf8');
    fs.writeFileSync('/usr/ruff_test/test.json', JSON.stringify(student), function(err){
        if(err) throw err;
        console.log('save files');
        flag = true;
    });
    //使用异步读取文件
    //fs.readFile('/usr/ruff_test/test.json','utf8', function (err, data){
    //        console.log('starting to read file');
    //        if(err) throw err;
    //        s = data;
    //    console.log("data:\n%s,\ntype:%s\n", s, typeof(s));
    //        ob = JSON.parse(s);
    //        console.log(ob);
    //    });
    s = fs.readFileSync('/usr/ruff_test/test.json')
    console.log(JSON.parse(s));
}
module.exports.writejson = writejson;
