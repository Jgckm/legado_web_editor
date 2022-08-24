<template>
  <input
    type="text"
    style="text-align: center"
    placeholder="输入搜索关键字，默认搜「我的」"
  />
  <textarea placeholder="这里用于输出调试信息"></textarea>
</template>

<script>
export default {
  name: "editDebug",
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  height: 25px;
  font-size: 16px;
}
textarea {
  font-size: 14px;
}
</style>
