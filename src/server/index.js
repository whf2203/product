const express = require('express');
const SMSClient = require('@alicloud/sms-sdk');
const bodyParser = require('body-parser')
let app = express();

// 引入mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '1603c'
});


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

// app.get('/', (req, res) => {
//     res.send('hello world');
// })
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/get', (req, res) => {
    connection.query('select * from user', function(error, results, fields) {
        if (error) {
            throw error;
        }
        console.log('results...', results);
        res.json({
            code: 1,
            data: results,
            msg: '获取数据成功'
        })
    })

})

app.listen(8888, () => {
    console.log('正在监听8888端口');
});