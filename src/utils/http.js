/**
 *  发送后端请求
 * @param type 请求资源URL
 * @param data 保存数据
 * @returns {Promise<any>}
 */
function http(type, data) {
  const formatUrl = `http://${localStorage.getItem("url") || ""}/${type}`;
  switch (type) {
    case "getBookSources":
      return Get(formatUrl);
    case "saveBookSources":
      return Post(formatUrl, data);
    case "deleteBookSources":
      return Post(formatUrl, data);
  }
}

export { http };

/**
 * POST请求
 * @param url
 * @param body
 * @returns {Promise<any>}
 * @constructor
 */
function Post(url, body) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

/**
 * GET请求
 * @param url
 * @returns {Promise<any>}
 * @constructor
 */
function Get(url) {
  return fetch(url).then((res) => res.json());
}
