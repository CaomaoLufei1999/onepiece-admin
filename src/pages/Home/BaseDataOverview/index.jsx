import React, {useState} from 'react';
import {StatisticCard} from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

/** 基础数据概览 **/
export default () => {
  /** 控制数据卡片排列方向 **/
  const [responsive, setResponsive] = useState(false);
  /** 根据屏幕尺寸调整卡片方向 **/
  return (<RcResizeObserver key="resize-observer" onResize={(offset) => {
    setResponsive(offset.width < 596);
  }}>
    <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
      <StatisticCard statistic={{
        title: '用户总量',
        value: 2176,
        icon: <img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQHnkq.png" alt="icon"/>,
      }}/>
      <StatisticCard statistic={{
        title: '文章总量',
        value: 475,
        icon: (<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQbPER.png" alt="icon"/>),
      }}/>
      <StatisticCard statistic={{
        title: '算法题总量',
        value: 87,
        icon: (<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQb9b9.png" alt="icon"/>),
      }}/>
      <StatisticCard statistic={{
        title: 'SQL题总量',
        value: 1754,
        icon: (<img style={imgStyle} src="https://s1.ax1x.com/2022/05/07/OQb9b9.png" alt="icon"/>),
      }}/>
    </StatisticCard.Group>
  </RcResizeObserver>);
};
