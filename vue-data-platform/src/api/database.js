// database.js
const mysql = require('mysql2'); // 使用 CommonJS 的 require 导入 mysql2

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  multipleStatements: true
});

// 连接数据库
connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err);
    return;
  }
  console.log('数据库连接成功');
});

// 导出 connection 对象
module.exports = connection;
