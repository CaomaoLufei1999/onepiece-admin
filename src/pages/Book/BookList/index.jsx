import {Table, Tag, Space, Dropdown, Menu, Form, Modal, Input, Radio, Alert, Button, Select} from 'antd';
import React, {useState} from 'react';
import AlgoCodeEditor from "@/pages/ProgramManage/Algo/AlgoCodeEditor";
import AlgoDescriptionEditor from "@/pages/ProgramManage/Algo/AlgoDescriptionEditor";
import EditBook from "@/pages/Book/EditBook";

export default () => {
  const {Option} = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const columns = [
    {
      title: '书籍编号',
      dataIndex: 'number',
      key: 'number',
      render: (text) => <b>{text}</b>,
    },
    {
      title: '书名',
      dataIndex: 'book_name',
      key: 'book_name',
      render: (book_name) => <a>{book_name}</a>,
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      render: (author) => <span>{author}</span>,
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <span>{category}</span>,
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={'blue'} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '总阅读数',
      dataIndex: 'total',
      key: 'total',
      render: (total) => <b>{total}</b>,
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <EditBook/>
          <Button type={'primary'} danger>
            删 除
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      number: 1,
      book_name: '《深入理解Java虚拟机》 第3版',
      author: '周志明',
      category: '后端',
      tags: ['Java', 'Jvm'],
      total: 1299,
      date: '2022-05-08 18:30:00',
    },
  ];

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Button
              type={'primary'}
              onClick={() => {
                setVisible(true);
              }}
            >
              修 改
            </Button>
          ),
        },
        {
          label: (
            <Button type={'primary'} danger>
              删 除
            </Button>
          ),
        },
      ]}
    />
  );
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  const CollectionCreateForm = ({visible, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="修改算法题信息"
        okText="修改"
        cancelText="Cancel"
        onCancel={onCancel}
        width={1000}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="number"
            label="题号"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input defaultValue="1" disabled/>
          </Form.Item>
          <Form.Item
            name="title"
            label="标题"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input defaultValue="两数之和"/>
          </Form.Item>
          <Form.Item
            name="description"
            label="分类标签"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
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
          </Form.Item>
          <Form.Item name="modifier" label={"题目描述"} rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}>
            <AlgoDescriptionEditor/>
          </Form.Item>
          <Form.Item name="modifier2" label={"标准答案"} rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}>
            <AlgoCodeEditor/>
            <Alert type={"warning"} message={"目前只支持Java语言！其他语言尚未支持~"} style={{marginTop: 15}}/>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={data}/>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
