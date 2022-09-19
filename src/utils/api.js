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

function api(action, isArray = true) {
  let isBookSource = /bookSource/.test(location.href),
    url = `http://${localStorage.getItem("url") || location.host}/`,
    target = isBookSource ? "BookSource" : "RssSource";
  return `${url}${action}${target}${isArray ? "s" : ""}`;
}

function pullSources() {
  return Get(api("get"));
}
function pushSources(data) {
  return Post(api("save"), data);
}
function pushSource(source) {
  return Post(api("save", false), source);
}
function deleteSources(data) {
  return Post(api("delete"), data);
}

export { pullSources, pushSource, pushSources, deleteSources };
