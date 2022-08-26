<template>
  <div class="menu">
    <div>
      <edit-loading v-if="isShow"></edit-loading>
      <edit-warn :is-show="warnShow" @changeShow="changeShow"></edit-warn>
      <edit-success
        v-if="successShow"
        :isShow="successShow"
        @changeShow="changeSuccessShow"
        :text="successText"
      ></edit-success>
    </div>
    <button @click="push">⇈推送源</button>
    <button @click="pull">⇊拉取源</button>
    <button @click="conver">⋙生成源</button>
    <button @click="clearEdit">✗清空表单</button>
    <button @click="undo">↶撤销操作</button>
    <button @click="handleClick">↷重做操作</button>
    <button @click="handleClick">⇏调试源</button>
    <button @click="handleClick">✓保存源</button>
  </div>
</template>

<script>
import { http } from "@/utils/http";
import { ref } from "vue";
import store from "@/store";

import editLoading from "@/components/message/editLoading";
import editWarn from "@/components/message/editWarn";
import editSuccess from "@/components/message/editSuccess";

export default {
  components: { editLoading, editWarn, editSuccess },
  setup() {
    const isShow = ref(false); // loading
    const warnShow = ref(false); // warn^
    const successText = ref(""); // successText
    const successShow = ref(false); // success

    const handleClick = () => {
      console.log(1111);
    };
    // warnShow
    const changeShow = (bool) => {
      warnShow.value = bool;
    };
    // successShow
    const changeSuccessShow = (bool) => {
      console.log(bool);
      successShow.value = bool;
    };

    const pull = () => {
      isShow.value = true;
      console.log(store.state.url);
      http(store.state.url, "getBookSources")
        .then((res) => {
          store.commit("changeTabName", "editList");
          store.commit("changeSource", res.data);
          localStorage.setItem("url", store.state.url);
          isShow.value = false;
          successText.value = `成功拉取${res.data.length}条源`;
          successShow.value = true;
        })
        .catch((err) => {
          console.log(err);
          isShow.value = false;
          warnShow.value = true;
          localStorage.setItem("url", "");
        });
    };

    const push = () => {
      isShow.value = true;
      http(store.state.url, "saveBookSources", store.state.bookSource)
        .then((json) => {
          if (json.isSuccess) {
            let okData = json.data;
            if (Array.isArray(okData)) {
              let failMsg = ``;
              if (store.state.bookSource.length > okData.length) {
                store.state.bookSource.forEach((item) => {
                  if (
                    !okData.find((x) => x.bookSourceUrl === item.bookSourceUrl)
                  ) {
                    console.log(item.bookSourceUrl);
                  }
                });
                failMsg = "\n推送失败的源将用红色字体标注!";
              }
              successText.value = `批量推送源到「阅读3.0APP」\n共计: ${
                store.state.bookSource.length
              } 条\n成功: ${okData.length} 条\n失败: ${
                store.state.bookSource.length - okData.length
              } 条${failMsg}`;
              successShow.value = true;
            } else {
              successText.value = `批量推送源到「阅读3.0APP」成功!\n共计: ${store.state.bookSource.length} 条`;
              successShow.value = true;
            }
          } else {
            // alert(`批量推送源失败!\nErrorMsg: ${json.errorMsg}`);
            warnShow.value = true;
          }
          isShow.value = false;
        })
        .catch((err) => {
          // console.log(err);
          isShow.value = false;
          warnShow.value = true;
        });
    };

    const conver = () => {
      store.commit("changeTabName", "editTab");
    };

    const undo = () => {
      store.commit("editHistoryUndo");
    };
    const clearEdit = () => {
      store.commit("clearEdit");
      console.log("已清除");
      successText.value = "已清除";
      successShow.value = true;
    };

    return {
      handleClick,
      push,
      pull,
      clearEdit,
      isShow,
      changeShow,
      warnShow,
      successText,
      changeSuccessShow,
      successShow,
      conver,
      undo,
    };
  },
};
</script>

<style>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
<style lang="scss" scoped>
button {
  width: 100px;
  height: 50px;
  margin: 5px;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  border: #333333 solid 1px;
  background-color: transparent;
  &:hover {
    color: #ffffff;
    background-color: gray;
  }
}
</style>
