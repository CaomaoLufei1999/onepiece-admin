import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '草帽路飞的开源项目',
  });
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'One Piece',
          title: 'One Piece',
          href: 'https://gitee.com/caoshipeng/onepiece',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <img src='https://gitee.com/ant-design/ant-design/widgets/widget_6.svg' alt='Fork me on Gitee'></img>,
          href: 'https://gitee.com/caoshipeng/onepiece',
          blankTarget: true,
        },
        {
          key: 'CSDN Blog',
          title: '作者博客',
          href: 'https://blog.csdn.net/weixin_43591980',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
