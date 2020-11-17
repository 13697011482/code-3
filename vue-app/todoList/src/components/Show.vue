<template>
  <div>
    <h1>操作</h1>
    <button v-for="(item , index) in btn" :key="index" @click="changelist(item)">
          {{item.text}}
    </button>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      btn : [
          {"text" : "全部" , "type" : "all"},
          {"text" : "已完成" , "type" : "done"},
          {"text" : "未完成" , "type" : "todo"},
      ]
    };
  },
  methods : {
      changelist(item){
          this.$emit("toggle" , item.type)
      }
  }
};
</script>

<style>
</style>