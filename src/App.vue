<template>
  <div class="editor">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = () => {
      console.log(111);
    };
    return {
      handleClick,
    };
  },
};
</script>

<style lang="scss">
.editor {
  display: flex;
  align-items: stretch;
  height: 100vh;
}
.left {
  width: 890px;
  min-width: 500px;
  display: inline-block;
}
.main {
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: auto;
}
textarea {
  flex: 1;
  outline: none;
  border-radius: 4px;
  border: #ccc 1px solid;
  font-size: 16px;
  font-family: "Microsoft YaHei UI", Arial, serif;
  line-height: 20px;
  padding: 10px 10px 10px;
}
</style>
