<template>
  <textarea
    placeholder="这里输出序列化的JSON数据,可直接导入'阅读'APP"
    v-model="sourceInfo"
  ></textarea>
</template>
<script>
import { reactive, toRefs, watchEffect } from "vue";
import store from "@/store";

export default {
  name: "editTab",
  setup() {
    const data = reactive({
      sourceInfo: "",
    });
    watchEffect(() => {
      let sourceInfo = store.state.editTabSourceInfo;
      if (Object.keys(sourceInfo).length > 0) {
        sourceInfo.lastUpdateTime = new Date().getTime();
        data.sourceInfo = JSON.stringify(sourceInfo, null, 4);
      } else {
        data.sourceInfo = "";
      }
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped>
textarea {
  font-size: 14px;
}
</style>
