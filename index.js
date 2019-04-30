var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
     host : "db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com",
     user : "dummyUser",
     password : "dummyUser01",
     database : "db_intern"
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/',function(req,res){

  var userName=req.body.userName;
  var emailId=req.body.emailId;
  var phoneNo=req.body.phoneNo;
  var password=req.body.password;
var moment = require('moment');
var dateTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  res.write('You sent the name "' + req.body.userName+'".\n');
  res.write('You sent the email "' + req.body.emailId+'".\n');
  res.write('You sent the password "' + req.body.password+'".\n');

  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO userData (userName, emailId,phoneNo,password,dateTime) VALUES ('"+userName+"', '"+emailId+"','"+phoneNo+"', '"+password+"','"+dateTime+"')";
  con.query(sql, function (err, result) {
    if(err){  //we make sure theres an error (error obj)

          if(err.errno==1062){

  var sql = 'UPDATE userData SET userName ="' + req.body.userName+'",phoneNo="'+ req.body.phoneNo+'",password="' + req.body.password+'" WHERE emailId ="'+ req.body.emailId+'"';
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result.affectedRows + " record(s) updated");
  });
          res.end();

      }
          else{
              throw err;
          res.end();
        }
  }
    console.log("1 record inserted");
     res.end();
  });
  });
});
app.post('/search',function(req,res){
    var emailId=req.body.emailIs;
    console.log(emailId);
      res.write('You sent the email "' + req.body.emailIs+'".\n');
      con.connect(function(err) {
if (err) throw err;
con.query('SELECT * FROM userData WHERE emailId ="'+ req.body.emailIs+'"', function (err, result) {
if (err) throw err;
console.log(result);
});
});
});
app.listen(3000);
console.log("Running at Port 3000");
