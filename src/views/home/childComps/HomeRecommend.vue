<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex; /*以平铺的结构展示*/
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 6px 0 15px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1; /*元素均等占位*/
  }

  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 7px;
  }
</style>
