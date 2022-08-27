<template>
  <textarea
    placeholder="这里输出序列化的JSON数据,可直接导入'阅读'APP"
    v-html="sourceInfo"
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
        data.sourceInfo = sourceInfo;
        data.sourceInfo = JSON.stringify(sourceInfo, null, 4);
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
