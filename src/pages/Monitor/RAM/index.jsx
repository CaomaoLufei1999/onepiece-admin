import ProCard from '@ant-design/pro-card';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    property: '总内存',
    value: '7.56G',
    jvm: '990.5M',
  },
  {
    key: '2',
    property: '已用内存',
    value: '4.55G',
    jvm: '619.01M',
  },
  {
    key: '3',
    property: '剩余内存',
    value: '3.01G',
    jvm: '371.49M',
  },
  {
    key: '4',
    property: '使用率',
    value: '60.22%',
    jvm: '62.49%',
  },
];

const columns = [
  {
    title: '属性',
    dataIndex: 'property',
    key: 'property',
    render: (property) => <b>{property}</b>,
  },
  {
    title: '内存',
    dataIndex: 'value',
    key: 'value',
    render: (value) => <b>{value}</b>,
  },
  {
    title: 'JVM',
    dataIndex: 'jvm',
    key: 'jvm',
    render: (jvm) => <b>{jvm}</b>,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
