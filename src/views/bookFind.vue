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
import bookinfo from "@/utils/editConfig";
import editInput from "@/components/editInput";

import { reactive, toRefs } from "vue";
import useCounter from "@/utils/useCounter";
export default {
  components: {
    editInput,
  },
  setup() {
    const { upData, setContent, bookContent } = useCounter();
    const data = reactive({
      data: bookinfo.find,
    });
    return {
      ...toRefs(data),
      upData,
      setContent,
      bookContent,
    };
  },
};
</script>
