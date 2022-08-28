import { createStore } from "vuex";
import source_json from "@/utils/bookSource.json";

export default createStore({
  state: {
    url: localStorage.getItem("url") || "",
    bookSource: [], // 临时存放所有书源
    bookItemContent: source_json, // 当前点击的书源项
    currentTab: localStorage.getItem("tabName") || "editTab",
    editTabSourceInfo: {},
    deBugMsg: "",
  },
  getters: {},
  mutations: {
    changeUrl(state, url) {
      state.url = url;
      localStorage.setItem("url", url);
    },
    changeSource(state, data) {
      state.bookSource = data;
    },
    // editList Click
    changeBookItemContent(state, content) {
      state.bookItemContent = { ...content };
      // console.log(content);
    },
    // edit Content
    changeBookItemNewContent(state, newContent) {
      if (newContent.type.includes("_")) {
        let rule1 = newContent.type.split("_")[0];
        let rule2 = newContent.type.split("_")[1];
        state.bookItemContent[rule1][rule2] = newContent.value;
        // console.log(rule1, rule2);
        // console.log(newContent);
      } else {
        state.bookItemContent[newContent.type] = newContent.value;
        // edit last time
        state.bookItemContent.lastUpdateTime = new Date().getTime();
      }
      // console.log(state.bookItemContent);
    },
    // update editTab tabName and editTab info
    changeTabName(state, tabName) {
      state.currentTab = tabName;
      localStorage.setItem("tabName", tabName);

      console.log(tabName);
    },
    changeEidtTabSourceInfo(state) {
      // edit last time
      for (const sourceJsonKey in source_json) {
        state.editTabSourceInfo[sourceJsonKey] = source_json[sourceJsonKey];
      }
      for (const bookItemContentKey in state.bookItemContent) {
        state.editTabSourceInfo[bookItemContentKey] =
          state.bookItemContent[bookItemContentKey];
      }
    },
    editHistory(state, history) {
      let historyObj;
      if (localStorage.getItem("history")) {
        historyObj = JSON.parse(localStorage.getItem("history"));
        historyObj.new.push(history);
        if (historyObj.new.length > 50) {
          historyObj.new.shift();
        }
        if (historyObj.old.length > 50) {
          historyObj.old.shift();
        }
        localStorage.setItem("history", JSON.stringify(historyObj));
      } else {
        const arr = { new: [history], old: [] };
        localStorage.setItem("history", JSON.stringify(arr));
      }
    },
    editHistoryUndo(state) {
      if (localStorage.getItem("history")) {
        let historyObj = JSON.parse(localStorage.getItem("history"));
        historyObj.old.push(state.bookItemContent);
        if (historyObj.new.length) {
          state.bookItemContent = historyObj.new.pop();
        }
        localStorage.setItem("history", JSON.stringify(historyObj));
      }
    },
    clearAllHistory() {
      localStorage.setItem("history", JSON.stringify({ new: [], old: [] }));
    },
    clearEdit(state) {
      state.editTabSourceInfo = {};
      clearBookItemContent(source_json);
      state.bookItemContent = { ...source_json };
      // console.log(source_json);
      // console.log(state.bookItemContent);
    },
    changeDeBugMsg(state, msg) {
      let el = document.querySelector("#debug_text");
      el.scrollTop = el.scrollHeight;
      state.deBugMsg = state.deBugMsg + msg + "\n";
    },
    deBugMsgClear(state) {
      state.deBugMsg = "";
    },
  },
  actions: {},
  modules: {},
});
function clearBookItemContent(obj) {
  for (const objKey in obj) {
    if (typeof obj[objKey] === "object") {
      clearBookItemContent(obj[objKey]);
    } else {
      obj[objKey] = "";
    }
  }
}
