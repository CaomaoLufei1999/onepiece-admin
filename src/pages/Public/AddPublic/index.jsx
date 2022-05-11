import {Alert, Form, Input, Radio} from "antd";
const { TextArea } = Input;
import {useState} from "react";

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
  );
}
