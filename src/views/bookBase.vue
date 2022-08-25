<template>
  <div class="main">
    <edit-input
      v-for="(item, index) in data"
      :key="index"
      :type="item.id"
      :hint="item.hint"
      :title="item.title"
      :rows="item.rows"
      content="bookContent[item.id]"
    ></edit-input>
  </div>
</template>

<script>
import editInput from "@/components/editInput";
import bookinfo from "@/assets/editConfig.js";
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

    watchEffect(() => {
      data.bookContent = store.state.bookItemContent;
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss"></style>
