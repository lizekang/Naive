'use strict'
var fw = require('./filewrapper.js');
var student = {
    name : 'xiaoming',
    grade : 6,
    birth : 1998,
    getage : function (){
        return 2017 - this.birth;
    }
}
function wirteJson (){
    fw.filewrite();
}
