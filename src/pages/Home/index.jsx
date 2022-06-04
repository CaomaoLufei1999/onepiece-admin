import BaseDataOverview from "@/pages/Home/BaseDataOverview";
import ArticleDataOverview from "@/pages/Home/ArticleDataOverview";
import ArticleDataChart from "@/pages/Home/ArticleDataChart";
import React from 'react';
import {Row} from "antd"

/** 后台首页 **/
const Home = () => {
  return (
    <>
      <Row>
        {/** 基础数据概览 **/}
        <BaseDataOverview/>
      </Row>
      <Row style={{marginTop: 15}}>
        {/** 访问量/文章/用户趋势图图表 **/}
        <ArticleDataChart/>
      </Row>
      <Row style={{marginTop: 15}}>
        {/** 文章数据概览 **/}
        <ArticleDataOverview/>
      </Row>
    </>
  );
}
export default Home;
