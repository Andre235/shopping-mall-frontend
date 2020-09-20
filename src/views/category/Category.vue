<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>标签1</li>
      <li>标签2</li>
      <li>标签3</li>
      <li>标签4</li>
      <li>标签5</li>
      <li>标签6</li>
      <li>标签7</li>
      <li>标签8</li>
      <li>标签9</li>
      <li>标签10</li>
      <li>标签11</li>
      <li>标签12</li>
      <li>标签13</li>
      <li>标签14</li>
      <li>标签15</li>
      <li>标签16</li>
      <li>标签17</li>
      <li>标签18</li>
      <li>标签19</li>
      <li>标签20</li>
      <li>标签21</li>
      <li>标签22</li>
      <li>标签23</li>
      <li>标签24</li>
      <li>标签25</li>
      <li>标签26</li>
      <li>标签27</li>
      <li>标签28</li>
      <li>标签29</li>
      <li>标签30</li>
      <li>标签31</li>
      <li>标签32</li>
      <li>标签33</li>
      <li>标签34</li>
      <li>标签35</li>
      <li>标签36</li>
      <li>标签37</li>
      <li>标签38</li>
      <li>标签39</li>
      <li>标签40</li>
      <li>标签41</li>
      <li>标签42</li>
      <li>标签43</li>
      <li>标签44</li>
      <li>标签45</li>
      <li>标签46</li>
      <li>标签47</li>
      <li>标签48</li>
      <li>标签49</li>
      <li>标签50</li>
      <li>标签51</li>
      <li>标签52</li>
      <li>标签53</li>
      <li>标签54</li>
      <li>标签55</li>
      <li>标签56</li>
      <li>标签57</li>
      <li>标签58</li>
      <li>标签59</li>
      <li>标签60</li>
      <li>标签61</li>
      <li>标签62</li>
      <li>标签63</li>
      <li>标签64</li>
      <li>标签65</li>
      <li>标签66</li>
      <li>标签67</li>
      <li>标签68</li>
      <li>标签69</li>
      <li>标签70</li>
      <li>标签71</li>
      <li>标签72</li>
      <li>标签73</li>
      <li>标签74</li>
      <li>标签75</li>
      <li>标签76</li>
      <li>标签77</li>
      <li>标签78</li>
      <li>标签79</li>
      <li>标签80</li>
      <li>标签81</li>
      <li>标签82</li>
      <li>标签83</li>
      <li>标签84</li>
      <li>标签85</li>
      <li>标签86</li>
      <li>标签87</li>
      <li>标签88</li>
      <li>标签89</li>
      <li>标签90</li>
      <li>标签91</li>
      <li>标签92</li>
      <li>标签93</li>
      <li>标签94</li>
      <li>标签95</li>
      <li>标签96</li>
      <li>标签97</li>
      <li>标签98</li>
      <li>标签99</li>
      <li>标签100</li>
    </ul>
  </div>
</template>

<script>
  import BetterScroll from "better-scroll"

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.aaa, {
        probeType: 3, //实时监听滚动的位置
        pullUpLoad: true //开启上拉加载更多功能
      })
      /**
       * 实时监听滚动位置
       */
      this.scroll.on("scroll", position => {
        // console.log(position);
      })
      /**
       * 监听上拉加载更多事件
       */
      this.scroll.on("pullingUp", () => {
        setTimeout(() => {

          console.log("触发上拉加载更多事件");
        }, 2000)
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }
</style>
