import React, { useRef } from 'react';
import { Button, message } from 'antd';
import ProForm, {
  DrawerForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormTextArea, ProFormUploadDragger,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export default () => {
  const formRef = useRef();
  return (<DrawerForm title="修改书籍信息" formRef={formRef} trigger={<Button type="primary">
    <PlusOutlined />
    新增书籍
  </Button>} autoFocusFirstInput drawerProps={{
    destroyOnClose: true,
  }} submitTimeout={2000} onFinish={async (values) => {
    await waitTime(2000);
    console.log(values.name);
    message.success('提交成功');
    // 不返回不会关闭弹框
    return true;
  }}>
    <ProForm.Group>
      <ProFormText name="book_name" width="md" label="书籍名称" tooltip="书籍名称信息" placeholder="请输入名称..." rules={[{ required: true, message: 'Please select your country!' }]}/>
      <ProFormText width="md" name="author" label="作者名称" placeholder="请输入作者名称..." rules={[{ required: true, message: 'Please select your country!' }]}/>
    </ProForm.Group>
    <ProForm.Group>
      <ProFormText width="xl" name="buy_url" label="首图CDN地址" tooltip="首图尺寸限制：xxxx" placeholder="请输入..." rules={[{ required: true, message: 'Please select your country!' }]}/>
    </ProForm.Group>
    <ProForm.Group>
      <ProFormSelect options={[
        {
          value: '后端',
          label: '后端',
        },
        {
          value: '前端',
          label: '前端',
        },
        {
          value: '数据库',
          label: '数据库',
        },
        {
          value: '程序人生',
          label: '程序人生',
        },
        {
          value: '算法题解',
          label: '算法题解',
        },
      ]} width="md" name="category" label="书籍分类" rules={[{ required: true, message: 'Please select your country!' }]}/>
      <ProFormSelect width="md" options={[
        {
          value: 'Java',
          label: 'Java',
        },
        {
          value: 'Jvm',
          label: 'Jvm',
        },
        {
          value: 'JavaScript',
          label: 'JavaScript',
        },
      ]} name="tags" label="书籍标签" mode="multiple" rules={[{ required: true, message: 'Please select your country!' }]} />
    </ProForm.Group>
    <ProFormTextArea width="xl" name="description" label="书籍描述" rules={[{ required: true, message: 'Please select your country!' }]} />
    <ProFormUploadDragger max={1} label="电子书PDF文件" name="img" rules={[{ required: true, message: 'Please select your country!' }]} />
  </DrawerForm>);
};
