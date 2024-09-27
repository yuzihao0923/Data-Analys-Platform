<template>
  <div>
    <h1>Developer Page</h1>
    
    <!-- 选择数据库 -->
    <h2>Select Database</h2>
    <select v-model="selectedDatabase" @change="fetchTables">
      <option value="" disabled>Select a database</option>
      <option v-for="db in databases" :key="db.Database" :value="db.Database">
        {{ db.Database }}
      </option>
    </select>

    <!-- 选择表 -->
    <div v-if="tables.length > 0">
      <h2>Select Table</h2>
      <select v-model="selectedTable" @change="fetchTableData">
        <option value="" disabled>Select a table</option>
        <option v-for="table in tables" :key="table.TableName" :value="table.TableName">
          {{ table.TableName }}
        </option>
      </select>
    </div>

    <!-- 表格数据 -->
    <div v-if="tableData.length > 0">
      <h2>Table Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th v-for="(value, key) in tableData[0]" :key="key">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableData" :key="row.id">
            <td v-for="(value, key) in row" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 当没有数据时显示 -->
    <div v-if="!databases.length && !isLoading">
      <p>No databases available.</p>
    </div>

    <div v-if="!tables.length && selectedDatabase && !isLoading">
      <p>No tables available in the selected database.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      databases: [],
      tables: [],
      selectedDatabase: '',
      selectedTable: '',
      tableData: [],
      isLoading: false // 加载状态
    };
  },
  methods: {
    // 获取数据库列表
    fetchDatabases() {
  fetch('http://localhost:3000/databases')
    .then(response => {
      if (!response.ok) {
        throw new Error('获取数据库列表失败');
      }
      return response.json();
    })
    .then(data => {
      console.log('获取到的数据库列表:', data); // 打印返回的数据
      this.databases = data;
    })
    .catch(error => {
      console.error(error); // 打印错误信息
    });
  },
    // 获取指定数据库的表
    fetchTables() {
      if (this.selectedDatabase) {
        this.isLoading = true;
        fetch(`http://localhost:3000/databases/${this.selectedDatabase}/tables`)
          .then(response => response.json())
          .then(data => {
            // 你可能需要调整这里的字段名称，确保后端返回的数据格式
            this.tables = data.map(item => ({
              TableName: item[`Tables_in_${this.selectedDatabase}`]
            }));
            this.isLoading = false;
          })
          .catch(error => {
            console.error('Error fetching tables:', error);
            this.isLoading = false;
          });
      }
    },
    // 获取指定表的数据
    fetchTableData() {
      if (this.selectedDatabase && this.selectedTable) {
        this.isLoading = true;
        fetch(`http://localhost:3000/databases/${this.selectedDatabase}/tables/${this.selectedTable}`)
          .then(response => response.json())
          .then(data => {
            this.tableData = data;
            this.isLoading = false;
          })
          .catch(error => {
            console.error('Error fetching table data:', error);
            this.isLoading = false;
          });
      }
    }
  },
  mounted() {
    // 页面加载时获取数据库列表
    this.fetchDatabases();
  }
};
</script>

<style scoped>
/* 样式可以自行定义 */
h1, h2 {
  margin-bottom: 10px;
}

select {
  padding: 8px;
  margin: 10px 0;
  font-size: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

p {
  color: #666;
  margin-top: 20px;
}
</style>
