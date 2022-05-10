import React from 'react';
import ProCard from '@ant-design/pro-card';
import ArticleList from '@/pages/ArticleManage/Article/ArticleList';
import { Button, Col, Input, Row, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AlgoList from '@/pages/ProgramManage/Algo/AlgoList';

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
      <ProCard.TabPane key="tab1" tab="算法题列表">
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
                算法标签: &nbsp;
                <Select
                  defaultValue="动态规划"
                  onChange={handleChange}
                  bordered={false}
                  mode="multiple"
                >
                  <Option value="动态规划">动态规划</Option>
                  <Option value="回溯">回溯</Option>
                  <Option value="递归">递归</Option>
                  <Option value="二叉树">二叉树</Option>
                  <Option value="链表">链表</Option>
                  <Option value="排序">排序</Option>
                </Select>
              </Col>
              <Col lg={8}>
                算法题目: &nbsp;
                <Input style={{ width: '60%' }} placeholder="请输入算法标题..." bordered={false} />
              </Col>
            </Row>
          }
          extra={
            <Button type={'primary'}>
              <SearchOutlined /> 查 询
            </Button>
          }
        >
          <AlgoList />
        </ProCard>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="算法题导入">
        敬请期待...
      </ProCard.TabPane>
      <ProCard.TabPane key="tab3" tab="新增算法标签">
        敬请期待...
      </ProCard.TabPane>
      <ProCard.TabPane key="tab4" tab="数据分析看板">
        敬请期待...
      </ProCard.TabPane>
    </ProCard>
  );
};

export default AlgoManage;
