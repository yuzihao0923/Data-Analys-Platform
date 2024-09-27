// api.js
import express from 'express';
import { query } from './server';
import connection from './server';
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get('/databases', (_req, res) => {
    query('SHOW DATABASES', (err, results) => {
      if (err) {
        console.error('获取数据库列表失败:', err); // 输出详细的错误信息
        return res.status(500).json({ error: 'Failed to fetch databases' });
      }
  
      if (results.length === 0) {
        console.log('No databases found'); // 当没有找到数据库时输出
        return res.json({ message: 'No databases available' });
      }
  
      console.log('数据库列表:', results); // 输出数据库列表
      res.json(results);
    });
  });
  

// 根据数据库名获取表
app.get('/databases/:db/tables', (req, res) => {
    const dbName = req.params.db;
    connection.query('SHOW TABLES FROM ??', [dbName], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
});
  
// 根据表名获取数据
app.get('/databases/:db/tables/:table', (req, res) => {
  const dbName = req.params.db;
  const tableName = req.params.table;
  query(`SELECT * FROM ${dbName}.${tableName}`, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API 服务器正在运行在 http://localhost:${port}`);
});
