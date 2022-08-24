<template>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.main {
  width: 40em;
  overflow-y: auto;
}
input,
textarea {
  flex: 1;
  outline: none;
  border-radius: 8px;
  border: #ccc 1px solid;
  padding-left: 10px;
  font-size: 16px;
  font-family: 微软雅黑, Arial, serif;
}
textarea {
  line-height: 20px;
  padding: 10px 10px 10px;
}
input {
  height: 35px;
}
</style>
