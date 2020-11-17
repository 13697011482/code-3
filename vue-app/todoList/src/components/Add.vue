<template>
    <div>
        <h1>添加</h1>
        <input type="text" v-model="value" ref="input"> 
        <button @click="addAction">新增</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message : "",
            value : "",
        }
    },
    methods : {
        addAction(){
            let obj = {
                value : this.value,
                status : "todo",
            }
            this.$emit("add" , obj);
            this.$refs.input.value = ""
        }
    }
}
</script>

<style>

</style>