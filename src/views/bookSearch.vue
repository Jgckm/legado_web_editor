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
import useCounter from "@/utils/useCounter";
import { reactive, toRefs } from "vue";

import editInput from "@/components/editInput";
import bookinfo from "@/utils/editConfig";
export default {
  components: {
    editInput,
  },
  setup() {
    const { upData, bookContent, setContent } = useCounter();
    const data = reactive({
      data: bookinfo.search,
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
