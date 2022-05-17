import ProCard from '@ant-design/pro-card';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    path: '/',
    file_system: 'ext4',
    type: '/',
    capacity_total: '39.2 GB',
    capacity_available: '21.7 GB',
    capacity_used: '17.6 GB',
    used_percent: '44.76%',
  },
];

const columns = [
  {
    title: '盘符路径',
    dataIndex: 'path',
    key: 'path',
    render: (path) => <b>{path}</b>,
  },
  {
    title: '文件系统',
    dataIndex: 'file_system',
    key: 'file_system',
    render: (file_system) => <b>{file_system}</b>,
  },
  {
    title: '盘符类型',
    dataIndex: 'type',
    key: 'type',
    render: (type) => <b>{type}</b>,
  },
  {
    title: '总容量',
    dataIndex: 'capacity_total',
    key: 'capacity_total',
    render: (capacity_total) => <b>{capacity_total}</b>,
  },
  {
    title: '可用容量',
    dataIndex: 'capacity_available',
    key: 'capacity_available',
    render: (capacity_available) => <b>{capacity_available}</b>,
  },
  {
    title: '已用容量',
    dataIndex: 'capacity_used',
    key: 'capacity_used',
    render: (capacity_used) => <b>{capacity_used}</b>,
  },
  {
    title: '已用百分比',
    dataIndex: 'used_percent',
    key: 'used_percent',
    render: (used_percent) => <b>{used_percent}</b>,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
