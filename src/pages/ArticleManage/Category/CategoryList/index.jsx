import {Table, Tag, Space, Dropdown, Menu, Button, Modal, Form, Input, Radio, Alert, Row, Col} from 'antd';
import {useState} from "react";


export default () => {
  const [visible, setVisible] = useState(false);
  const data = [
    {
      key: '1',
      category: '程序人生',
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      description: '程序人生分类...',
      status: '0',
      total: 52,
      date: '2022-05-08',
    },
    {
      key: '2',
      category: '后端',
      description: '后端分类...',
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      status: '1',
      total: 52,
      date: '2022-05-08',
    },
    {
      key: '3',
      category: '前端',
      description: '前端分类...',
      status: '1',
      total: 52,
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      date: '2022-05-08',
    },
    {
      key: '4',
      category: '数据库',
      description: '数据库分类...',
      status: '1',
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      total: 52,
      date: '2022-05-08',
    },
    {
      key: '5',
      category: '算法题解',
      description: '算法题解分类...',
      status: '1',
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      total: 52,
      date: '2022-05-08',
    },
    {
      key: '61',
      category: '学习笔记',
      description: '学习笔记分类...',
      status: '1',
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      total: 52,
      date: '2022-05-08',
    },
    {
      key: '7',
      category: '其他',
      description: '其他分类...',
      status: '0',
      tags: ['java', 'python', '其他', "javaScript", 'redis', 'mysql', 'oracle'],
      total: 52,
      date: '2022-05-08',
    },

  ];
  const columns = [
    {
      title: '文章分类',
      dataIndex: 'category',
      key: 'category',
      render: category => <Tag color={"red"}>{category}</Tag>,
    },
    {
      title: '关联标签',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <Row gutter={4}>
          {tags.map(tag => {
            return (
              <Col>
                <Tag color={"blue"} key={tag}>
                  {tag}
                </Tag>
              </Col>
            );
          })}
        </Row>
      ),
    },
    {
      title: '分类介绍',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '关联文章总数',
      dataIndex: 'total',
      key: 'total',
      render: text => <a>{text}</a>,
    },
    {
      title: '分类状态',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <>
          {
            status === '1' ? <Tag color={"green"}>已生效</Tag> : <Tag color={"gray"}>未生效</Tag>
          }
        </>
      )
    },
    {
      title: '创建时间',
      key: 'date',
      dataIndex: 'date',
      render: date => <b>{date}</b>,
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <a onClick={e => e.preventDefault()}>
          <Space>
            <Button type={"primary"} onClick={() => {
              setVisible(true);
            }}>修 改</Button>
            <Button type={"primary"} danger={true}>删 除</Button>
          </Space>
        </a>)
    },
  ];
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  const CollectionCreateForm = ({visible, onCreate, onCancel}) => {
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
          <Form.Item name="description" label="分类描述信息"
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
              <Radio value="public" disabled={true}>立即生效</Radio>
              <Radio value="private" disabled={true}>暂不生效</Radio>
            </Radio.Group>
            <Alert
              style={{marginTop:15}}
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
}
