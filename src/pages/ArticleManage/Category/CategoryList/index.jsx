import {Table, Tag, Space, Button, Modal, Form, Input, Radio, Alert, Row, Col, Popconfirm} from 'antd';
import {useState} from "react";
import {getCategoryList} from '@/services/onepiece/onepiece-server';

/** 获取文章分类列表 **/
const categoryData = await getCategoryList({});

/** 文章分类列表 **/
export default () => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: '文章分类',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: category => <Tag color={"red"}>{category}</Tag>,
    },
    {
      title: '关联标签',
      dataIndex: 'tagInfoList',
      key: 'tagInfoList',
      render: tagInfoList => (
        <Row gutter={4}>
          {tagInfoList.map(tag => {
            return (
                <Tag color={"blue"} key={tag.tagId} >
                  {tag.tagName}
                </Tag>
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
            status === 1 ? <Tag color={"green"}>已生效</Tag> : <Tag color={"gray"}>未生效</Tag>
          }
        </>
      )
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      render: date => <b>{date}</b>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <a onClick={e => e.preventDefault()}>
          <Space>
            <Button type={"primary"} key={"update"} onClick={() => {
              setVisible(true);
            }}>修 改</Button>
            <Popconfirm title="你确定要删除这个分类吗?" onConfirm={() => handleDelete(record.categoryId)}>
              <Button type={"primary"} key={"delete"} danger={true}>删 除</Button>
            </Popconfirm>
          </Space>
        </a>)
    },
  ];

  /** 删除分类 **/
  const handleDelete = (key) => {
      console.log("要删除的分类id为：" + key)
  }

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
          name="updateCategory"
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
            <Input defaultValue="程序人生" key={"categoryName"} disabled/>
          </Form.Item>
          <Form.Item name="description" label="分类描述信息"
                     rules={[
                       {
                         required: true,
                         message: 'Please input the title of collection!',
                       },
                     ]}
          >
            <Input type="textarea" key={"description"} defaultValue="程序人生分类描述信息..."/>
          </Form.Item>
          <Form.Item name="modifier" className="collection-create-form_last-form-item">
            <Radio.Group>
              <Radio value="public" key={"public"} disabled={true}>立即生效</Radio>
              <Radio value="private" key={"private"} disabled={true}>暂不生效</Radio>
            </Radio.Group>
            <Alert
              style={{marginTop: 15}}
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
      <Table columns={columns} dataSource={categoryData.data}
             rowKey={(record) => record.categoryId}/>
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
