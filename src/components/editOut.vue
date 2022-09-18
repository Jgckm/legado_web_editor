<template>
  <div class="out">
    <!--    <input-->
    <!--      type="text"-->
    <!--      placeholder="输入后端地址 如：192.168.0.1:1122"-->
    <!--      v-model="url"-->
    <!--      @input="changInput(url)"-->
    <!--      @keydown.enter="pullSource"-->
    <!--      title="输入地址后 enter(回车键) 快捷拉取书源"-->
    <!--    />-->
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
    <!--    <div class="box" v-if="current_tab === 'editList'">-->
    <!--      <component :is="current_tab"></component>-->
    <!--    </div>-->
    <!--    <div class="box" v-else>-->
    <!--      <keep-alive>-->
    <!--        <component :is="current_tab"></component>-->
    <!--      </keep-alive>-->
    <!--    </div>-->
    <keep-alive>
      <component :is="current_tab"></component>
    </keep-alive>
  </div>
</template>

<script>
import editTab from "@/components/editTab";
import editDebug from "@/components/editDebug";
import editList from "@/components/editList";
import editHelp from "@/components/editHelp";

import { reactive, toRefs, watchEffect } from "vue";
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
      current_tab: store.state.currentTab || "editTab",
    });

    const handleSetActive = (tabName) => {
      store.commit("changeTabName", tabName);
    };

    const changInput = (url) => {
      store.commit("changeUrl", url);
    };

    watchEffect(() => {
      data.current_tab = store.state.currentTab;
    });
    const pullSource = () => {
      document.querySelectorAll(".menu>button")[1].click();
    };
    return {
      ...toRefs(data),
      handleSetActive,
      changInput,
      pullSource,
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
