<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";

  import {getHomeMultiData} from "network/homeAPI";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() { //使用created声明周期函数，组件一旦创建好后就发送网络请求
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }

  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
