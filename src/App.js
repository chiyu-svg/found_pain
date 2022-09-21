import React, { useState, useEffect } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { syncProcess, getProcess } from './service';
import { closure } from './util';

function App() {
  const [oneProcess, setOneProcess] = useState(0);
  const [twoProcess, setTwoProcess] = useState(0);
  const [threeProcess, setThreeProcess] = useState(0);
  const [fourProcess, setFourProcess] = useState(0);
  const [fiveProcess, setFiveProcess] = useState(0);
  const columns = [
    {
      title: "时间",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "投资",
      key: "invest",
      dataIndex: "invest",
    },
    {
      title: "coding",
      key: "coding",
      dataIndex: "coding",
    },
    {
      title: "书籍博客教程",
      key: "blockCorse",
      dataIndex: "blockCorse",
    },
    {
      title: "视频教程",
      key: "videoCorse",
      dataIndex: "videoCorse",
    },
    {
      title: "总收益",
      key: "profit",
      dataIndex: "profit",
    },
    {
      title: "截止日期",
      key: "dateRange",
      dataIndex: "dateRange",
    },
    {
      title: "process",
      key: "process",
      dataIndex: "process",
    },
    {
      title: "操作",
      key: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        return (
          <>
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => addProcess(record)}
            ></Button>{" "}
            <Button
              icon={<MinusOutlined />}
              type="primary"
              danger
              ghost
              onClick={() => reduceProcess(record)}
            ></Button>
          </>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: 1,
      time: "一",
      invest: "500",
      coding: "0",
      blockCorse: "0",
      videoCorse: "0",
      profit: "500",
      dateRange: "2022-9-19 2023-9-19",
      process: oneProcess + "%",
    },
    {
      key: 2,
      time: "二",
      invest: "500",
      coding: "1000",
      blockCorse: "0",
      videoCorse: "0",
      profit: "1500",
      dateRange: "2023-9-19 2024-9-19",
      process: twoProcess + "%",
    },
    {
      key: 3,
      time: "三",
      invest: "1000",
      coding: "2000",
      blockCorse: "1000",
      videoCorse: "1000",
      profit: "4000",
      dateRange: "2024-9-19 2025-9-19",
      process: threeProcess + "%",
    },
    {
      key: 4,
      time: "四",
      invest: "3000",
      coding: "3000",
      blockCorse: "2000",
      videoCorse: "5000",
      profit: "13000",
      dateRange: "2025-9-19 2026-9-19",
      process: fourProcess + "%",
    },
    {
      key: 5,
      time: "五",
      invest: "5000",
      coding: "5000",
      blockCorse: "3000",
      videoCorse: "7000",
      profit: "20000",
      dateRange: "2026-9-19 2027-9-19",
      process: fiveProcess + "%",
    },
  ];
  useEffect(() => {
    getProcess().then(data => {
      const { message } = data;
      message.forEach(item => {
        const process = Number(item.process);
        switch(item.key){
          case 1:
            setOneProcess(process);
            break;
          case 2:
            setTwoProcess(process);
            break;
          case 3:
            setThreeProcess(process);
            break;
          case 4:
            setFourProcess(process);
            break;
          default:
            setFiveProcess(process);
        }
      });
    }).catch(err => {
      console.log(err);
    })
  }, [])
  function addProcess(record) {
      switch (record.key) {
        case 1:
          if(oneProcess < 100){
            closure(() => syncProcess(record.key, oneProcess + 10), 500);
            setOneProcess(oneProcess + 10);
          }
          break;
        case 2:
          if(twoProcess < 100){
            closure(() => syncProcess(record.key, twoProcess + 10), 500);
            setTwoProcess(twoProcess + 10);
          }
          break;
        case 3:
          if(threeProcess < 100){
            closure(() => syncProcess(record.key, threeProcess + 10), 500);
            setThreeProcess(threeProcess + 10);
          }
          break;
        case 4:
          if(fourProcess < 100){
            closure(() => syncProcess(record.key, fourProcess + 10), 500);
            setFourProcess(fourProcess + 10);
          }
          break;
        case 5:
          if(fiveProcess < 100){
            closure(() => syncProcess(record.key, fiveProcess + 10), 500);
            setFiveProcess(fiveProcess + 10);
          }
          break;
        default:
          return;
      }
  }
  function reduceProcess(record) {
      switch (record.key) {
        case 1:
          if(oneProcess > 0){
            closure(() => syncProcess(record.key, oneProcess - 10), 500);
            setOneProcess(oneProcess - 10);
          }
          break;
        case 2:
          if(twoProcess > 0){
            closure(() => syncProcess(record.key, twoProcess - 10), 500);
            setTwoProcess(twoProcess - 10);
          }
          break;
        case 3:
          if(threeProcess > 0){
            closure(() => syncProcess(record.key, threeProcess - 10), 500);
            setThreeProcess(threeProcess - 10);
          }
          break;
        case 4:
          if(fourProcess > 0){
            closure(() => syncProcess(record.key, fourProcess - 10), 500);
            setFourProcess(fourProcess - 10);
          }
          break;
        case 5:
          if(fiveProcess > 0){
            closure(() => syncProcess(record.key, fiveProcess - 10), 500);
            setFiveProcess(fiveProcess - 10);
          }
          break;
        default: 
          return;
      }
  }
  return (
    <>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}

export default App;
