'use strict'
/** the main function wrapping **/
var fs = require('fs');

function ls(path){
    fs.readdir(path, function(err, files){
        if(err) throw err;
        else {
            console.log(JSON.stringify(files));
        } 
    });
}
function mkdir(path){
    if(path[0]!='/'&&path[0]!='.')
        path = './' + path;
    fs.mkdir(path, function(err, flag){
        if (err) throw err;
        if(flag) console.log('create the %s sucessfully', path);
        else console.log('didn\'t create the %s', path);
    });
}
function rmdir(path){
    if(path[0]!='/'&&path[0]!='.')
        path = './' + path;
    fs.rmdir(path, function(err, flag){
        if(flag) console.log('remove the %s sucessfully', path);
        else console.log('didn\'t remove the %s sucessfully', path);
    });
}

//exports
module.exports.ls = ls;
module.exports.mkdir = mkdir;
module.exports.rmdir = rmdir;

