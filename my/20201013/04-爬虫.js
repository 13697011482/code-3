var http = require('http')
var https = require('https')

// https.get('https://m.maoyan.com/ajax/filterCinemas?ci=30&optimus_uuid=F2D13F600D0111EBA861AF9161546B457F486D486D0146A2B574FFA6179F129F&optimus_risk_level=71&optimus_code=10' , function(req){
//   var s = '';
//   req.on('data' , function(chunk){
//     s += chunk
//   })
//   req.on('end' , function(){
//     var data = JSON.parse(s).hallType.subItems;
//     console.log(data);
//   })
// })

https.get('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=8C90F9500D5311EBBEC21FA7E3E1611285250634DADF4E968B2BF33F268E9577&optimus_risk_level=71&optimus_code=10' , function(req){
  var s = '';
  req.on('data' , function(chunk){
    s += chunk;
  });
  req.on('end' , function(){
    var data = JSON.parse(s)
    console.log(data);
  })
})
