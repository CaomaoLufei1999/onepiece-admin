import ProCard from '@ant-design/pro-card';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    property: 'JVM名称',
    value: 'Java HotSpot(TM) 64-Bit Server VM',
  },
  {
    key: '2',
    property: 'Java版本',
    value: '1.8.0_111',
  },
  {
    key: '3',
    property: '启动时间',
    value: '2022-05-11 09:47:52',
  },
  {
    key: '4',
    property: '运行时长',
    value: '6天8小时30分钟',
  },
  {
    key: '5',
    property: '安装路径',
    value: '/usr/java/jdk1.8.0_111/jre',
  },
  {
    key: '6',
    property: '项目路径',
    value: '/home/csp/projects/onepiece',
  },
  {
    key: '7',
    property: '运行参数',
    value:
      '[-Dname=target/ruoyi.jar, -Duser.timezone=Asia/Shanghai, -Xms512m, -Xmx1024m, -XX:MetaspaceSize=128m, -XX:MaxMetaspaceSize=512m, -XX:+HeapDumpOnOutOfMemoryError, -XX:+PrintGCDateStamps, -XX:+PrintGCDetails, -XX:NewRatio=1, -XX:SurvivorRatio=30, -XX:+UseParallelGC, -XX:+UseParallelOldGC]',
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
