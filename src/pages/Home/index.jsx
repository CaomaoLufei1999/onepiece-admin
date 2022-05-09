import {PageContainer} from "@ant-design/pro-layout";
import BaseDataOverview from "@/pages/Home/BaseDataOverview";
import ArticleDataOverview from "@/pages/Home/ArticleDataOverview";
import ArticleDataChart from "@/pages/Home/ArticleDataChart";
import React from 'react';
import {Row} from "antd"

const Home = () => {
  return (
    <>
      <Row>
        <BaseDataOverview/>
      </Row>
      <Row style={{marginTop: 15}}>
        <ArticleDataChart/>
      </Row>
      <Row style={{marginTop: 15}}>
        <ArticleDataOverview/>
      </Row>
    </>
  );
}
export default Home;
