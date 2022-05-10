import {Table, Tag, Space, Dropdown, Menu, Form, Modal, Input, Radio, Alert, Button, Select} from 'antd';
import React, { useState } from 'react';
import AlgoCodeEditor from "@/pages/ProgramManage/Algo/AlgoCodeEditor";
import AlgoDescriptionEditor from "@/pages/ProgramManage/Algo/AlgoDescriptionEditor";
export default () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const columns = [
    {
      title: '题号',
      dataIndex: 'number',
      key: 'number',
      render: (text) => <b>{text}</b>,
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '难度',
      dataIndex: 'level',
      key: 'level',
      render: (level) =>
        level === '0' ? (
          <Tag color={'green'}>简单</Tag>
        ) : level === '1' ? (
          <Tag color={'yellow'}>中等</Tag>
        ) : (
          <Tag color={'red'}>困难</Tag>
        ),
    },
    {
      title: '分类标签',
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
      title: '题解数量',
      dataIndex: 'total',
      key: 'total',
      render: (total) => <b>{total}</b>,
    },
    {
      title: '通过率',
      dataIndex: 'pass',
      key: 'pass',
      render: (pass) => <span style={{ color: 'red' }}>{pass}</span>,
    },
    {
      title: '发布时间',
      key: 'date',
      dataIndex: 'date',
      render: (date) => <b>{date}</b>,
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>More</Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      number: 1,
      title: '两表关联查询',
      level: '0',
      tags: ['外连接', '关联查询', '多表查询'],
      total: 12,
      pass: '19%',
      date: '2022-05-08 18:30:00',
    },
    {
      key: '2',
      number: 1,
      title: '多表关联查询',
      level: '1',
      tags: ['外连接', '关联查询', '多表查询'],
      total: 20,
      pass: '19%',
      date: '2022-05-08 18:30:00',
    },
    {
      key: '3',
      number: 1,
      title: '外连接',
      level: '2',
      tags: ['外连接', '关联查询', '多表查询'],
      total: 99,
      pass: '19%',
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
  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
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
            <Input defaultValue="1" disabled />
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
            <Input defaultValue="两数之和" />
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
            <Alert type={"warning"} message={"目前只支持Java语言！其他语言尚未支持~"} style={{marginTop:15}}/>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
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
