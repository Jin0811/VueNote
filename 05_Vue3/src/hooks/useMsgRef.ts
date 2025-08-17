import { customRef } from "vue";

export default function (initValue: string, delay: number) {
  let timer: number;
  const msg = customRef((track, trigger) => {
    return {
      // get何时调用？—— msg2被读取时
      get() {
        track(); // 依赖收集
        return initValue;
      },
      // set何时调用？—— msg2被修改时
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          console.log("set", value);
          initValue = value;
          trigger(); // 触发更新
        }, 1000);
      },
    };
  });
  return { msg };
}
