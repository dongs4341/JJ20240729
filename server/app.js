/*
const http = require('http');
const express = require('express');
const app = express()

const port = 8000;

// 뷰 템플릿 사용을 위한 설정
app.set('views', 'views');
app.set('view engine', 'ejs');

// /public/index.html을 보여주기 위한 static 폴더 지정.
app.use(express.static('public'));

//사람 데이터 목록 선언
const saramList = [
    {no:102, name:'홍길동', email:'hong@saram.com', job:'도둑', age:23},
    {no:101, name:'이길동', email:'lee@saram.com', job:'변호사', age:33},
    {no:103, name:'김길순', email:'kim@saram.com', job:'프로그래머', age:27},
    {no:104, name:'박길순', email:'park@saram.com', job:'군인', age:25}
];



//localhost:8000/saram 이라고 쳐야함
app.get('/saram', function(req, res){
    //ejs 페이지로 렌더링
    //- views/saram.ejs 페이지의 코드를 읽어와서 res.end에 적용한다.

    var message = "사람 정보 관리 페이지";  //변수 만들어서 넣어도 적용됨
    req.app.render('saram', {message, saramList}, function(err, html) {
        res.end(html);

    });
});

// localhost:8000/saram/detail?no=103
app.get('/saram/detail', function(req, res) {
    console.log("GET - /saram/detail >>>> no: " + req.query.no);
    var idx = saramList.findIndex(function(saram) {
        return saram.no == req.query.no;
    });
    var saram = null;
    if(idx != -1) {
        saram = saramList[idx];
    }
    req.app.render('saramDetail', {saram}, function(err, html) {
        res.end(html);
    });
});

// localhost:8000/saram/edit?no=103
app.get('/saram/edit', function(req, res) {
    console.log("GET - /saram/detail >>>> no: " + req.query.no);
    var idx = saramList.findIndex(function(saram) {
        return saram.no == req.query.no;
    });
    var saram = null;
    if(idx != -1) {
        saram = saramList[idx];
    }
    req.app.render('saramEdit', {saram}, function(err, html) {
        res.end(html);
    });
});

// localhost:8000/saram/edit?no=103
app.get('/saram/update', function(req, res) {
    console.log("GET - /saram/update >>>> no: " + req.query.no);
    // saramList에서 해당 정보를 찾아서 update 하기
    var idx = saramList.findIndex(function(saram) {
        return saram.no == req.query.no;
    });
    var saram = null;
    if(idx != -1) {
        saram = saramList[idx];
        saram.name = req.query.name;
        saram.email = req.query.email;
        saram.job = req.query.job;
        saram.age = req.query.age;
    }

///맞나..?

    req.app.render('saramEdit', {saram}, function(err, html) {
        res.send(req.query);
    });
});



const server = http.createServer(app);
server.listen(port, function() {
    console.log("서버 실행 중 >>> http://localhost:"+port);
});


//실제 웹서버 구축에서는 Node.js만 사용하지 않고 express를 더 많이 사용함

*/
const http = require('http');
const express = require('express');
const app = express()

const port = 8000;

// 뷰 템플릿 상용을 위한 설정
app.set('views', 'views');
app.set('view engine', 'ejs');

// /public/index.html을 보여주기 위한 static 폴더 지정.
app.use(express.static('public'));

// 사람 데이터 목록 선언
const saramList = [
    {no:102, name:'홍길동', email:'hong@saram.com', job:'도둑', age:23},
    {no:101, name:'이길동', email:'lee@saram.com', job:'변호사', age:33},
    {no:103, name:'김길순', email:'kim@saram.com', job:'프로그래머', age:27},
    {no:104, name:'박길순', email:'park@saram.com', job:'군인', age:25}
];

// localhost:8000/saram
app.get('/saram', function(req, res) {
    // ejs 페이지로 렌더링 
    // - views/saram.ejs 페이지의 코드를 읽어와서 res.end()에 적용한다.

    var message = "사람 정보 관리 페이지";
    req.app.render('saram', {message, saramList}, function(err, html) {
        res.end(html);
    });
});

// localhost:8000/saram/detail?no=103
app.get('/saram/detail', function(req, res) {
    console.log("GET - /saram/detail >>>> no: " + req.query.no);
    var idx = saramList.findIndex(function(saram) {
        return saram.no == req.query.no;
    });
    var saram = null;
    if(idx != -1) {
        saram = saramList[idx];
    }
    req.app.render('saramDetail', {saram}, function(err, html) {
        res.end(html);
    });
});

app.get('/saram/edit', function(req, res) {
    console.log("GET - /saram/edit >>>> no: " + req.query.no);
    var idx = saramList.findIndex(function(saram) {
        return saram.no == req.query.no;
    });
    var saram = null;
    if(idx != -1) {
        saram = saramList[idx];
    }
    req.app.render('saramEdit', {saram}, function(err, html) {
        res.end(html);
    });
});

app.get('/saram/update', function(req, res) {
    console.log("GET - /saram/update >>> ", req.query);
    // saramList에서 해당 정보를 찾아서 update 하기.
    res.send(req.query);
});

const server = http.createServer(app);
server.listen(port, function() {
    console.log("서버 실행 중 >>> http://localhost:"+port);
});

// 실제 웹 서버 구축에서는 Nodejs만 사용하지 않고 express를 더 많이 사용합니다.