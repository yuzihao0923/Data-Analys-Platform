import express from 'express';
import connection from '../server/database.js';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

// 确保数据库连接成功后启动服务器
connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err);
    process.exit(1); // 如果数据库连接失败，终止应用程序
  }
  console.log('数据库连接成功');

  // 获取所有数据库
  app.get('/databases', (_req, res) => {
    console.log('调用 connection.query 前');
    connection.query('SHOW DATABASES', (err, results) => {
      console.log('调用 connection.query 后');
      if (err) {
        console.error('获取数据库列表失败:', err);
        return res.status(500).json({ error: 'Failed to fetch databases' });
      }

      if (results.length === 0) {
        console.log('No databases found');
      }

      res.json(results);
    });
  });

  // 根据数据库名获取表
  app.get('/databases/:db/tables', (req, res) => {
    const dbName = req.params.db;
    connection.query('SHOW TABLES FROM ??', [dbName], (err, results) => {
      if (err) {
        console.error(`获取数据库 ${dbName} 的表失败:`, err);
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  // 根据表名获取数据
  app.get('/databases/:db/tables/:table', (req, res) => {
    const dbName = req.params.db;
    const tableName = req.params.table;
    connection.query(`SELECT * FROM ${dbName}.${tableName}`, (err, results) => {
      if (err) {
        console.error(`获取表 ${dbName}.${tableName} 的数据失败:`, err);
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  // 启动服务器
  app.listen(port, () => {
    console.log(`API 服务器正在运行在 http://localhost:${port}`);
  });
});
