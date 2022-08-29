<template>
  <div class="success">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["changeShow"],
  setup(props, { emit }) {
    setTimeout(() => {
      emit("changeShow", !props.isShow);
    }, 3000);
    return {};
  },
};
</script>

<style scoped>
.success {
  z-index: 3;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: aquamarine;
  padding: 10px;
  border-radius: 8px;
  color: #333333;
}
p {
  margin: 0;
}
</style>
