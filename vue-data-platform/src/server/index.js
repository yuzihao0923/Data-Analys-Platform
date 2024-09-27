const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 请求体

// 创建 MySQL 数据库连接
const db = mysql.createConnection({
  host: 'localhost',  // 数据库主机名
  user: 'root',       // 数据库用户名
  password: '123456', // 数据库密码
  database: 'movies' // 你的数据库名称
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed: ', err.stack);
    return;
  }
  console.log('MySQL connected as id ' + db.threadId);
});

// 定义一个 API 路由来获取数据
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM franchise'; // 你的查询语句
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results); // 返回查询结果给前端
  });
});

// 启动服务器
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
