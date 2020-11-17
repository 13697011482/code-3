<template>
  <div id="app">
    <add @add="addActive"></add>
    <list :list="list" :type="targetType"></list>
    <show @toggle="showHandler"></show>
  </div>
</template>

<script>
import Add from "./components/Add"
import List from "./components/List"
import Show from "./components/Show"

export default {
  name: 'App',
  components: {
    Add,
    List,
    Show
  },
  data(){
    return {
      list : [],
      targetType : "all"
    }
  },
  methods : {
    addActive(value){
      this.list.push(value)
    },
    showHandler(type){
      this.targetType = type
    } 
  }
}
</script>

<style>
</style>
