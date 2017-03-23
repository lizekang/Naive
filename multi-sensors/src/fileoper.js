'use strict'
/** the main function wrapping **/
var fs = require('fs');

function count(){
	var i = 0;
	function inner(){
		i+=1;
		if(i>12){
			i = 0;
		}
		return i;
	}
	return inner;
}

function dirls(path){
}
function fileopre(error){
    if(error){
        console.log(error);
    }
     try {
         //             fs.unlink('/tmp/hello.js', function (err) {
         //            if (err) console.log(err);
         //            else console.log('successfully deleted /tmp/hello.js');
         //        });
         var dir = '/usr';
         //先查看次目录是否存在读取一个目录
         fs.exists(dir, function (exists) {
             if(exists){
                 console.log('the file or directory exists');
                 fs.readdir(dir, function(error, files){
                     console.log("files", files);
                     fs.stat(dir,function(err, stats){
                         if(err) throw err;
                         console.log('stat:' + JSON.stringify(stats));
                     });
                 });
             }else{
                console.log('the file or directory %s don\'t exist', dir);
             }
         });
         var dir2 = '/usr/ruff_test';
         /**创建一个目录
         fs.exists(dir2, function(exists){
             console.log(JSON.stringify(exists));
             if(exists){
                 console.log('the dir%s already exists', dir2);
             }
             else{
                 fs.mkdir(dir2,function(err, flag){
                     if(err) throw err;
                     console.log(JSON.stringify(flag));
                 });
             }
         });**/
         //在目录下写一个文件
         var file1 = '/usr/ruff_test/test0.js';
         fs.open(file1, 'w+', 555, function(err, fd){
             var data = 'function test() {\n\
                console.log(\'the span files system test sucessfully\');}\n\
                module.exports.test = test; ';
             console.log('start to write the file %s', file1);
             fs.write(fd, data, function(err, written, string){
                 if (err) throw err;
                 console.log('err%s, written%s, string%s',err, written, string);
                 console.log('write %s over', file1);
             });
            fs.closeSync(fd);
         });
         //读取test.js文件
         fs.readFile(file1, function (err, data) {
             console.log('start to read %s', file1);
             if (err) throw err;
             console.log('\ndata: %s', data);
         });
         //调用
    } catch(e){
        console.log(e);
    } finally{
        console.log('finally');
    }
}


//exports
module.exports.fileopre = fileopre;
