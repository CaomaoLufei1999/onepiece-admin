import React from 'react';
import ProCard from '@ant-design/pro-card';
import ArticleList from '@/pages/ArticleManage/Article/ArticleList';
import { Button, Col, Input, Row, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const ArticleManage = () => {
  return (
    <ProCard
      tabs={{
        type: 'card',
      }}
    >
      <ProCard.TabPane key="article_list" tab="文章列表">
        <ProCard
          title={
            <Row gutter={24}>
              <Col lg={6}>
                文章分类: &nbsp;
                <Select defaultValue="程序人生" onChange={handleChange} bordered={false}>
                  <Option value="程序人生">程序人生</Option>
                  <Option value="后端">后端</Option>
                  <Option value="前端">前端</Option>
                </Select>
              </Col>
              <Col lg={6}>
                文章标签: &nbsp;
                <Select
                  defaultValue="umijs"
                  onChange={handleChange}
                  bordered={false}
                  mode="multiple"
                >
                  <Option value="umijs">umijs</Option>
                  <Option value="java">java</Option>
                  <Option value="python">python</Option>
                </Select>
              </Col>
              <Col lg={6}>
                文章标题: &nbsp;
                <Input key={"articleName"} style={{ width: '60%' }} placeholder="请输入文章标题..." bordered={false} />
              </Col>
              <Col lg={6}>
                作者名称: &nbsp;
                <Input key={"author"} style={{ width: '60%' }} placeholder="请输入作者名称..." bordered={false} />
              </Col>
            </Row>
          }
          extra={
            <Button type={'primary'}>
              <SearchOutlined /> 查 询
            </Button>
          }
        >
          <ArticleList />
        </ProCard>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="文章数据分析">
        敬请期待...
      </ProCard.TabPane>
    </ProCard>
  );
};

export default ArticleManage;
