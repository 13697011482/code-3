const { notEqual } = require('assert');
var fs = require('fs');
var path = require('path');
var name = path.parse(__dirname).name

// console.log(name);

var arr = [
  'package name:(' + name + ')',
  'version: (1.0.0)',
  'author:',
  'description:',
  'Is this OK? (yes)'
];

var data = [
  { key : 'name' , value : name},
  { key : 'version' , value : '1.0.0'},
  { key : 'author' , value : ''},
  { key : 'description' , value : ''},
]

var json = {};
var now = 0;

process.stdout.write(arr[now])
process.stdin.on('data' , function(info){
  info = info.toString().trim()

    if(now == arr.length - 1 && info === 'yes'){
      fs.writeFile('package.json' , JSON.stringify(json , null , 4) , function(err){
        process.stdout.write('package.json create success');
        process.exit();
    });
    return ;
  }

  if(info){
    data[now].value = info
  }

  if(now == arr.length - 2){
    for(var i = 0 ; i < data.length ; i ++){
      json[data[i].key] = data[i].value;
    }
    process.stdout.write(JSON.stringify(json , null , 4));
    process.stdout.write('\n');
  }

  now ++;
  process.stdout.write(arr[now]);
});
