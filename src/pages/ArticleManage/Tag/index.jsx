import ProCard from "@ant-design/pro-card";
import {Button} from "antd";
import TagList from "@/pages/ArticleManage/Tag/TagList";
import {useState} from "react";
import AddTag from "@/pages/ArticleManage/Tag/AddTag";

const TagManage = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  return(
    <ProCard
      title={'标签管理'}
      extra={
        <Button type={"primary"} key={"add"} onClick={() => {
          setVisible(true);
        }}>新增标签</Button>
      }
    >
      <TagList/>
      <AddTag
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </ProCard>
  );
}

export default TagManage;
