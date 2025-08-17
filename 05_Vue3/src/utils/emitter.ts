import mitt from "mitt";

// emitter可以绑定和触发事件
const emitter = mitt();

export default emitter;

// mitt语法
// // 绑定事件
// emitter.on("event1", (value) => {
//   console.log("event1被触发了", value);
// });

// // 触发事件
// emitter.emit("event1", { id: 1, name: "张三" });

// // 解绑事件
// emitter.off("event1");

// // 解绑全部事件
// emitter.all.clear();
