let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expressjs_learn'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connected to database!!!');
    }
})

module.exports = connection;
