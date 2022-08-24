<template>
  <input
    type="text"
    placeholder="输入筛选关键词（源名称、源URL或源分组）输入自动筛选源"
  />
  <div>
    <div class="tool">
      <button>导入书源文件</button>
      <button>导出书源文件</button>
      <button>删除选中源</button>
      <button>清空列表</button>
    </div>
    <div class="book_list">
      <div
        v-for="(data, index) in 10"
        :key="index"
        class="book_item"
        v-bind:class="index === currentActive ? 'book_active' : ''"
        @click="handleItemClick(index)"
      >
        <div class="book_index">{{ data }}</div>
        <div style="margin-left: 10px">
          <div class="book_info">
            <span>test_book_name</span>
            <span>last_edit:2202:22:00:22</span>
          </div>
          <div>http://test.book.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "editList",
  setup() {
    let currentActive = ref(null);
    const handleItemClick = (index) => {
      currentActive.value = index;
    };
    return { currentActive, handleItemClick };
  },
};
</script>

<style lang="scss" scoped>
input {
  text-align: center;
  font-size: 16px;
  height: 25px;
  outline: none;
}
.tool {
  display: flex;
  justify-content: space-around;
  button {
    flex: 1;
    margin: 0 2px;
  }
}
.book_item {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
  background-color: #eeeeee;
}
.book_active {
  background-color: limegreen;
}
.book_index {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  background-color: lightpink;
}
.book_info {
  width: 500px;
  display: flex;
  justify-content: space-between;
}
</style>
