<template>
  <div class="menu">
    <button @click="handleClick">⇈推送源</button>
    <button @click="pull">⇊拉取源</button>
    <button @click="handleClick">⋘编辑源</button>
    <button @click="conver">⋙生成源</button>
    <button @click="handleClick">✗清空表单</button>
    <button @click="handleClick">↶撤销操作</button>
    <button @click="handleClick">↷重做操作</button>
    <button @click="handleClick">⇏调试源</button>
    <button @click="handleClick">✓保存源</button>
    <edit-loading v-if="isShow"></edit-loading>
  </div>
</template>

<script>
import { http } from "@/utils/http";
import store from "@/store";
import editLoading from "@/components/editLoading";
import { ref } from "vue";

export default {
  components: { editLoading },
  setup() {
    const isShow = ref(false);
    const handleClick = () => {
      console.log(1111);
    };
    const pull = () => {
      isShow.value = true;
      console.log(store.state.url);
      http(store.state.url, "getBookSources")
        .then((res) => {
          store.commit("changeSource", res.data);
          localStorage.setItem("url", store.state.url);
          isShow.value = false;
        })
        .catch((err) => {
          console.log(err);
          isShow.value = false;
        });
    };
    const conver = () => {};

    return {
      handleClick,
      pull,
      conver,
      isShow,
    };
  },
};
</script>

<style>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
<style lang="scss" scoped>
button {
  width: 100px;
  height: 50px;
  margin: 5px;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  border: #333333 solid 1px;
  background-color: transparent;
  &:hover {
    color: #ffffff;
    background-color: gray;
  }
}
</style>
