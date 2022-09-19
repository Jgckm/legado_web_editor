<template>
  <div class="editor">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
//@font-face {
//  font-family: "Cascadia";
//  src: url("@/assets/font/Cascadia-Code-Regular-2.ttf");
//}
.editor {
  display: flex;
  align-items: stretch;
  height: 100vh;
}
.left {
  width: calc(50% - 55px);
  min-width: 500px;
  display: inline-block;
}
.main {
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: auto;
}
textarea {
  min-height: 20px;
  flex: 1;
  outline: none;
  border-radius: 4px;
  border: #ccc 1px solid;
  font-size: 14px;
  font-family: "Cascadia", "Microsoft YaHei UI", Arial, serif;
  line-height: 20px;
  padding: 10px 10px 10px;
}
</style>
