import {Table, Tag, Space, Button, Modal, Form, Input, Radio, Alert, Row, Col, Popconfirm, message} from 'antd';
import {useState} from "react";
import {addTag, deleteTag, getTagList} from "@/services/onepiece/onepiece-server";
import {history, useIntl} from "umi";

/** 获取标签列表 **/
const tagData = await getTagList({});

/** 标签列表组件 **/
export default () => {
  const [visible, setVisible] = useState(false);
  /** 用于临时保存行数据 **/
  const [recordTemp, setRecordTemp] = useState(null);
  const intl = useIntl();

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
    {
      title: '关联文章总数',
      dataIndex: 'total',
      key: 'total',
      render: text => <a>{text}</a>,
    },
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
      render: (_, record) => (
        <a onClick={e => e.preventDefault()}>
          <Space>
            <Button type={"primary"} key={"update"} onClick={() => {
              /** 临时行数据 **/
              setRecordTemp(record);
              setVisible(true);
            }}>修 改</Button>
            <Popconfirm title="你确定要删除这个分类吗?" onConfirm={() => handleDelete(record.tagId)}>
              <Button type={"primary"} key={"delete"} danger={true}>删 除</Button>
            </Popconfirm>
          </Space>
        </a>)
    },
  ];

  /** 删除标签 **/
  const handleDelete = async (tagId) => {
    try {
      /** 删除标签 **/
      const result = await deleteTag(tagId);
      if (result.success) {
        message.success(result.code + ": 标签删除成功！请刷新页面重新加载数据！")
        // 页面刷新
        window.location.reload()
      } else {
        message.error(result.code + ": " + result.msg)
      }
    } catch (error) {
      const defaultAddCategoryFailureMessage = intl.formatMessage({
        id: 'pages.form.error',
        defaultMessage: '表单提交失败',
      });
      message.error(defaultAddCategoryFailureMessage);
    }
  }

  /** 修改标签 **/
  const handlUpdate = async (tagId) => {
    try {
      /** 删除标签 **/
      const result = await deleteTag(tagId);
      if (result.success) {
        message.success(result.code + ": 标签删除成功！请刷新页面重新加载数据！")
        // 页面刷新
        window.location.reload()
      } else {
        message.error(result.code + ": " + result.msg)
      }
    } catch (error) {
      const defaultAddCategoryFailureMessage = intl.formatMessage({
        id: 'pages.form.error',
        defaultMessage: '表单提交失败',
      });
      message.error(defaultAddCategoryFailureMessage);
    }
  }

  const CollectionCreateForm = ({visible, handlUpdate, onCancel}) => {
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
        handlUpdate={handlUpdate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}
