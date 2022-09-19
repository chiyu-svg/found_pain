import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '时间',
    key: 'time',
    dataIndex: 'time'
  },
  {
    title: '投资',
    key: 'invest',
    dataIndex: 'invest'
  },
  {
    title: 'coding',
    key: 'coding',
    dataIndex: 'coding'
  },
  {
    title: '书籍博客教程',
    key: 'blockCorse',
    dataIndex: 'blockCorse'
  },
  {
    title: '视频教程',
    key: 'videoCorse',
    dataIndex: 'videoCorse'
  },
  {
    title: '总收益',
    key: 'profit',
    dataIndex: 'profit'
  },
  {
    title: '截止日期',
    key: 'dateRange',
    dataIndex: 'dateRange'
  }
]
const dataSource = [
  {
    key: 1,
    time: '一',
    invest: '500',
    coding: '0',
    blockCorse: '0',
    videoCorse: '0',
    profit: '500',
    dateRange: '2022-9-19 2023-9-19'
  },
  {
    key: 2,
    time: '二',
    invest: '500',
    coding: '1000',
    blockCorse: '0',
    videoCorse: '0',
    profit: '1500',
    dateRange: '2023-9-19 2024-9-19'
  },
  {
    key: 3,
    time: '三',
    invest: '1000',
    coding: '2000',
    blockCorse: '1000',
    videoCorse: '1000',
    profit: '4000',
    dateRange: '2024-9-19 2025-9-19'
  },
  {
    key: 4,
    time: '四',
    invest: '3000',
    coding: '3000',
    blockCorse: '2000',
    videoCorse: '5000',
    profit: '13000',
    dateRange: '2025-9-19 2026-9-19'
  },
  {
    key: 5,
    time: '五',
    invest: '5000',
    coding: '5000',
    blockCorse: '3000',
    videoCorse: '7000',
    profit: '20000',
    dateRange: '2026-9-19 2027-9-19'
  }
]
function App() {
  return (
    <>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}

export default App;
