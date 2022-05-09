import React, { useState } from 'react';
import { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import { TeamOutlined, } from '@ant-design/icons';

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

export default () => {
  const [responsive, setResponsive] = useState(false);
  return (<RcResizeObserver key="resize-observer" onResize={(offset) => {
    setResponsive(offset.width < 596);
  }}>
    <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
      <StatisticCard statistic={{
        title: '用户总量',
        value: 2176,
        icon:<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQHnkq.png" alt="icon"/>,
      }}/>
      <StatisticCard statistic={{
        title: '文章总量',
        value: 475,
        icon: (<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQbPER.png" alt="icon"/>),
      }}/>
      <StatisticCard statistic={{
        title: '算法题总量',
        value: 87,
        icon: (<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQb9b9.png
" alt="icon"/>),
      }}/>
      <StatisticCard statistic={{
        title: 'SQL题总量',
        value: 1754,
        icon: (<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQb9b9.png" alt="icon"/>),
      }}/>
    </StatisticCard.Group>
  </RcResizeObserver>);
};
