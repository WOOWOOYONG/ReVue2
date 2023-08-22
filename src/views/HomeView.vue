<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section class="countArea">
      <CountItem />
    </section>
    <section>
      <TodoList class="todoArea" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CountItem from '@/components/CountItem.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'HomeView',
  components: {
    CountItem,
    TodoList,
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 24px;
}
.countArea {
  margin-bottom: 140px;
}
</style>
