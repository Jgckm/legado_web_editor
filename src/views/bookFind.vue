<template>
  <div class="main">
    <edit-input
      v-for="(item, index) in data"
      :key="index"
      :type="item.id"
      :hint="item.hint"
      :title="item.title"
      :rows="item.rows"
    ></edit-input>
  </div>
</template>

<script>
import bookinfo from "@/assets/editConfig";
import editInput from "@/components/editInput";

import { reactive, toRefs } from "vue";
export default {
  components: {
    editInput,
  },
  setup() {
    const data = reactive({
      data: bookinfo.find,
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
