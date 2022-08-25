/**
 *  发送后端请求
 * @param url 后端地址
 * @param type 请求资源URL
 * @returns {Promise<any>}
 */
function http(url, type) {
  return fetch(`http://${url}/${type}`).then((res) => res.json());
}

export { http };
