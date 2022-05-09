import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import VisitorDataChart from "@/pages/Home/ArticleDataChart/VisitorDataChart";
import ArticleDataChart from "@/pages/Home/ArticleDataOverview/ArticleDataChart";
import ArticleDataChartByPie from "@/pages/Home/ArticleDataOverview/ArticleDataChartByPie";

const { Statistic } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);
  return (<RcResizeObserver key="resize-observer" onResize={(offset) => {
    setResponsive(offset.width < 596);
  }}>
    <ProCard title="数据概览" extra="2019年9月28日 星期五" split={responsive ? 'horizontal' : 'vertical'} headerBordered bordered>
      <ProCard split="horizontal">
        <ProCard split="horizontal">
          <ProCard split="vertical">
            <StatisticCard statistic={{
              title: '文章总数',
              value: 234,
              description: <Statistic title="较本月平均流量" value="8.04%" trend="down"/>,
            }}/>
            <StatisticCard statistic={{
              title: '今日新增文章数量',
              value: 234,
              description: <Statistic title="月同比" value="8.04%" trend="up"/>,
            }}/>
          </ProCard>
          <ProCard split="vertical">
            <StatisticCard statistic={{
              title: '分类总数',
              value: '56',
              suffix: '个',
            }}/>
            <StatisticCard statistic={{
              title: '标签总数',
              value: '134',
              suffix: '个',
            }}/>
          </ProCard>
        </ProCard>
        <StatisticCard title="近7天文章新增概览" chart={<ArticleDataChart/>}/>
      </ProCard>
      <ProCard split="horizontal">
        <ProCard split="vertical" size={"small"}>
          <StatisticCard title="文章分类占比情况" chart={<ArticleDataChartByPie/>}/>
        </ProCard>
        <ProCard split="vertical" size={"small"}>
          <StatisticCard title="文章标签占比情况" chart={<ArticleDataChartByPie/>}/>
        </ProCard>
      </ProCard>
    </ProCard>
  </RcResizeObserver>);
};
