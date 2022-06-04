import {Table, Tag, Space, Dropdown, Menu} from 'antd';

const columns = [
  {
    title: '文章名称',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: '文章作者',
    dataIndex: 'author',
    key: 'author',
    render: text => <a>{text}</a>,
  },
  {
    title: '文章分类',
    dataIndex: 'category',
    key: 'category',
    render: category => <Tag color={"red"}>{category}</Tag>,
  },
  {
    title: '文章标签',
    dataIndex: 'tags',
    key: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          return (
            <Tag color={"blue"} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '文章状态',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <>
        {status.map(item => {
          let color = 'gray';
          let info = '已发布';
          if (item === 1) {
            color = 'green';
            info = '已加精';
          }
          if (item === 2) {
            color = 'yellow';
            info = '已置顶';
          }
          return (
            <Tag color={color} key={item}>
              {info}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '发布时间',
    key: 'date',
    dataIndex: 'date',
    render: date => <b>{date}</b>,
  },
  {
    title: '操作',
    key: 'action',
    render: () => (<Dropdown overlay={menu}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          More
        </Space>
      </a>
    </Dropdown>)
  },
];

const data = [
  {
    key: '1',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '2',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '3',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '4',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '5',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '6',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '7',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '8',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '9',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
  {
    key: '10',
    title: 'CSND年度总结——起飞的2021',
    category: '程序人生',
    tags: ['java','python','其他'],
    status: [0,1,2],
    author: '兴趣使然的草帽路飞',
    date: '2022-05-08 18:30:00',
  },
];

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" key={"delete"} rel="noopener noreferrer" href="https://www.antgroup.com">
            删 除
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" key={"top"} rel="noopener noreferrer" href="https://www.luohanacademy.com">
            置 顶
          </a>
        ),
        danger: true,
      },
      {
        danger: true,
        label: '加 精',
      },
    ]}
  />
);

export default () => <Table columns={columns} dataSource={data} />;
