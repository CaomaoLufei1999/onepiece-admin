import React from 'react';
import ProCard from '@ant-design/pro-card';
import BookList from "@/pages/Book/BookList";
import EditBook from "@/pages/Book/EditBook";
import AddBook from "@/pages/Book/AddBook";

export default () => {
  return (
    <ProCard
      tabs={{
        type: 'card',
      }}
    >
      <ProCard.TabPane key="tab1" tab="书籍列表">
        <BookList/>
      </ProCard.TabPane>
      <ProCard.TabPane key="tab2" tab="书籍录入">
        <AddBook/>
      </ProCard.TabPane>
    </ProCard>
  );
};
