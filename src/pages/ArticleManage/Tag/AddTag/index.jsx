import {Alert, Form, Input, Modal, Radio, Select} from "antd";

const { Option, OptGroup } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();
  return(
    <Modal
      visible={visible}
      title="添加标签"
      okText="添加"
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
          <Input defaultValue="" placeholder={"请输入标签标题..."} />
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
          <Select defaultValue="程序人生" onChange={handleChange}>
              <Option value="程序人生">程序人生</Option>
              <Option value="前端">前端</Option>
              <Option value="后端">后端</Option>
              <Option value="数据库">数据库</Option>
              <Option value="其他">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item name="description" label="标签描述信息"
                   rules={[
                     {
                       required: true,
                       message: 'Please input the title of collection!',
                     },
                   ]}
        >
          <Input type="textarea" placeholder="请输入标签描述信息..." />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group defaultValue={'private'}>
            <Radio value="public" disabled={false}>立即生效</Radio>
            <Radio value="private" disabled={false}>暂不生效</Radio>
          </Radio.Group>
          <Alert
            style={{marginTop:15}}
            message="标签一旦生效便无法更新生效状态！若标签尚未生效，则可以在此操作，更新标签状态为已生效！"
            type="warning"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
