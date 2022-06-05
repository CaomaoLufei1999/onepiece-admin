import ProCard from "@ant-design/pro-card";
import {Button, message} from "antd";
import TagList from "@/pages/ArticleManage/Tag/TagList";
import {useState} from "react";
import AddTag from "@/pages/ArticleManage/Tag/AddTag";
import {addTag} from "@/services/onepiece/onepiece-server";

/** 标签管理 **/
const TagManage = () => {
  const [visible, setVisible] = useState(false);

  /** 表单提交 **/
  const handleSubmit = async (values) => {
    try {
      /** 新增标签 **/
      const result = await addTag({...values});
      if (result.success) {
        message.success(result.code + ": 标签创建成功！请刷新页面重新加载数据！")
      } else {
        message.error(result.code + ": " + result.msg)
        return;
      }
      /** Model窗口关闭 **/
      setVisible(false);
    } catch (error) {
      const defaultAddCategoryFailureMessage = intl.formatMessage({
        id: 'pages.form.error',
        defaultMessage: '表单提交失败',
      });
      message.error(defaultAddCategoryFailureMessage);
    }
  };

  return (
    <ProCard
      title={'标签管理'}
      extra={
        <Button type={"primary"} key={"addTag"} onClick={() => {
          setVisible(true);
        }}>新增标签</Button>
      }
    >
      <TagList/>
      {/** 新增标签Model **/}
      <AddTag
        visible={visible}
        handleSubmit={handleSubmit}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </ProCard>
  );
}

export default TagManage;
