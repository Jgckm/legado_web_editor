import { reactive, toRefs, watchEffect } from "vue";
import { useSourceStore } from "@/store";

export default function () {
  const store = useSourceStore();

  const data = reactive({
    currentSource: store.currentSource,
  });
  const upData = (data) => {
    store.changeCurrentSourceValue(data);
  };
  const getContent = (elId) => {
    try {
      if (elId.includes("_")) {
        let rule1 = elId.split("_")[0];
        let rule2 = elId.split("_")[1];
        let obj = data.currentSource[rule1];
        return obj ? obj[rule2] : null;
      } else {
        return data.currentSource[elId];
      }
    } catch (e) {
      store.commit("clearEdit");
    }
  };

  watchEffect(() => {
    data.currentSource = store.currentSource;
  });
  return {
    ...toRefs(data),
    upData,
    getContent,
  };
}
