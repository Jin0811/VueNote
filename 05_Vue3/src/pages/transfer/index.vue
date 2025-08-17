<template>
  <div class="note">
    <div class="menu">
      <div
        v-for="(item, index) in componentNameList"
        :key="index"
        :class="['menu-item', componentName === item ? 'menu-item-active' : '']"
        @click="onToggle(item)"
      >
        {{ `${index}_${item}` }}
      </div>
    </div>
    <div class="content">
      <component :is="componentName" />
    </div>
  </div>
</template>

<script lang="ts">
import type { Module, ComponentMap } from "@/types";

// 批量导入src/components目录下的组件，仅第一层级的vue组件会被导入
const modules = import.meta.glob("./components/*/index.vue", { eager: true });
const componentMap: ComponentMap = {};
const componentNameList: string[] = [];
Object.keys(modules).forEach((key) => {
  const component = modules[key] as Module;
  const name: string = component.default.name!;
  componentNameList.push(name);
  componentMap[name] = component.default;
});

export default {
  name: "Note",
  components: {
    ...componentMap,
  },
  data() {
    return {
      componentNameList,
      componentName: "",
    };
  },
  created() {
    const name = localStorage.getItem("currentNoteItem") || "Props";
    this.componentName = name;
  },
  methods: {
    // 点击菜单项，切换组件显示，同时清空控制台
    onToggle(item: string) {
      this.componentName = item;
      window.console.clear();
      localStorage.setItem("currentNoteItem", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.note {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  .menu {
    width: 20%;
    background-color: #f1f1f1;
    overflow-y: auto;
    margin-right: 16px;
    .menu-item {
      display: flex;
      padding: 12px;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      &.menu-item-active {
        color: #fff;
        background-color: royalblue;
      }
    }
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
