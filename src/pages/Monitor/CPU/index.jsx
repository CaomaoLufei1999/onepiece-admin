import ProCard from '@ant-design/pro-card';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    property: '核心数',
    value: '32',
  },
  {
    key: '2',
    property: '用户使用率',
    value: '99.5%',
  },
  {
    key: '3',
    property: '系统使用率',
    value: '0.5%',
  },
  {
    key: '4',
    property: '当前空闲率',
    value: '0.5%',
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
    title: '值',
    dataIndex: 'value',
    key: 'value',
    render: (value) => <b>{value}</b>,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
