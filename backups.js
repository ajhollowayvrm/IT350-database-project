const express = require('express')
const app = express()
const exec = require("child_process").exec;
var cors = require('cors')
var http = require('http')

app.use(cors())

//What does this return?
app.get('/mysql_backup', (req, res) => {
    var mysql_backup = exec('mysqldump -uroot -proot admin_db > admin_db_backup.sql'); 
    res.send(String(mysql_backup['pid']));
})

app.get('/mongo_backup', (req, res) => {
    var mongo_backup = exec('mongodump -d test -o ./mongodb_backup'); 
    res.send(String(mongo_backup['pid']));
})


app.get('/es_backup', (req, res) => {

    var options = {
        host: '192.168.50.29',
        port: 9200,
        path: '/_snapshot/backup/snapshot_1?wait_for_completion=true',
      };
      
      http.get(options, function(resp){
        resp.on('data', function(chunk){
          res.send(chunk);
        });
      }).on("error", function(e){
        console.log("Got error: " + e.message);
      });
})


app.listen(3000, () => console.log('Backup Server running on Port 3000'))