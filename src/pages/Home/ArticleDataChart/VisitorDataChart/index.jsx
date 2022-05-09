import React from 'react';
import ProCard from '@ant-design/pro-card';
import {Col} from "antd";
import { Line } from '@ant-design/charts';

export default () => {
  return (<Line {...config} />);
};

// 折线图数据
const data = [
  { date: '2022-04-01', type: '日访问量', value: 300 },
  { date: '2022-04-02', type: '日访问量', value: 400 },
  { date: '2022-04-03', type: '日访问量', value: 350 },
  { date: '2022-04-04', type: '日访问量', value: 500 },
  { date: '2022-04-05', type: '日访问量', value: 990 },
  { date: '2022-04-06', type: '日访问量', value: 600 },
  { date: '2022-04-07', type: '日访问量', value: 70 },

  { date: '2022-04-08', type: '日访问量', value: 10 },
  { date: '2022-04-09', type: '日访问量', value: 40 },
  { date: '2022-04-10', type: '日访问量', value: 20 },
  { date: '2022-04-11', type: '日访问量', value: 50 },
  { date: '2022-04-12', type: '日访问量', value: 40 },
  { date: '2022-04-13', type: '日访问量', value: 60 },
  { date: '2022-04-14', type: '日访问量', value: 70 },

  { date: '2022-04-15', type: '日访问量', value: 11 },
  { date: '2022-04-16', type: '日访问量', value: 14 },
  { date: '2022-04-17', type: '日访问量', value: 12 },
  { date: '2022-04-18', type: '日访问量', value: 50 },
  { date: '2022-04-19', type: '日访问量', value: 14 },
  { date: '2022-04-20', type: '日访问量', value: 60 },
  { date: '2022-04-21', type: '日访问量', value: 17 },

  { date: '2022-04-22', type: '日访问量', value: 10 },
  { date: '2022-04-23', type: '日访问量', value: 20 },
  { date: '2022-04-24', type: '日访问量', value: 30 },
  { date: '2022-04-25', type: '日访问量', value: 50 },
  { date: '2022-04-26', type: '日访问量', value: 15 },
  { date: '2022-04-27', type: '日访问量', value: 60 },
  { date: '2022-04-28', type: '日访问量', value: 24 },
  { date: '2022-04-29', type: '日访问量', value: 24 },
  { date: '2022-04-30', type: '日访问量', value: 240 },
];
const config = {
  data,
  autoFit: true,
  xField: 'date',
  yField: 'value',
  smooth: true,
  label: {
  },
  seriesField: 'type',
  xAxis: {
    type: 'time',
    label: {
    },
  },
  yAxis: {
    label: {
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
  point: {
    size: 5,
    shape: 'diamond',
  },
};
