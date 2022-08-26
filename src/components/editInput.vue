<template>
  <div class="edit_input">
    <span>{{ title }}<i>:</i></span>
    <textarea
      :id="type"
      :placeholder="hint"
      :rows="rows"
      :value="content"
      ref="attr"
      @input="change"
    ></textarea>
  </div>
</template>

<script>
import { ref } from "vue";

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
    content: {
      type: [String, Number],
      default: "",
    },
  },
  emits: ["changeContent"],
  setup(props, { emit }) {
    const attr = ref("");
    const change = () => {
      emit("changeContent", {
        value: attr.value.value,
        type: attr.value.getAttribute("id"),
      });
    };
    return {
      change,
      attr,
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
