import React from 'react';
import ProCard from '@ant-design/pro-card';
import ArticleList from '@/pages/ArticleManage/Article/ArticleList';
import { Button, Col, Input, Row, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AlgoList from '@/pages/ProgramManage/Algo/AlgoList';
import AddAlgo from "@/pages/ProgramManage/Algo/AddAlgo";
import AlgoTag from "@/pages/ProgramManage/Algo/AlgoTag";
import SQLList from "@/pages/ProgramManage/SQL/SQLList";
import AddSQL from "@/pages/ProgramManage/SQL/AddSQL";
import SQLTag from "@/pages/ProgramManage/SQL/SQLTag";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AlgoManage = () => {
  return (
    <ProCard
      tabs={{
        type: 'card',
      }}
    >
      <ProCard.TabPane key="tab1" tab="SQL题列表">
        <ProCard
          title={
            <Row gutter={24}>
              <Col lg={8}>
                题目难度: &nbsp;
                <Select defaultValue="简单" onChange={handleChange} bordered={false}>
                  <Option value="简单">简单</Option>
                  <Option value="中等">中等</Option>
                  <Option value="困难">困难</Option>
                </Select>
              </Col>
              <Col lg={8}>
                题目标签: &nbsp;
                <Select
                  defaultValue="联表查询"
                  onChange={handleChange}
                  bordered={false}
                  mode="multiple"
                >
                  <Option value="联表查询">联表查询</Option>
                  <Option value="外连接">外连接</Option>
                  <Option value="内连接">内连接</Option>
                  <Option value="分组查询">分组查询</Option>
                  <Option value="左连接">左连接</Option>
                  <Option value="右连接">右连接</Option>
                </Select>
              </Col>
              <Col lg={8}>
                SQL题目: &nbsp;
                <Input style={{ width: '60%' }} placeholder="请输入SQL标题..." bordered={false} />
              </Col>
            </Row>
          }
          extra={
            <Button type={'primary'}>
              <SearchOutlined /> 查 询
            </Button>
          }
        >
          <SQLList />
        </ProCard>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="SQL题导入">
        <AddSQL/>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab3" tab="新增SQL题标签">
        <SQLTag />
      </ProCard.TabPane>
      <ProCard.TabPane key="tab4" tab="数据分析看板">
        敬请期待...
      </ProCard.TabPane>
    </ProCard>
  );
};

export default AlgoManage;
