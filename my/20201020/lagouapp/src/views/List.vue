<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul id="list">
        <li v-for="item in list" :key="item.postId" >
                  <div class="list-pic">
                      <img :src="item.image" alt="">
                  </div>
                  <div class="list-content">
                      <h2>{{ item.company }}</h2>
                      <p>
                          <span>{{ item.name }}[{{ item.location }}]</span>
                          <span>{{ item.wages }}</span>
                      </p>
                      <p>{{ item.date | timeFormat }}</p>
                  </div>
              </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>

<script>

import moment from 'moment';
import { Toast } from 'vant';

moment.locale('zh-cn');
export default {
  data(){
    return {
      list : [],
      isLoading : false
    }
  },
  methods : {
    onRefresh(){
      this.$axios.get('/api/list').then(res => {
         Toast('刷新成功');
         setTimeout(() => {
           this.isLoading = false;
         } , 300)
         if(res.data.code == 0){
          this.list = res.data.list
        }
      })
    }
      
     
  },
  mounted(){
    this.$axios.get('/api/list').then(res => {
      console.log(res.data);
      if(res.data.code == 0){
        this.list = res.data.list
      }
    })
  },
  filters : {
    timeFormat(time){
      return moment(time).fromNow()
    }
  }
}
</script>

<style>
#list{ border-bottom:1px #e8e8e8 solid; margin-bottom: 60px;}
#list li{ border-top:1px #e8e8e8 solid; height:90px; display: flex; align-items: center;}
#list .list-pic{ width:60px; height: 60px; margin-left:14px; margin-right:10px;}
#list .list-pic img{ width:100%; height:100%;}
#list .list-content{ flex:1;}
#list .list-content h2{ font-size:18px;}
#list .list-content p:first-of-type{ font-size:14px; line-height: 26px; display: flex; justify-content: space-between;}
#list .list-content p:last-of-type{ font-size:12px;}
#list .list-content span:last-of-type{ margin-right:14px; color:#00b38a;}
</style>