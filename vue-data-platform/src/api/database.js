// database.js
import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err);
    return;
  }
  console.log('数据库连接成功');
});

export default connection; // 导出 connection 而不是 query
