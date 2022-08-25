<template>
  <div class="menu">
    <button @click="handleClick">⇈推送源</button>
    <button @click="pull">⇊拉取源</button>
    <button @click="handleClick">⋘编辑源</button>
    <button @click="handleClick">⋙生成源</button>
    <button @click="handleClick">✗清空表单</button>
    <button @click="handleClick">↶撤销操作</button>
    <button @click="handleClick">↷重做操作</button>
    <button @click="handleClick">⇏调试源</button>
    <button @click="handleClick">✓保存源</button>
  </div>
</template>

<script>
import { http } from "@/utils/http";
import store from "@/store";

export default {
  setup() {
    const handleClick = () => {
      console.log(1111);
    };
    const pull = () => {
      console.log(store.state.url);
      http(store.state.url, "getBookSources")
        .then((res) => {
          console.log(res.data);
          store.commit("changeSource", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.setItem("url", store.state.url);
    };

    return {
      handleClick,
      pull,
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
