/**
 * Created by guan on 16/8/2.
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://localhost:27017/users");

//创建数据库
var UserSchema = new mongoose.Schema({
    username: {type: String},
    pwd: {type: String}
},{
    collection: "users"
})

//创建骨架模型
var User = mongoose.model('user',UserSchema);

//处理注册
app.get("/register",function(req,res) {
   var username = req.query.username,
       pwd = req.query.pwd;
    console.log(username,pwd);
    if(username.length != 0 && pwd.length !=0) {
        User.create({
            username: username,
            pwd: pwd
        },function(err) {
            if(err) {
                console.log(err);
                res.send('{"err": "1","msg": "数据保存失败"}');
            }else {
                console.log("正确");
                res.send('{"err": "0","msg":"数据保存成功"}');
            }
        });
    }else {
        res.send('{"err": "1","msg": "没有数据"}');
    }
});

app.get("*",function(req,res) {
   var reg = /.\[a-z]+$/;
    if(reg.test(req.path)) {
        res.sendFile(__dirname+ req.path);
    }else {
        res.send("<h1>404 Not Found</h1>")
    }
}).listen(8888);
console.log("服务器启动");