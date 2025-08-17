import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state() {
    return {
      sum: 0,
    };
  },
  actions: {
    // 增加
    increment(value: number) {
      if (this.sum < 10) {
        this.sum = this.sum + value;
      } else {
        console.log("已达上限");
      }
    },
  },
});
