import {Alert, Button, Form, Input, Radio} from "antd";

export default () => {
  const [form] = Form.useForm();
  return(
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
        <Input placeholder="请输入分类名称..."  />
      </Form.Item>
      <Form.Item name="description" label="分类描述信息"
                 rules={[
                   {
                     required: true,
                     message: 'Please input the title of collection!',
                   },
                 ]}
      >
        <Input type="textarea" placeholder="请输入分类描述信息..." />
      </Form.Item>
      <Form.Item name="modifier"
                 rules={[
                   {
                     required: true,
                     message: 'Please input the title of collection!',
                   },
                 ]}
      >
        <Radio.Group defaultValue={'private'}>
          <Radio value="public">立即生效</Radio>
          <Radio value="private">暂不生效</Radio>
        </Radio.Group>
        <Alert
          style={{marginTop:15}}
          message="分类一旦生效便无法更新生效状态！若分类尚未生效，则可以在此操作，更新分类状态为已生效！"
          type="warning"
        />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          创 建
        </Button>
      </Form.Item>
    </Form>
  );
}
