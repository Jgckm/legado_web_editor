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
import { reactive, toRefs } from "vue";
import useCounter from "@/utils/useCounter";

export default {
  components: {
    editInput,
  },
  setup() {
    const { upData, bookContent, setContent } = useCounter();
    const data = reactive({
      data: bookinfo.review,
    });
    return {
      ...toRefs(data),
      upData,
      bookContent,
      setContent,
    };
  },
};
</script>

<style lang="scss"></style>
