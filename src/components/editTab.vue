<template>
  <textarea
    placeholder="这里输出序列化的JSON数据,可直接导入'阅读'APP"
    v-model="source"
    @input="updateEditSource"
  ></textarea>
</template>
<script>
import { reactive, toRefs, watchEffect } from "vue";
import { useSourceStore } from "@/store";

export default {
  name: "editTab",
  setup() {
    const store = useSourceStore();
    const data = reactive({
      source: "",
    });
    const updateEditSource = () => {
      store.changeEditTabSource(JSON.parse(data.source));
    };
    watchEffect(() => {
      let source = store.editTabSource;
      if (Object.keys(source).length > 0) {
        source.lastUpdateTime = new Date().getTime();
        data.source = JSON.stringify(source, null, 4);
      } else {
        data.source = "";
      }
    });
    return {
      ...toRefs(data),
      updateEditSource,
    };
  },
};
</script>

<style scoped>
textarea {
  font-size: 14px;
}
</style>
