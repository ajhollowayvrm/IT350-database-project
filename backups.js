const express = require('express')
const app = express()
const exec = require("child_process").exec;


//What does this return?
app.get('/mysql_backup', (req, res) => {
    var mysql_backup = exec('mysqldump -uroot -proot admin_db > admin_db_backup.sql'); 
    console.log(mysql_backup);
})

app.get('/mongo_backup', (req, res) => {
    var mongo_backup = exec('mongodump -d test -o ./mongodb_backup'); 
    res.send(String(mongo_backup['pid']));
})


app.get('/es_backup', (req, res) => {
    request({
        uri: '192.168.50.29:9200/_snapshot/backup/snapshot_1?wait_for_completion=true',
    }).pipe(res);
})


app.listen(3000, () => console.log('Backup Server running on Port 3000'))