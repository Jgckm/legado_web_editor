<template>
  <div style="display: flex; flex-flow: column">
    <input
      class="search"
      type="text"
      placeholder="输入筛选关键词（源名称、源URL或源分组）输入自动筛选源"
      v-model="searchKey"
      @focus="delArr = []"
    />
    <div>
      <div class="tool">
        <button @click="upFile">导入书源文件</button>
        <button @click="outExport">导出书源文件</button>
        <button @click="deleteActiveSource">删除选中源</button>
        <button @click="clearAllSources">清空列表</button>
      </div>
      <div class="source_list">
        <div
          v-for="(data, index) in filtedSources"
          :key="data.bookSourceUrl || data.sourceUrl"
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
              <span>{{ data.bookSourceName || data.sourceName }}</span>
              <span v-if="isBookSource"
                >最后修改：{{ formatTime(data.lastUpdateTime) }}</span
              >
              <span
                >分组：{{
                  data.bookSourceGroup || data.sourceGroup || "无分组"
                }}</span
              >
            </div>
            <div>{{ data.bookSourceUrl || data.sourceUrl }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, computed, watchEffect } from "vue";
import * as api from "@/utils/api.js";
import { useSourceStore } from "@/store";

export default {
  name: "editList",
  setup() {
    const store = useSourceStore();

    let data = reactive({
      searchKey: "",
      delArr: [],
      sources: [],
    });
    const filtedSources = computed(() => {
      return filterSource(data.sources, data.searchKey);
    });
    const isBookSource = computed(() => {
      return /bookSource/.test(window.location.href);
    });
    watchEffect(() => {
      data.sources = store.sources;
    });
    let currentActive = ref(null);
    const handleItemClick = (index) => {
      currentActive.value = index;
      store.clearEdit();
      store.changeCurrentSource(filtedSources.value[index]);
    };
    const clearAllSources = () => {
      store.clearAllSource();
    };
    const formatTime = (date) => {
      if (!date) return null;
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
    //筛选源
    const filterSource = (sources, key) => {
      if (key === "") return data.sources;
      if (isBookSource.value) {
        return sources.filter(
          (item) =>
            item.bookSourceName.toUpperCase().includes(key.toUpperCase()) ||
            (item.bookSourceGroup || "")
              .toUpperCase()
              .includes(key.toUpperCase()) ||
            item.bookSourceUrl.toUpperCase().includes(key.toUpperCase())
        );
      } else {
        return sources.filter(
          (item) =>
            item.sourceName.toUpperCase().includes(key.toUpperCase()) ||
            (item.sourceGroup || "")
              .toUpperCase()
              .includes(key.toUpperCase()) ||
            item.sourceUrl.toUpperCase().includes(key.toUpperCase())
        );
      }
    };

    const deleteActiveSource = () => {
      if (data.delArr.length === 0) {
        return false;
      }
      const delSources = [];
      data.delArr.forEach((index) => {
        delSources.push(filtedSources.value[index]);
      });
      api.deleteSources(delSources).then((res) => {
        if (res.isSuccess) {
          store.deleteSources(delSources);
          data.delArr = [];
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
          store.saveSources(jsonData);
        };
      });
      input.click();
    };
    const outExport = () => {
      const exportFile = document.createElement("a");
      let sources = store.sources,
        sourceType = isBookSource.value ? "BookSource" : "RssSource";

      exportFile.download = `${sourceType}_${Date()
        .replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/, "$2$1$3")
        .replace(/:/g, "")}.json`;

      let myBlob = new Blob([JSON.stringify(sources, null, 4)], {
        type: "application/json",
      });
      exportFile.href = window.URL.createObjectURL(myBlob);
      exportFile.click();
    };
    return {
      currentActive,
      isBookSource,
      filtedSources,
      deleteActiveSource,
      handleItemClick,
      ...toRefs(data),
      formatTime,
      clearAllSources,
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

.source_list {
  height: calc(100vh - 125px);
  overflow-y: auto;
}
</style>
