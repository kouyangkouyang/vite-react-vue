<template>
  <div class="vue-component">
    <h3>我是Vue组件</h3>
    <button @click="onAdd">点击+1</button>
    <div>
      计算结果：<span>{{ num }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue_test1',
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    onAdd() {
      this.num += 1;
    },
  },
};
</script>

<style scoped></style>
