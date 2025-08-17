<template>
  <div class="news">
    <div class="container">
      <div class="title">query传参</div>
      <div class="link-list">
        <RouterLink replace v-for="(item, index) in news" :key="index" :to="`/routerNote/detailQuery?id=${item.id}`">
          {{ item.title }}
        </RouterLink>
      </div>
    </div>

    <div class="container">
      <div class="title">params传参-写法1，直接在path当中拼接参数进行跳转</div>
      <div class="link-list">
        <RouterLink
          v-for="(item, index) in news"
          :key="index"
          :to="{ path: `/routerNote/detailParams/${item.id}/${item.title}` }"
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>

    <!--
      传递params参数时，需要提前在规则中占位
      传递params参数时，如果使用to的对象写法，必须使用name配置项，不能用path
    -->
    <div class="container">
      <div class="title">params传参-写法2，使用name和params进行跳转</div>
      <div class="link-list">
        <RouterLink
          v-for="(item, index) in news"
          :key="index"
          :to="{
            name: 'DetailParams',
            params: { id: item.id },
          }"
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>

    <div class="container">
      <div class="title">路由props配置</div>
      <div class="link-list">
        <RouterLink
          v-for="(item, index) in news"
          :key="index"
          :to="{ name: 'DetailProps', params: { id: item.id, title: item.title } }"
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>

    <div class="container">
      <div class="title">编程式路由导航</div>
      <div class="link-list">
        <button v-for="(item, index) in news" :key="index" @click="onTitleBtnClick(item)">
          {{ item.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface newsItem {
  id: number;
  title: string;
}

const news = ref<newsItem[]>([
  { id: 1, title: "新闻1" },
  { id: 2, title: "新闻2" },
  { id: 3, title: "新闻3" },
]);

// 点击新闻标题
const onTitleBtnClick = (item: newsItem) => {
  router.push({
    name: "DetailParams",
    params: {
      id: item.id,
      title: item.title,
    },
  });
};
</script>

<style lang="scss" scoped>
.news {
  .title {
    margin-bottom: 10px;
  }
  .link-list {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}
</style>
