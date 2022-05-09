import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/charts';

export default () => {
  const data = [
    {
      type: '2022-05-01',
      sales: 38,
    },
    {
      type: '2022-05-02',
      sales: 52,
    },
    {
      type: '2022-05-03',
      sales: 61,
    },
    {
      type: '2022-05-04',
      sales: 145,
    },
    {
      type: '2022-05-05',
      sales: 48,
    },
    {
      type: '2022-05-06',
      sales: 38,
    },
    {
      type: '2022-05-07',
      sales: 38,
    },
    {
      type: '2022-05-08',
      sales: 38,
    },
  ];
  const config = {
    data,
    autoFit:true,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '新增文章数',
      },
    },
  };
  return <Column {...config} />;
};

