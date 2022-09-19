<template>
  <div class="main">
    <edit-input
      v-for="(item, index) in data"
      :key="index"
      :type="item.id"
      :hint="item.hint"
      :title="item.title"
      :rows="item.rows"
      :content="getContent(item.id)"
      @changeContent="upData"
    ></edit-input>
  </div>
</template>

<script>
import editInput from "@/components/editInput";
import config from "@/utils/bookSourceEditConfig.js";
import { reactive, toRefs } from "vue";
import useCounter from "@/utils/useCounter";

export default {
  components: {
    editInput,
  },
  setup() {
    const { upData, getContent } = useCounter();
    const data = reactive({
      data: config.review,
    });
    return {
      ...toRefs(data),
      upData,
      getContent,
    };
  },
};
</script>

<style lang="scss"></style>
