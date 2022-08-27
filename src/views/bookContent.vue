<template>
  <div class="main">
    <edit-input
      v-for="(item, index) in data"
      :key="index"
      :type="item.id"
      :hint="item.hint"
      :title="item.title"
      :rows="item.rows"
      :content="setContent(item.id)"
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
      data: bookinfo.content,
      bookContent: store.state.bookItemContent,
    });
    const upData = (newContent) => {
      // console.log(newContent);
      store.commit("changeBookItemNewContent", newContent);
    };

    const setContent = (elId) => {
      if (elId.includes("_")) {
        let rule1 = elId.split("_")[0];
        let rule2 = elId.split("_")[1];
        return data.bookContent[rule1][rule2];
      } else {
        return data.bookContent[elId];
      }
    };
    watchEffect(() => {
      data.bookContent = store.state.bookItemContent;
    });
    return {
      ...toRefs(data),
      upData,
      setContent,
    };
  },
};
</script>

<style lang="scss"></style>
