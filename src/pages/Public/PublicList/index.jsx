import {Table, Tag, Space, Dropdown, Menu, Button, Modal, Form, Input, Radio, Alert, Row, Col} from 'antd';
const { TextArea } = Input;
import {useState} from "react";

export default () => {
  const [visible, setVisible] = useState(false);
  const data = [
    {
      key: '1',
      title: '温馨提醒：2022-05-01 OnePiece新版本发布啦',
      status: '0',
      date: '2022-05-08',
    },
    {
      key: '1',
      title: '温馨提醒：2022-05-01 OnePiece新版本发布啦',
      status: '1',
      date: '2022-05-08',
    },
    {
      key: '1',
      title: '温馨提醒：2022-05-01 OnePiece新版本发布啦',
      status: '1',
      date: '2022-05-08',
    },
  ];
  const columns = [
    {
      title: '公告名称',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>
    },
    {
      title: '公告状态',
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

            <Button type={"primary"} onClick={() => {
              setVisible(true);
            }} danger>删 除</Button>
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
            label="公告名称"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input defaultValue="温馨提醒：2022-05-01 OnePiece新版本发布啦" />
          </Form.Item>
          <Form.Item name="description" label="公告内容"
                     rules={[
                       {
                         required: true,
                         message: 'Please input the title of collection!',
                       },
                     ]}
          >
            <TextArea rows={4} placeholder="请输入公告内容..." maxLength={6} />
          </Form.Item>
          <Form.Item name="modifier" className="collection-create-form_last-form-item">
            <Radio.Group>
              <Radio value="public" disabled={true}>立即生效</Radio>
              <Radio value="private" disabled={true}>暂不生效</Radio>
            </Radio.Group>
            <Alert
              style={{marginTop:15}}
              message="公告一旦发布生效便无法更新生效状态！若公告尚未生效，则可以在此操作，更新公告状态为已生效！"
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
