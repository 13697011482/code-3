var fs = require("fs")

var [dirNode , fileName , ...files] = process.argv;

fs.readdir(__dirname , function(err , infos){

  var result = []
  var promiseArr = []
  for(var i = 0 ; i < files.length ; i ++){
    if(infos.includes(files[i])){
      result.push(files[i])
    }
  }

  for(var i=0;i<result.length;i++){
    var p = new Promise((resolve,reject)=>{
        fs.readFile(result[i],function(err,data){
            resolve(data);
        });
    });
    promiseArr.push(p);
}

Promise.all(promiseArr).then((data)=>{
    var content = data.join('');
    fs.writeFile('all.js', content ,function(err){
        console.log('all.js create success');
    });
});
})