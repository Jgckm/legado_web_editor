<template>
  <div class="out">
    <ul>
      <li
        :class="current_tab === 'editTab' ? 'active' : ''"
        @click="current_tab = 'editTab'"
      >
        编辑源
      </li>
      <li
        :class="current_tab === 'editDebug' ? 'active' : ''"
        @click="current_tab = 'editDebug'"
      >
        调试源
      </li>
      <li
        :class="current_tab === 'editList' ? 'active' : ''"
        @click="current_tab = 'editList'"
      >
        源列表
      </li>
      <li
        :class="current_tab === 'editHelp' ? 'active' : ''"
        @click="current_tab = 'editHelp'"
      >
        帮助信息
      </li>
    </ul>
    <div class="box">
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
      current_tab: "editTab",
    });

    return {
      ...toRefs(data),
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
