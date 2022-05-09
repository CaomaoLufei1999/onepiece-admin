import React from 'react';
import ProCard from '@ant-design/pro-card';
import {Col} from "antd";
import { Line } from '@ant-design/charts';
import VisitorDataChart from "@/pages/Home/ArticleDataChart/VisitorDataChart";
import UserDataChart from "@/pages/Home/ArticleDataChart/UserDataChart";

export default () => {
  return (<ProCard tabs={{
    type: 'card',
  }}>
    <ProCard.TabPane key="tab1" tab="日访问量统计">
      <Col span={24} lg={24} md={24}>
        <VisitorDataChart/>
      </Col>
    </ProCard.TabPane>
    <ProCard.TabPane key="tab2" tab="新增文章数量统计">
      <Col span={24} lg={24} md={24}>
        <Line {...config} />
      </Col>
    </ProCard.TabPane>
    <ProCard.TabPane key="tab3" tab="新增用户数量统计">
      <Col span={24} lg={24} md={24}>
        <UserDataChart />
      </Col>
    </ProCard.TabPane>
  </ProCard>);
};

// 折线图数据
const data = [
  { date: '2022-04-01', type: '新增文章数量', value: 30 },
  { date: '2022-04-02', type: '新增文章数量', value: 40 },
  { date: '2022-04-03', type: '新增文章数量', value: 35 },
  { date: '2022-04-04', type: '新增文章数量', value: 50 },
  { date: '2022-04-05', type: '新增文章数量', value: 99 },
  { date: '2022-04-06', type: '新增文章数量', value: 60 },
  { date: '2022-04-07', type: '新增文章数量', value: 70 },

  { date: '2022-04-08', type: '新增文章数量', value: 1 },
  { date: '2022-04-09', type: '新增文章数量', value: 4 },
  { date: '2022-04-10', type: '新增文章数量', value: 2 },
  { date: '2022-04-11', type: '新增文章数量', value: 5 },
  { date: '2022-04-12', type: '新增文章数量', value: 4 },
  { date: '2022-04-13', type: '新增文章数量', value: 6 },
  { date: '2022-04-14', type: '新增文章数量', value: 7 },

  { date: '2022-04-15', type: '新增文章数量', value: 11 },
  { date: '2022-04-16', type: '新增文章数量', value: 14 },
  { date: '2022-04-17', type: '新增文章数量', value: 12 },
  { date: '2022-04-18', type: '新增文章数量', value: 5 },
  { date: '2022-04-19', type: '新增文章数量', value: 14 },
  { date: '2022-04-20', type: '新增文章数量', value: 6 },
  { date: '2022-04-21', type: '新增文章数量', value: 17 },

  { date: '2022-04-22', type: '新增文章数量', value: 1 },
  { date: '2022-04-23', type: '新增文章数量', value: 2 },
  { date: '2022-04-24', type: '新增文章数量', value: 3 },
  { date: '2022-04-25', type: '新增文章数量', value: 5 },
  { date: '2022-04-26', type: '新增文章数量', value: 15 },
  { date: '2022-04-27', type: '新增文章数量', value: 6 },
  { date: '2022-04-28', type: '新增文章数量', value: 24 },
  { date: '2022-04-29', type: '新增文章数量', value: 24 },
  { date: '2022-04-30', type: '新增文章数量', value: 24 },
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
