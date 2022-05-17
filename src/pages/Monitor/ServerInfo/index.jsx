import ProCard from '@ant-design/pro-card';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    property: '服务器名称',
    value: 'iZwz94p7mycommzd52gme4Z',
  },
  {
    key: '2',
    property: '操作系统',
    value: 'Linux',
  },
  {
    key: '3',
    property: '系统架构',
    value: 'amd64',
  },
  {
    key: '4',
    property: '服务器IP',
    value: '172.18.179.171',
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
