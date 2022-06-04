import ProCard from "@ant-design/pro-card";
import {Button, Col, Input, Row, Select} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import ArticleList from "@/pages/ArticleManage/Article/ArticleList";
import React from "react";
import CategoryList from "@/pages/ArticleManage/Category/CategoryList";
import AddCategory from "@/pages/ArticleManage/Category/AddCategory";

/** 文章分类管理 **/
const CategoryManage = () => {
  return(
    <ProCard
      tabs={{
        type: 'card',
      }}
    >
      <ProCard.TabPane key="categoryList" tab="分类列表">
        <CategoryList/>
      </ProCard.TabPane>
      <ProCard.TabPane key="addCategory" tab="新增分类">
        <AddCategory/>
      </ProCard.TabPane>
    </ProCard>
  );
}

export default CategoryManage;
