import type { Component } from "vue";

// 导出的Vue模块
export interface Module {
  default: Component;
}

// 组件对象
export interface ComponentMap {
  [key: string]: Component;
}

// -----------------------------------------------------------------

// 人员
export interface PersonInterface {
  id: string;
  name: string;
  age: number;
  school?: string;
}

// 自定义类型-人员列表
// type PersonList = Array<PersonInterface>; // 写法1
export type PersonList = PersonInterface[]; // 写法2
