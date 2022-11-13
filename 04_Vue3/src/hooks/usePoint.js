import { reactive, onMounted, onBeforeUnmount } from 'vue';

function usePoint(){
  // 数据
  let point = reactive({ x: 0, y: 0 });

  // 方法
  function savePoint(event){
    console.log(event.pageX, event.pageY);
    point.x = event.pageX;
    point.y = event.pageY;
  }

  // 钩子函数
  onMounted(() => {
    window.addEventListener("click", savePoint);
  })
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  return point;
}

export default usePoint;