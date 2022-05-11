import ProCard from "@ant-design/pro-card";
import {
  Button,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Menu,
  Space,
  Table,
  Tabs,
  Tag,
  Radio,
  Row,
  Col,
  Avatar,
  Comment,
  Form,
  Input,
  Alert,
} from 'antd';
import {QuestionCircleOutlined} from "@ant-design/icons";

export default () => {
  const {TextArea} = Input;
  const Editor = ({onChange, onSubmit, submitting, value}) => (
    <>
      <Form.Item>
        <TextArea rows={8} onChange={onChange} value={value}/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          一键群发
        </Button>
      </Form.Item>
    </>
  );

  return (
    <ProCard
      title={"消息群发"}
    >
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
        content={
          <Editor
            // onChange={this.handleChange}
            // onSubmit={this.handleSubmit}
            // submitting={submitting}
            // value={value}
          />
        }
      />
      <Alert
        message={
          <span>
                  <QuestionCircleOutlined/> 群发功能提示
                </span>
        }
        description="为防止社区恶意消息群发，管理员每周只能群发3次消息，且有字数限制，请珍惜群发次数！"
        type="warning"
        style={{marginTop: 15}}
      />
    </ProCard>
  )
}
