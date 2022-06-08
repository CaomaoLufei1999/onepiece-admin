import {SettingDrawer} from '@ant-design/pro-layout';
import {PageLoading} from '@ant-design/pro-layout';
import {history, Link} from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import {currentUser as queryCurrentUser} from './services/ant-design-pro/api';
import defaultSettings from '../config/defaultSettings';
import {lang} from "moment";
import initialState from "@/.umi/plugin-initial-state/models/initialState";

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading/>,
};

// const httpErrorMessage = {
//   'en-US': {
//     200: 'The server successfully returned the requested data.',
//     201: 'Data is created or modified successfully. Procedure',
//     202: 'A request has been queued in the background (asynchronous task).',
//     204: 'Succeeded in deleting data. Procedure',
//     400: 'The server did not create or modify data.',
//     401: 'User does not have permission (wrong token, username, password).',
//     403: 'The user is authorized, but access is prohibited.',
//     404: 'The request was made for a nonexistent record, and the server did not act on it.',
//     406: 'The requested format is not available.',
//     410: 'The requested resource is permanently deleted and will not be retrieved.',
//     422: 'A validation error occurred while creating an object.',
//     500: 'An error occurred on the server. Check the server.',
//     502: 'Gateway error.',
//     503: 'The service is unavailable, the server is temporarily overloaded or maintained.',
//     504: 'The gateway timed out.',
//   },
//   'zh-CN': {
//     200: '服务器成功返回请求的数据。',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）。',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器。',
//     502: '网关错误。',
//     503: '服务不可用，服务器暂时过载或维护。',
//     504: '网关超时。',
//   }
// }
//
// // https://umijs.org/zh-CN/plugins/plugin-request
// const errorHandler = (error) => {
//   const {response} = error;
//   if (response && response.status) {
//     const errorText = httpErrorMessage[lang][response.status] || response.statusText;
//     message.error({
//       content: errorText,
//     });
//   }
//   return response;
// }
//
// export const request = {
//   errorHandler,
//   /** 请求拦截器，接收数组，可设置多个拦截器 **/
//   requestInterceptors: [
//     (_, options) => {
//       return {
//         options: {
//           ...options,
//           headers: {
//             ...(options?.headers ?? {}),
//             /** 这里获取自己的token携带在请求头上 **/
//             // Authorization: `bearer ${initialState?.auth?.[0]?.id_token}`,
//           },
//         },
//       };
//     },
//   ],
//   /** 相应拦截器，也接受数组 **/
//   responseInterceptors: [
//     async (response) => {
//       if (response) {
//         /** token过期的时候自动刷新获取新的token自动登录，当然这是根据自己页面的需求决定，大多都是token过期跳转登录页面，重新登陆 **/
//         if (response.status === 401) {
//
//         }
//         /** 后端规定了一些自定义返回的errorCode码，返回后端的自定义提示信息 **/
//         if (response.status === 200) {
//           const data = await response.clone().json();
//           if (data && data.messageCode) {
//             /** codeErrorMessage支持多语言环境的json文件，和httpErrorMessage 一样写法 **/
//             const errorText = codeErrorMessage[lang][data.messageCode] || codeErrorMessage[lang][10000];
//             message.error({
//               content: errorText,
//             })
//           }
//         }
//       } else {
//         message.error({
//           content: lang === 'zh-CN' ? '您的网络发生异常，无法连接服务器' : 'Your network is abnormal and you cannot connect to the server',
//         })
//       }
//       return response;
//     },
//   ],
// };

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-initial-state
 */
export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  }; // 如果不是登录页面，执行

  if (history.location.pathname !== loginPath) {
    // 获取登录用户基本信息
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
} // ProLayout 支持的api https://procomponents.ant.design/components/layout

export const layout = ({initialState, setInitialState}) => {
  return {
    rightContentRender: () => <RightContent/>,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer/>,
    onPageChange: () => {
      const {location} = history; // 如果没有登录，重定向到 login

      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
        // <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
        //   <LinkOutlined />
        //   <span>OpenAPI 文档</span>
        // </Link>,
        // <Link to="/~docs" key="docs">
        //   <BookOutlined />
        //   <span>业务组件文档</span>
        // </Link>,
      ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({...preInitialState, settings}));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};
