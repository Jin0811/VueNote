import { defineStore } from "pinia";
import { reactive, computed } from "vue";

// 选项式
// export const useSentenceStore = defineStore("sentence", {
//   state() {
//     return {
//       sentenceList: <string[]>[],
//     };
//   },
//   getters: {
//     listLength(state) {
//       return state.sentenceList.length;
//     },
//   },
//   actions: {
//     addItem() {
//       const temp = `语句${Math.random()}`;
//       this.sentenceList.push(temp);
//     },
//   },
// });

// 组合式
export const useSentenceStore = defineStore("sentence", () => {
  const sentenceList = reactive<string[]>([]);
  async function addItem() {
    const temp = `语句${Math.random()}`;
    sentenceList.push(temp);
  }
  const listLength = computed(() => sentenceList.length);
  return { sentenceList, listLength, addItem };
});
