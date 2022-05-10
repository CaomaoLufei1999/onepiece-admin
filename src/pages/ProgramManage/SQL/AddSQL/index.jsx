import {Alert, Button, Form, Input, Select} from "antd";
import AlgoDescriptionEditor from "@/pages/ProgramManage/Algo/AlgoDescriptionEditor";
import AlgoCodeEditor from "@/pages/ProgramManage/Algo/AlgoCodeEditor";
import React from "react";
const { Option } = Select;

export default () => {
  const [form] = Form.useForm();
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
        name="number"
        label="题号"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Input defaultValue="1" disabled />
      </Form.Item>
      <Form.Item
        name="title"
        label="标题"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Input placeholder="请输入SQL标题..." />
      </Form.Item>
      <Form.Item
        name="description"
        label="分类标签"
        rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}
      >
        <Select
          defaultValue="联表查询"
          onChange={handleChange}
          bordered={false}
          mode="multiple"
        >
          <Option value="联表查询">联表查询</Option>
          <Option value="外连接">外连接</Option>
          <Option value="内连接">内连接</Option>
          <Option value="分组查询">分组查询</Option>
          <Option value="左连接">左连接</Option>
          <Option value="右连接">右连接</Option>
        </Select>
      </Form.Item>
      <Form.Item name="modifier" label={"题目描述"} rules={[
        {
          required: true,
          message: 'Please input the title of collection!',
        },
      ]}>
        <AlgoDescriptionEditor/>
      </Form.Item>
      <Form.Item name="modifier2" label={"标准答案"} rules={[
        {
          required: true,
          message: 'Please input the title of collection!',
        },
      ]}>
        <AlgoCodeEditor/>
        <Alert type={"warning"} message={"目前只支持Java语言！其他语言尚未支持~"} style={{marginTop:15}}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" block>
          保存并导入
        </Button>
      </Form.Item>
    </Form>
  );
}
