import ProCard from "@ant-design/pro-card";
import {Button, Col, Input, Row, Select} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import ArticleList from "@/pages/ArticleManage/Article/ArticleList";
import React from "react";
import CategoryList from "@/pages/ArticleManage/Category/CategoryList";
import AddCategory from "@/pages/ArticleManage/Category/AddCategory";

const CategoryManage = () => {
  return(
    <ProCard
      tabs={{
        type: 'card',
      }}
    >
      <ProCard.TabPane key="tab1" tab="分类列表">
        <CategoryList/>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="新增分类">
        <AddCategory/>
      </ProCard.TabPane>
    </ProCard>
  );
}

export default CategoryManage;
