/**
 * Created by LIN on 2016/6/5.
 */
var nodegrass = require('nodegrass');
nodegrass.get("http://sendmsg.fanhuan.com/qxt_sms.ashx?api=send&mn=15959273325&ct=发送测试",function(data,status,headers){
    console.log(status);
    console.log(headers);
    //console.log(data);
},null,'utf8').on('error', function(e) {
    console.log("Got error: " + e.message);
});