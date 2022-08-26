<template>
  <div v-if="isShow" class="warm">
    <p>
      请求发生了错误，请检查你的后端地址，填写是否正确，或者 阅读APP
      确认开启web服务
    </p>

    <div>
      <button @click="changeShow">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "editWarm",
  props: {
    isShow: {
      default: false,
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const changeShow = () => {
      emit("changeShow", !props.isShow);
    };
    return { changeShow };
  },
};
</script>

<style lang="scss" scoped>
.warm {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #eeeeee;
  background-color: #ff1d5e;
  padding: 20px;
  border-radius: 8px;
  font-size: 18px;
}
button {
  float: right;
  width: 70px;
  height: 35px;
  outline: none;
  border: unset;
  border-radius: 8px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  &:hover {
    color: #333333;
    background-color: aquamarine;
  }
}
</style>
