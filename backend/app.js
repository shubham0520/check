var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');




app.get("/", (req, res)=>{
    res.render ("/frontend/admin.html");
})
app.post('/submit',function(req,res){
    console.log('requested');
    res.send()
});



mongoose.connect('mongodb://localhost/einn',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("database connected"));

app.listen(5000, ()=>{
    console.log("app started");
})