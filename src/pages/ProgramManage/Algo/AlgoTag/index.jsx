import {Button, Card, Col, Form, Input, Modal, Row, Tag} from "antd";
import ProCard from "@ant-design/pro-card";
import {useState} from "react";

export default () => {
  const data = [
    {id: 0, tag: "动态规划"},
    {id: 1, tag: "回溯"},
    {id: 2, tag: "递归"},
    {id: 3, tag: "二叉树"},
    {id: 4, tag: "排序"},
    {id: 5, tag: "其他"},
    {id: 6, tag: "链表"},
    {id: 7, tag: "数组"},
    {id: 8, tag: "双向链表"},
    {id: 10, tag: "动态规划"},
    {id: 11, tag: "回溯"},
    {id: 12, tag: "递归"},
    {id: 13, tag: "二叉树"},
    {id: 14, tag: "排序"},
    {id: 15, tag: "其他"},
    {id: 16, tag: "链表"},
    {id: 17, tag: "数组"},
    {id: 18, tag: "双向链表"},
  ]
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ProCard
      title={"算法标签管理与录入..."}
      extra={<Button type={"primary"} onClick={showModal}>添加标签</Button>}
    >
      <Row gutter={[18,18]}>
        {
          data.map((item,index)=>(
            <Col>
              <Tag color={"green"} style={{fontSize:18}}>{item.tag}</Tag>
            </Col>
          ))
        }
      </Row>
      <Modal title="Basic Modal" okText="添加" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}
              // layout="vertical"
              name="form_in_modal"
        >
          <Form.Item label={"标签名称"} rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}>
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
    </ProCard>
  );
}
