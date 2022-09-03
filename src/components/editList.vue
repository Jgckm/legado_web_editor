<template>
  <div style="display: flex; flex-flow: column">
    <input
      class="search"
      type="text"
      placeholder="输入筛选关键词（源名称、源URL或源分组）输入自动筛选源"
      v-model="searchKey"
      @input="sourcesList(searchKey)"
      @focus="delArr = []"
    />
    <div>
      <div class="tool">
        <button @click="upFile">导入书源文件</button>
        <button @click="outExport">导出书源文件</button>
        <button @click="deleteActiveSource">删除选中源</button>
        <button @click="clearAllSources">清空列表</button>
      </div>
      <div class="book_list">
        <div
          v-for="(data, index) in sourcesList(searchKey)"
          :key="data.bookSourceUrl"
          class="book_item"
          v-bind:class="index === currentActive ? 'book_active' : ''"
        >
          <input type="checkbox" :value="index" v-model="delArr" />
          <div class="book_index">{{ index + 1 }}</div>
          <div
            style="margin-left: 10px; flex: 1"
            @click="handleItemClick(index)"
          >
            <div class="book_info">
              <span>{{ data.bookSourceName }}</span>
              <span>最后修改：{{ formatTime(data.lastUpdateTime) }}</span>
              <span>分组：{{ data.bookSourceGroup || "无分组" }}</span>
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

import { http } from "@/utils/http";

export default {
  name: "editList",
  setup() {
    const bookSources = ref(store.state.bookSource);
    let data = reactive({
      searchKey: "",
      delArr: [],
    });

    let currentActive = ref(null);
    const handleItemClick = (index) => {
      currentActive.value = index;
      store.commit("clearEdit");
      store.commit("changeBookItemContent", sourcesList(data.searchKey)[index]);
    };
    const clearAllSources = () => {
      store.commit("clearAllSource");
    };
    const formatTime = (date) => {
      const time = new Date(date);
      const year = time.getFullYear();

      let month = time.getMonth() + 1;
      month = month < 10 ? "0" + month : month;

      let day = time.getDate();
      day = day < 10 ? "0" + day : day;

      let hour = time.getHours();
      hour = hour < 10 ? "0" + hour : hour;

      let minute = time.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;

      let seconds = time.getSeconds();
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        seconds
      );
    };
    const sourcesList = (key) => {
      if (key === "") {
        return bookSources.value;
      } else {
        return (
          bookSources.value.filter((item) =>
            item.bookSourceName.toUpperCase().includes(key.toUpperCase())
          ) ||
          bookSources.value.filter((item) =>
            item.bookSourceGroup.toUpperCase().includes(key.toUpperCase())
          ) ||
          bookSources.value.filter((item) =>
            item.bookSourceUrl.toUpperCase().includes(key.toUpperCase())
          )
        );
      }
    };

    watchEffect(() => {
      bookSources.value = store.state.bookSource;
    });

    const deleteActiveSource = () => {
      if (data.delArr.length === 0) {
        console.log("没有选中的书源");
        return false;
      }
      const delSources = [];
      const source = sourcesList(data.searchKey);
      data.delArr.forEach((item) => {
        delSources.push(source[item]);
      });

      http("deleteBookSources", delSources).then((res) => {
        if (res.isSuccess) {
          console.log("删除成功");
          data.delArr.forEach((item) => {
            source.splice(item, 1);
            console.log(item);
          });
          data.delArr = [];
          http("getBookSources").then((res) => {
            bookSources.value = res.data;
            console.log("同步完成！");
          });
        } else {
          console.log("错误", res);
        }
      });
    };
    const upFile = () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.addEventListener("change", (e) => {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          const jsonData = JSON.parse(reader.result);
          store.commit("changeBookSource", jsonData);
        };
      });
      input.click();
    };
    const outExport = () => {
      const exportFile = document.createElement("a");
      exportFile.download = `BookSources${Date()
        .replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/, "$2$1$3")
        .replace(/:/g, "")}.json`;
      let myBlob = new Blob([JSON.stringify(store.state.bookSource, null, 4)], {
        type: "application/json",
      });
      exportFile.href = window.URL.createObjectURL(myBlob);
      exportFile.click();
    };
    return {
      currentActive,
      deleteActiveSource,
      handleItemClick,
      ...toRefs(data),
      formatTime,
      sourcesList,
      clearAllSources,
      bookSources,
      upFile,
      outExport,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid #dddddd;
  border-radius: 4px;
}
input {
  text-align: center;
  font-size: 16px;
  height: 25px;
  outline: none;
}

.tool {
  display: flex;
  justify-content: space-around;
  padding: 4px 0;
  button {
    border-radius: 4px;
    padding: 5px;
    outline: none;
    border: none;
    flex: 1;
    margin: 0 2px;
    &:hover {
      background-color: #ddd;
    }
  }
}
input[type="checkbox"] {
  transform: scale(2);
  margin: 0 15px 0;
}
.book_item {
  overflow: hidden;
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
  width: auto;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: lightpink;
}

.book_info {
  display: flex;
  justify-content: space-between;
}

.book_list {
  height: calc(100vh - 125px);
  overflow-y: auto;
}
</style>
