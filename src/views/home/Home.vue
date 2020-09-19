<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-feature/>
    <tab-control :titles="titles"/>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
    </ul>
  </div>
</template>

<script>
  //业务相关组件
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "views/home/childComps/HomeFeature";
  //公共组件
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/context/tabControl/TabControl";
  //方法
  import {getHomeMultiData} from "network/homeAPI";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ["流行", "新款", "精选"]
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
  #home{
     padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

  }
</style>
