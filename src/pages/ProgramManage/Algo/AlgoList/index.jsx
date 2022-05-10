import { Table, Tag, Space, Dropdown, Menu, Form, Modal, Input, Radio, Alert, Button } from 'antd';
import { useState } from 'react';
export default () => {
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
      title: 'CSND年度总结——起飞的2021',
      level: '0',
      tags: ['动态规划', '回溯', '递归'],
      total: 12,
      pass: '19%',
      date: '2022-05-08 18:30:00',
    },
    {
      key: '2',
      number: 1,
      title: 'CSND年度总结——起飞的2021',
      level: '1',
      tags: ['二叉树', '链表', '其他'],
      total: 20,
      pass: '19%',
      date: '2022-05-08 18:30:00',
    },
    {
      key: '3',
      number: 1,
      title: 'CSND年度总结——起飞的2021',
      level: '2',
      tags: ['排序', '深度优先遍历', '图'],
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
        title="修改分类信息"
        okText="修改"
        cancelText="Cancel"
        onCancel={onCancel}
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
            name="title"
            label="分类标题"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input defaultValue="程序人生" disabled />
          </Form.Item>
          <Form.Item
            name="description"
            label="分类描述信息"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input type="textarea" defaultValue="程序人生分类描述信息..." />
          </Form.Item>
          <Form.Item name="modifier" className="collection-create-form_last-form-item">
            <Radio.Group>
              <Radio value="public" disabled={true}>
                立即生效
              </Radio>
              <Radio value="private" disabled={true}>
                暂不生效
              </Radio>
            </Radio.Group>
            <Alert
              style={{ marginTop: 15 }}
              message="分类一旦生效便无法更新生效状态！若分类尚未生效，则可以在此操作，更新分类状态为已生效！"
              type="warning"
            />
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
