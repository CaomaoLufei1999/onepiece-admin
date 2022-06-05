import {Table, Tag, Space, Button, Modal, Form, Input, Radio, Alert, Row, Col} from 'antd';
import {useState} from "react";
import {getTagList} from "@/services/onepiece/onepiece-server";

/** 获取标签列表 **/
const tagData = await getTagList({});

/** 标签列表组件 **/
export default () => {
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: '标签名称',
      dataIndex: 'tagName',
      key: 'tagName',
      render: tagName => <Tag color={"blue"}>{tagName}</Tag>,
    },
    {
      title: '标签所属分类',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: category => <Tag color={"red"}>{category}</Tag>,
    },
    // {
    //   title: '关联文章总数',
    //   dataIndex: 'total',
    //   key: 'total',
    //   render: text => <a>{text}</a>,
    // },
    {
      title: '标签状态',
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
      render: () => (
        <a onClick={e => e.preventDefault()}>
          <Space>
            <Button type={"primary"} key={"update"} onClick={() => {
              setVisible(true);
            }}>修 改</Button>
            <Button type={"primary"} key={"delete"} danger={true}>删 除</Button>
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
        title="修改标签信息"
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
            label="标签标题"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input key={"tag_name"} defaultValue="umijs" disabled/>
          </Form.Item>
          <Form.Item
            name="title"
            label="标签所属分类"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input key={"category"} defaultValue="前端" disabled/>
          </Form.Item>
          <Form.Item name="description" label="标签描述信息"
                     rules={[
                       {
                         required: true,
                         message: 'Please input the title of collection!',
                       },
                     ]}
          >
            <Input type="textarea" key={"tag_description"} defaultValue="umijs标签描述信息..."/>
          </Form.Item>
          <Form.Item name="modifier" className="collection-create-form_last-form-item">
            <Radio.Group name={"status"}>
              <Radio value="public" disabled={true} key={"effect"}>立即生效</Radio>
              <Radio value="private" disabled={true} key={"un_effect"}>暂不生效</Radio>
            </Radio.Group>
          </Form.Item>
          <Alert
            style={{marginTop: 15}}
            message="标签一旦生效便无法更新生效状态！若标签尚未生效，则可以在此操作，更新标签状态为已生效！"
            type="warning"
          />
        </Form>
      </Modal>
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={tagData.data}
             rowKey={(record) => record.tagId}/>
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
