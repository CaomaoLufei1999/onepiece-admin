import {Alert, Form, Input, Modal, Radio, Select} from "antd";
import {getCategoryIds, getCategoryList} from "@/services/onepiece/onepiece-server";

const {Option} = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

/** 获取文章分类id列表 **/
const categoryIds = await getCategoryIds({});

/** 渲染文章id列表到Select **/
const options = categoryIds.data.map(item => {
  return (
    <Option key={item.category_id} value={item.category_id}>{item.category_name}</Option>
  )
})

/** 新增标签组件 **/
export default ({visible, handleSubmit, onCancel}) => {
  const [form] = Form.useForm();
  return (
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
            handleSubmit(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="addTag"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="tagName"
          label="标签标题"
          rules={[
            {
              required: true,
              message: '标签标题不可以为空!',
            },
          ]}
        >
          <Input placeholder={"请输入标签标题..."}/>
        </Form.Item>
        <Form.Item
          name="categoryId"
          label="标签所属分类"
          rules={[
            {
              required: true,
              message: '标签所属分类不可以为空!',
            },
          ]}
        >
          <Select onChange={handleChange}>
            {options}
          </Select>
        </Form.Item>
        <Form.Item name="status"
                   label="标签状态"
                   rules={[
                     {
                       required: true,
                       message: '标签状态不可以为空!',
                     },
                   ]}>
          <Radio.Group>
            <Radio value="1" key={"effect"}>立即生效</Radio>
            <Radio value="0" key={"un_effect"}>暂不生效</Radio>
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
}
