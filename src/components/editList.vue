<template>
  <div style="display: flex; flex-flow: column; flex: 1">
    <input
      type="text"
      placeholder="输入筛选关键词（源名称、源URL或源分组）输入自动筛选源"
    />
    <div style="flex: 1">
      <div class="tool">
        <button>导入书源文件</button>
        <button>导出书源文件</button>
        <button>删除选中源</button>
        <button>清空列表</button>
      </div>
      <div class="book_list">
        <div
          v-for="(data, index) in bookSources"
          :key="index"
          class="book_item"
          v-bind:class="index === currentActive ? 'book_active' : ''"
          @click="handleItemClick(index)"
        >
          <div class="book_index">{{ index + 1 }}</div>
          <div style="margin-left: 10px">
            <div class="book_info">
              <span>{{ data.bookSourceName }}</span>
              <span>{{ data.lastUpdateTime }}</span>
            </div>
            <div>{{ data.bookSourceUrl }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from "vue";
import store from "@/store";

export default {
  name: "editList",

  setup() {
    let data = reactive({
      bookSources: store.state.bookSource,
    });

    let currentActive = ref(null);
    const handleItemClick = (index) => {
      currentActive.value = index;
    };

    watchEffect(() => {
      data.bookSources = store.state.bookSource;
    });

    return { currentActive, handleItemClick, ...toRefs(data) };
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
  padding: 10px;
  cursor: pointer;
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
.book_list {
  height: calc(100vh - 125px);
  overflow-y: auto;
}
</style>
