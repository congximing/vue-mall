<template>
<div>
  <!-- <h2>首页</h2> -->
  <NavBar class="home-nav">
    <div slot="center">购物街</div>
  </NavBar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultiData} from "network/home";
export default {
    name:"home",
    data(){
      return {
        banners:[],
        recommend:[]
      }
    },
    components:{
      NavBar
    },
    created(){
      //异步操作
      getHomeMultiData().then(res=>{
        console.log(res)
        this.banners=res.banners.list;//this为当前组件对象
        this.recommend=res.recommend.list;
      })
    }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>