import ProCard from "@ant-design/pro-card";
import {Alert, Button, Form, Input, Modal, Radio} from "antd";
import PublicList from "@/pages/Public/PublicList";
const { TextArea } = Input;
import {useState} from "react";

const Public = () => {
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
            <Input placeholder="请输入公告标题..." />
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
            <Radio.Group defaultValue={'private'}>
              <Radio value="public" >立即生效</Radio>
              <Radio value="private">暂不生效</Radio>
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

  return(
    <ProCard
      title={"公告管理"}
      extra={
        <Button type={"primary"} onClick={() => {
          setVisible(true);
        }}>新增公告</Button>
      }
    >
      <PublicList/>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </ProCard>
  )
}

export default Public;
