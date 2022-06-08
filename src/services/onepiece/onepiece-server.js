// @ts-ignore

/* eslint-disable */
import {request} from 'umi';

/** 向后端索要微信登录授权链接地址url **/
export async function getWeChatLoginUrl() {
  return request('/onepiece/open-wechat/getLoginUrl', {
    method: 'GET',
  });
}

/** 删除标签 **/
export async function deleteTag(tagId) {
  console.log(tagId)
  return request('/onepiece/tag/delete/' + tagId, {
    method: 'POST',
  });
}

/** 获取标签列表 **/
export async function getTagList() {
  return request('/onepiece/tag/list', {
    method: 'GET',
  });
}

/** 新增标签 **/
export async function addTag(tag) {
  return request('/onepiece/tag/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: tag,
  });
}

/** 获取文章分类id列表 **/
export async function getCategoryIds() {
  return request('/onepiece/category/ids', {
    method: 'GET',
  });
}

/** 新增文章分类 **/
export async function addCategory(category) {
  return request('/onepiece/category/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: category,
  });
}

/** 获取文章分类列表 **/
export async function getCategoryList() {
  return request('/onepiece/category/list', {
    method: 'GET',
  });
}

/** 向微信服务器索要临时二维码ticket凭据 **/
export async function getQrcodeTicket() {
  return request('/onepiece/wechat/getQrcodeTicket', {
    method: 'GET',
  });
}

/** 向后端索要QQ登录授权链接地址url **/
export async function getQQLoginUrl() {
  return request('/onepiece/qq/getLoginUrl', {
    method: 'GET',
  });
}

/** 获取当前的用户的基本信息 **/
export async function currentUser(token) {
  return request('/onepiece/currentUser', {
    method: 'GET',
    ...(token || {}),
  });
}
