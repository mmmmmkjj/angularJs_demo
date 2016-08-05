/**
 * Created by guan on 16/8/2.
 */
var express = require('express');
var app = express();

//处理注册
app.get("/register",function(req,res) {
   var name = req.query.name,
       age = req.query.age,
       hobby = req.query.hobby;
    console.log(name,age,hobby);
    res.send("111");
});

//处理全部页面
app.get("*",function(req,res) {
    var reg = /.\[a-z]+$/;
    if(reg.test(req.path)) {
        res.sendFile(__dirname, + req.path);
    }else {
        res.send("<h1>404 Not Found</h1>");
    }
});
app.listen(8888,"localhost");
console.log("服务器启动");