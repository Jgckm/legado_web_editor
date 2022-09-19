import { reactive, toRefs, watchEffect } from "vue";
import store from "@/store";

export default function () {
  const data = reactive({
    currentSource: store.state.currentSource
  });
  const upData = (data) => {
    store.commit("changeCurrentSourceValue", data);
  };
  const getContent = (elId) => {
    try {
      if (elId.includes("_")) {
        let rule1 = elId.split("_")[0];
        let rule2 = elId.split("_")[1];
        let obj = data.currentSource[rule1];
        return obj ? obj[rule2] : null
      } else {
        return data.currentSource[elId];
      }
    } catch (e) {
      console.log("导入错误", e.TypeError);
      store.commit("clearEdit");
    }
  };

  watchEffect(() => {
    data.currentSource = store.state.currentSource;
  });
  return {
    ...toRefs(data),
    upData,
    getContent,
  };
}
