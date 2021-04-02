<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <i class="fa fa-home"/>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return {
      selected:"订单"
    }
  },
  components:{
    Tabbar,
    TabItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
