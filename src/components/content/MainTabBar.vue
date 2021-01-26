<template>
    <TabBar>
      <TabBarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <div slot="item-text">
          首页
        </div>
      </TabBarItem>
      <!-- path的值传入props -->
      <TabBarItem path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/type.svg" />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shop.svg" />
        <div slot="item-text" activeColor="blue">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/mine.svg" />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBatItem";
export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem,
    }
}
</script>

<style>

</style>