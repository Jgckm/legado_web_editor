<template>
  <div class="left">
    <div>
      <div><a href="/">←主页</a><b>书源</b></div>
      <ul>
        <router-link
          :to="{ name: 'base' }"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            基础
          </li>
        </router-link>
        <router-link
          :to="{ name: 'search' }"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            搜索
          </li>
        </router-link>
        <router-link
          :to="{ name: 'find' }"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            发现
          </li>
        </router-link>
        <router-link
          custom
          v-slot="{ navigate, isActive }"
          :to="{ name: 'detail' }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            详情
          </li>
        </router-link>
        <router-link
          custom
          v-slot="{ navigate, isActive }"
          :to="{ name: 'directory' }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            目录
          </li>
        </router-link>
        <router-link
          custom
          v-slot="{ navigate, isActive }"
          :to="{ name: 'content' }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            正文
          </li>
        </router-link>
        <router-link
          custom
          v-slot="{ navigate, isActive }"
          :to="{ name: 'review' }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            段评
          </li>
        </router-link>
        <router-link
          custom
          v-slot="{ navigate, isActive }"
          :to="{ name: 'other' }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            其他
          </li>
        </router-link>
      </ul>
    </div>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <edit-menu></edit-menu>
  <edit-out></edit-out>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";
import editMenu from "@/components/editMenu";
import editOut from "@/components/editOut";

export default {
  components: {
    editMenu,
    editOut,
  },
  setup() {
    const data = reactive({});

    onMounted(() => {});

    return {
      ...toRefs(data),
    };
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  color: #333;
}

ul,
body {
  margin: 0;
  padding: 0;
}

ul {
  width: 100%;
  height: 40px;
  display: flex;

  li {
    display: block;
    text-align: center;
    line-height: 40px;
    width: 16%;
    list-style: none;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
}

.active {
  color: #fff !important;
  background-color: #80808075;
  border-bottom: unset !important;
}
</style>
<style lang="scss" scoped>
ul li {
  border-bottom: #333333 2px solid;
}

a {
  font-size: 18px;
  color: blue;
}
</style>
