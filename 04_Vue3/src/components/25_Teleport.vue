<template>
  <div>
    <button @click="changeShow">打开弹窗</button>

    <teleport to='body'>
      <div class="dialog-mask" v-if="isShow">
        <div class="dialog-content">
          <button @click="changeShow">关闭弹窗</button>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script>
import { ref } from "vue";
export default {
  /**
   * teleport是一个组件，可以指定模板的渲染节点
   * to属性：'html' | 'body' | CSS SELECTER
   */
  setup(){
    let isShow = ref(false);

    function changeShow(){
      isShow.value = !isShow.value;
    }

    return {
      isShow,
      changeShow
    };
  }
}
</script>

<style lang="css" scoped>
  .dialog-mask{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog-content{
    width: 500px;
    height: 300px;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
