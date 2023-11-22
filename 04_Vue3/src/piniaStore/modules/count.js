/**
 * pinia 选项式写法
 *
 * const store = useCountStore();
 *
 * 访问state
 * store.count++;
 *
 * 重置store
 * store.$reset();
 *
 * 修改state
 * - store.count++;
 * - store.$patch({ count: store.count + 1 });
 * - store.increment(1);
 * - store.subtraction(1);
 *
 * 替换state
 * store.$state = { count: 10 };
 */

import { defineStore } from "pinia";

const useCountStore = defineStore("count", {
  state: () => {
    return {
      count: 1,
    };
  },
  actions: {
    // 增加
    increment(num) {
      this.count = this.count + num;
    },
    // 减少
    subtraction(num) {
      this.count = this.count - num;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});

export default useCountStore;
