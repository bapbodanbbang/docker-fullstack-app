const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'bapbodanbbang',
    password: 'alswo0613!',
    database: 'myapp'
});

export { pool };