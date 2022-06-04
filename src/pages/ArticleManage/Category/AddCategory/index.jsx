import {Alert, Button, Form, Input, message, Radio} from "antd";
import {history, useIntl} from "umi";
import {addCategory} from "@/services/onepiece/onepiece-server";

/** 新增文章分类 **/
export default () => {
  const [form] = Form.useForm();
  const intl = useIntl();

  /** 表单提交 **/
  const handleSubmit = async (values) => {
    try {
      // 提交新建分类请求
      const result = await addCategory({...values});
      console.log(result);
      if (result.success === true) {
        message.success("分类创建成功！刷新页面重新加载数据！")
        // 清空表单
        form.resetFields();

        // 页面跳转
        if (!history) return;
        const {query} = history.location;
        const {redirect} = query;
        history.push(redirect || '/admin/manage/category');
      }
    } catch (error) {
      console.log(error);
      const defaultAddCategoryFailureMessage = intl.formatMessage({
        id: 'pages.form.error',
        defaultMessage: '表单提交失败',
      });
      message.error(defaultAddCategoryFailureMessage);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="addCategoryFrom"
      initialValues={{
        modifier: 'public',
      }}
      onFinish={async (values) => {
        await handleSubmit(values);
      }}
    >
      <Form.Item
        name="categoryName"
        label="分类标题"
        rules={[
          {
            required: true,
            message: '分类名称不能为空!',
          },
        ]}
      >
        <Input key={"categoryName"} placeholder="请输入分类名称..."/>
      </Form.Item>
      <Form.Item name="description" label="分类描述信息"
                 rules={[
                   {
                     required: true,
                     message: '分类描述不能为空!',
                   },
                 ]}
      >
        <Input type="textarea" key={"description"} placeholder="请输入分类描述信息..."/>
      </Form.Item>
      <Form.Item name="status"
                 rules={[
                   {
                     required: true,
                     message: '分类生效状态不能为空!',
                   },
                 ]}
      >
        <Radio.Group name={"status"}>
          <Radio value="1" key={"effect"}>立即生效</Radio>
          <Radio value="0" key={"un_effect"}>暂不生效</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" key={"submit"} htmlType={"submit"}>
          创 建
        </Button>
      </Form.Item>
      <Alert
        style={{marginTop: 15}}
        message="分类一旦生效便无法更新生效状态！若分类尚未生效，则可以在此操作，更新分类状态为已生效！"
        type="warning"
      />
    </Form>
  );
}
