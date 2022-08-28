<template>
  <div class="main">
    <edit-input
      v-for="(item, index) in data"
      :key="index"
      :type="item.id"
      :hint="item.hint"
      :title="item.title"
      :rows="item.rows"
      :content="bookContent[item.id]"
      @changeContent="upData"
    ></edit-input>
  </div>
</template>

<script>
import editInput from "@/components/editInput";
import bookinfo from "@/utils/editConfig.js";
import { reactive, toRefs, watchEffect } from "vue";
import store from "@/store";

export default {
  components: {
    editInput,
  },
  setup() {
    const data = reactive({
      data: bookinfo.base,
      bookContent: store.state.bookItemContent,
    });
    const upData = (newContent) => {
      // console.log(newContent);
      store.commit("changeBookItemNewContent", newContent);
    };
    watchEffect(() => {
      data.bookContent = store.state.bookItemContent;
      console.log("监听以变化");
    });
    return {
      ...toRefs(data),
      upData,
    };
  },
};
</script>

<style lang="scss"></style>
