import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

export default () => {
  const data = [
    {
      type: '程序人生',
      value: 27,
    },
    {
      type: '算法题解',
      value: 25,
    },
    {
      type: '后端',
      value: 18,
    },
    {
      type: '前端',
      value: 15,
    },
    {
      type: '数据库',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    height: 300,
    // autoFit: true,
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

