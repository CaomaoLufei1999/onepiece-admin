// @ts-ignore

/* eslint-disable */
import {request} from 'umi';

/** 获取文章分类列表  **/
export async function addCategory(category) {
  console.log(category)
  return request('/onepiece/category/add', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    data: category,
  });
}

/** 获取文章分类列表  **/
export async function getCategoryList() {
  return request('/onepiece/category/list', {
    method: 'GET',
  });
}

/** 向微信服务器索要临时二维码ticket凭据  **/
export async function getQrcodeTicket() {
  return request('/onepiece/wechat/getQrcodeTicket', {
    method: 'GET',
  });
}

/** 向后端索要QQ登录授权链接地址url  **/
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
