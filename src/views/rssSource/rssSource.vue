<template>
  <div class="left">
    <div>
      <div><a href="/">←主页</a><b>订阅源</b></div>
      <ul>
        <router-link
          :to="{ name: 'rss-base' }"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            基础
          </li>
        </router-link>
        <router-link
          :to="{ name: 'rss-list' }"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            列表
          </li>
        </router-link>
        <router-link
          :to="{ name: 'rss-webView' }"
          custom
          v-slot="{ navigate, isActive }"
        >
          <li @click="navigate" :class="{ active: isActive ? 'active' : '' }">
            WebView
          </li>
        </router-link>
        <router-link
          custom
          v-slot="{ navigate, isActive }"
          :to="{ name: 'rss-other' }"
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
