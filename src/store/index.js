import { createStore } from "vuex";

export default createStore({
  state: {
    url: localStorage.getItem("url") || "",
    bookSource: [], // 临时存放所有书源
    bookItemContent: {}, // 当前点击的书源项
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
    clearEdit(state) {
      state.bookItemContent = {};
    },
  },
  actions: {},
  modules: {},
});
