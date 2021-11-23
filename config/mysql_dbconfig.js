//Import mysql
const mysql = require('mysql')
const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '123456',
    database    : 'smartinvdb',
    port        : 3333
})

connection.connect((error) =>{
    if(!!error){
        console.log(error);
    }else{
        console.log('Database Connected Successfully')
    }
})

module.exports = connection