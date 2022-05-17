import { Col, Row, Space, Table } from 'antd';
import ProCard from '@ant-design/pro-card';
import CPU from '@/pages/Monitor/CPU';
import RAM from '@/pages/Monitor/RAM';
import ServerInfo from '@/pages/Monitor/ServerInfo';
import JVM from '@/pages/Monitor/JVM';
import DISK from '@/pages/Monitor/DISK';

export default () => {
  return (
    <ProCard ghost gutter={[16, 16]} wrap={true}>
      <ProCard colSpan={12} bordered title={'CPU信息'}>
        <CPU />
      </ProCard>
      <ProCard colSpan={12} bordered title={'内存信息'}>
        <RAM />
      </ProCard>
      <ProCard colSpan={24} bordered title={'服务器信息'}>
        <ServerInfo />
      </ProCard>
      <ProCard colSpan={24} bordered title={'磁盘信息'}>
        <DISK />
      </ProCard>
      <ProCard colSpan={24} bordered title={'Java虚拟机信息'}>
        <JVM />
      </ProCard>
    </ProCard>
  );
};
