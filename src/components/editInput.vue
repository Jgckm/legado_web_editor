<template>
  <div class="edit_input">
    <span>{{ title }}<i>:</i></span>
    <textarea :id="type" :placeholder="hint" :rows="rows"></textarea>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 1,
    },
    hint: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  setup() {
    const data = reactive({
      title: "",
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  display: flex;
  justify-content: space-around;
  width: 70px;
  white-space: nowrap;
  i {
    font-style: normal;
  }
}
.edit_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 5px;
}
</style>
