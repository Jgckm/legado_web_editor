<template>
  <a href="https://alanskycn.gitee.io/teachme/" target="_blank">书源制作教程</a>
  <a href="https://zhuanlan.zhihu.com/p/29436838" target="_blank"
    >xpath基础教程</a
  >
  <a href="https://zhuanlan.zhihu.com/p/32187820" target="_blank"
    >xpath高级教程</a
  >
  <a href="https://www.w3cschool.cn/regex_rmjc" target="_blank"
    >正则表达式教程</a
  ><a href="https://regexr.com/" target="_blank">正则表达式在线验证工具</a>
  <div style="margin-top: 20px">
    <span><code>^$()[]{}.?+*|</code> 这些是Java正则特殊符号,匹配需转义</span
    ><br />
    <span><code>(?s)</code> 前缀表示跨行解析</span><br />
    <span><code>(?m)</code> 前缀表示逐行匹配</span><br />
    <span><code>(?i)</code> 前缀表示忽略大小写</span><br />
  </div>
</template>

<script>
export default {
  name: "editHelp",
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  height: 25px;
  transition: margin-left 0.3s ease;
  &:hover {
    color: red;
    margin-left: 10px;
  }
}
code {
  display: inline-block;
  font-size: 16px;
  font-family: "Cascadia Mono", "JetBrains Mono", "Microsoft YaHei UI", serif;
  background-color: #f3f4f4;
  border-radius: 4px;
}
</style>
