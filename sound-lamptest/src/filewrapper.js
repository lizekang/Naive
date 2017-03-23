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
function filewrite(path, data){
    fs.open(path, 'w+', 555, function(err, fd){
            console.log('start to write the file %s', path);
            fs.write(fd, data, function(err, written, string){
            if (err) throw err;
            console.log('writing......\nerr%s\nwritten%s\nstring%s\n',
                    err, written, string);
            console.log('write %s over', path);
         });
        fs.closeSync(fd);
    });
}
//exports
module.exports.ls = ls;
module.exports.mkdir = mkdir;
module.exports.rmdir = rmdir;
module.exports.filewrite = filewrite;

