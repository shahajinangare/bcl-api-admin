var mysql = require('mysql');  
var connection = mysql.createPool({  
    host     : 'wealthmaker.cnnzchdzitct.ap-south-1.rds.amazonaws.com',
    user     : 'wealthmaker',
    password : 'Shahaji9867',
    database : 'bcl_online',
    port     : '3306' 
});  
module.exports = connection;  