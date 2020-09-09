// const fs = require('fs');
// let sampleCode = fs.ReadStream('/home/karan/Desktop/major-mountblue/XReact/src/sample.js','utf8')

// // sampleCode.on('open', function() {
// //     sampleCode.pipe();
// // })
// console.log(sampleCode,'console sample file');

var fs = require('fs');
var array = fs.readFileSync('/home/karan/Desktop/major-mountblue/XReact/src/sample.js').toString().split("\n");
for(i in array) {
    if(i.match('/<(\w+)/')){
        console.log(i,'in matchhchkjsadf');
    } 
    console.log(array[i],i);
}