<template>
  <div class="edit_input">
    <span>{{ title }}<i>:</i></span>
    <textarea
      :id="type"
      :placeholder="hint"
      :rows="rows"
      :value="content"
      ref="attr"
      @input="change"
      @blur="changeHistory"
    ></textarea>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "@/store";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 1,
    },
    hint: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    content: {
      type: [String, Number, Boolean],
      default: "",
    },
  },
  emits: ["changeContent"],
  setup(props, { emit }) {
    const attr = ref("");
    const change = () => {
      emit("changeContent", {
        value: attr.value.value,
        type: attr.value.getAttribute("id"),
      });
    };
    const changeHistory = () => {
      if (!localStorage.getItem("history")) {
        localStorage.setItem("history", JSON.stringify({ new: [], old: [] }));
      }
      const history = JSON.parse(localStorage.getItem("history"));

      const newHistory = history.new;
      if (newHistory.length) {
        if (
          newHistory[newHistory.length - 1][attr.value.getAttribute("id")] !==
          store.state.bookItemContent[attr.value.getAttribute("id")]
        ) {
          store.commit("editHistory", store.state.bookItemContent);
        } else {
          const idName = attr.value.getAttribute("id");
          if (idName.includes("_")) {
            let rule1 = idName.split("_")[0];
            let rule2 = idName.split("_")[1];
            if (
              newHistory[newHistory.length - 1][rule1][rule2] !==
              store.state.bookItemContent[rule1][rule2]
            ) {
              store.commit("editHistory", store.state.bookItemContent);
              console.log("添加记录");
            }
          } else {
            console.log("重复历史，不记录");
          }
        }
      } else {
        store.commit("editHistory", store.state.bookItemContent);
        console.log("第一次记录");
      }
    };

    return {
      changeHistory,
      change,
      attr,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  display: flex;
  justify-content: space-around;
  width: 70px;
  white-space: nowrap;

  i {
    font-style: normal;
  }
}

.edit_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 5px;
}
</style>
