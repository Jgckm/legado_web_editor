import { createStore } from "vuex";

export default createStore({
  state: {
    url: localStorage.getItem("url") || "",
    bookSource: [],
    bookItemContent: {},
    newContent: {}, // 更改源的对象值
  },
  getters: {},
  mutations: {
    changeUrl(state, url) {
      state.url = url;
    },
    changeSource(state, data) {
      state.bookSource = data;
    },
    changeBookItemContent(state, content) {
      state.bookItemContent = content;
      console.log(content);
    },
    changeNewContent(state, newContent) {
      state.newContent = newContent;
    },
  },
  actions: {},
  modules: {},
});
