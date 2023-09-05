<script>
// @ is an alias to /src
import CountItem from '@/components/CountItem.vue';
import FieldItem from '@/components/FieldItem.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'HomeView',
  components: {
    CountItem,
    TodoList,
    FieldItem,
  },
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section class="countArea">
      <CountItem />
    </section>
    <section>
      <TodoList class="todoArea" />
    </section>
    <section class="field">
      <FieldItem />
    </section>
  </div>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 24px;
}
.countArea {
  margin-bottom: 140px;
}
.field {
  margin-top: 100px;
}
</style>
