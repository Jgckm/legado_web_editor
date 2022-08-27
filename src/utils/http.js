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
      return fetch(formatUrl).then((res) => res.json());
    case "saveBookSources":
      return fetch(formatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
  }
}

export { http };
