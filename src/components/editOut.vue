<template>
  <div class="out">
    <input
      type="text"
      placeholder="输入后端地址 如：192.168.0.1:1122"
      v-model="url"
      @input="changInput(url)"
    />
    <ul>
      <li
        :class="current_tab === 'editTab' ? 'active' : ''"
        @click="handleSetActive('editTab')"
      >
        编辑源
      </li>
      <li
        :class="current_tab === 'editDebug' ? 'active' : ''"
        @click="handleSetActive('editDebug')"
      >
        调试源
      </li>
      <li
        :class="current_tab === 'editList' ? 'active' : ''"
        @click="handleSetActive('editList')"
      >
        源列表
      </li>
      <li
        :class="current_tab === 'editHelp' ? 'active' : ''"
        @click="handleSetActive('editHelp')"
      >
        帮助信息
      </li>
    </ul>
    <div class="box" v-if="current_tab === 'editList'">
      <component :is="current_tab"></component>
    </div>
    <div class="box" v-else>
      <keep-alive>
        <component :is="current_tab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import editTab from "@/components/editTab";
import editDebug from "@/components/editDebug";
import editList from "@/components/editList";
import editHelp from "@/components/editHelp";

import { reactive, toRefs } from "vue";
import store from "@/store";

export default {
  name: "editOut",
  components: {
    editDebug,
    editTab,
    editList,
    editHelp,
  },
  setup() {
    const data = reactive({
      url: localStorage.getItem("url") || "",
      current_tab: localStorage.getItem("tabName") || "editTab",
    });

    const handleSetActive = (tabName) => {
      data.current_tab = tabName;
      localStorage.setItem("tabName", tabName);
    };

    const changInput = (url) => {
      store.commit("changeUrl", url);
    };

    return {
      ...toRefs(data),
      handleSetActive,
      changInput,
    };
  },
};
</script>

<style lang="scss">
.out {
  min-width: 620px;
  flex: 1;
  display: flex;
  flex-flow: column;
  .box {
    display: flex;
    flex: 1;
    flex-flow: column;
  }
}
</style>
