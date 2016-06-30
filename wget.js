/**
 * Created by LIN on 2016/6/5.
 */
var nodegrass = require('nodegrass');
nodegrass.get("http://www.baidu.com",function(data,status,headers){
    console.log(status);
    console.log(headers);
    //console.log(data);
},null,'utf8').on('error', function(e) {
    console.log("Got error: " + e.message);
});