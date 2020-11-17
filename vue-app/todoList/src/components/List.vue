<template>
  <div>
    <h1>列表</h1>
    <ul>
      <li
        v-for="(item, index) in showList"
        :key="index"
        :class="{ deleteLi: item.status === 'done' }"
      >
        {{ item.value }}
        <button
          @click="deleteHandler(item, index)"
          v-if="item.status === 'todo'"
        >
          完成
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    type: String
  },
  data() {
    return {
      status: ""
    };
  },
  computed: {
    showList() {
      return this.type === "all"
        ? this.list
        : this.list.filter(item => item.status === this.type);
    }
  },
  methods: {
    deleteHandler(item, index) {
      this.list[index].status = "done";
    }
  }
};
</script>

<style>
.deleteLi {
  text-decoration: line-through;
}
</style>
